import { FC, useEffect, useMemo, useState } from 'react'
import s from './Transfer.module.scss'

import { Button, Modal, Radio } from 'components'
import { ChangeTransferModal } from 'features'

import { getCars } from 'shared/api/routes/transfer'
import { useModal } from 'shared/hooks/useModal'
import { useTranslate } from 'shared/hooks/useTranslate'

import Image from 'next/image'
import car from '/public/assets/images/carBlackIcon.svg?url'
import ferry from '/public/assets/images/ferryIcon.svg?url'
import exchange from '/public/assets/images/exchange.svg?url'
import airport from '/public/assets/images/airportIcon.svg?url'

import { Option } from 'shared/types'
import {
  Transfer as TransferType,
  TransferOptions,
  TransferValue,
} from 'shared/types/transport'
import { Car, CarTransferType } from 'shared/types/car'

interface TransferProps {
  from?: Option
  to?: Option
  value: TransferValue
  options: TransferOptions
  onChange: (id: number | null, type: TransferType) => void
}

export const Transfer: FC<TransferProps> = ({
  options = {} as TransferOptions,
  from,
  to,
  value,
  onChange,
}) => {
  const transferModal = useModal()
  const [carType, setCarType] = useState<CarTransferType>(
    CarTransferType.PICKUP
  )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const availableTransfers = useMemo(
    () => transfersToOptions(options),
    [transfersToOptions, options]
  )
  const [selectedTransfer, setSelectedTransfer] = useState<TransferValue>(value)
  const [cars, setCars] = useState<Car[]>([])
  const t = useTranslate()
  const transfersToOptionsMock: TransferOptions = {
    // use instead of props.options
    ferry: 1,
    airport: 2,
    car: 3,
  }
  const loadCars = async () => {
    try {
      const { data } = await getCars({
        destination: `${from?.value}, ${to?.value}`,
      })
      setCars(data.data)
    } catch (error) {
      console.log(error)
    }
    transferModal.open()
  }
  const getSelectedOption = (value: number): TransferValue => {
    if (options.airport === value) {
      return {
        type: TransferType.FLIGHT,
        value,
      }
    }
    if (options.car === value) {
      return {
        type: TransferType.CAR,
        value,
      }
    }
    if (options.ferry === value) {
      return {
        type: TransferType.FERRY,
        value,
      }
    }
    return {
      type: TransferType.CAR,
      value: null,
    }
  }
  const handleTransferChange = (value: string) => {
    console.log('value :', value)
    switch (value) {
      case 'rental':
        onChange(null, TransferType.CAR)
        break

      default:
        const selectedOption = getSelectedOption(Number(value))
        if (selectedOption) {
          onChange(selectedOption.value, selectedOption.type)
        }
        break
    }
  }
  const handleCarChange = (type: CarTransferType, car?: number) => {
    setCarType(type)
    !car && onChange(null, TransferType.CAR)
    car && onChange(car, TransferType.CAR)
  }
  useEffect(() => {
    setSelectedTransfer(value)
  }, [value])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function transfersToOptions(transfers: TransferOptions): Option[] {
    let options: Option[] = []
    if (transfers.ferry) {
      options = [
        ...options,
        {
          label: 'tripSteps.transfer.ferry',
          value: transfers.ferry.toString(),
          icon: ferry,
        },
      ]
    }
    if (transfers.airport) {
      options = [
        ...options,
        {
          label: 'tripSteps.transfer.airport',
          value: transfers.airport.toString(),
          icon: airport,
        },
      ]
    }
    if (transfers.car) {
      options = [
        ...options,
        {
          label:
            carType === CarTransferType.PICKUP
              ? 'tripSteps.transfer.carPickUp'
              : 'tripSteps.transfer.carRental',
          value: transfers.car.toString() || 'rental',
          icon: car,
        },
      ]
    }
    return options
  }

  return (
    <>
      <div className={s.transfer}>
        <div className={s.transferBlock}>
          <div className={s.transferIcon}>
            <Image src={exchange} alt='' width={24} height={28} />
          </div>
        </div>
        <div className={s.transferInfo}>
          <div className={s.transferTitle}>{t('worldwideTours.label13')}: </div>
          <div className={s.transferRoute}>
            {from?.label ?? '?'} &gt; {to?.label ?? '?'}
          </div>
          <div className={s.transferType}>
            <div className={s.transferTypeIcon} />

            {from && to && !availableTransfers.length && (
              <div>{t('tripForm.ask')}</div>
            )}
            {(!from || !to) && <div>{t('tripForm.select')}</div>}

            {Boolean(availableTransfers.length) && from && to && (
              <>
                {availableTransfers.length > 1 ? (
                  <Radio
                    onChange={value => handleTransferChange(value)}
                    name=''
                    options={availableTransfers}
                    value={value?.value?.toString() ?? ''}
                  />
                ) : (
                  <div className={s.transferValue}>
                    <Image
                      alt=''
                      src={availableTransfers[0]?.icon ?? ''}
                      width={12}
                      height={12}
                    />{' '}
                    {t(availableTransfers[0]?.label)}
                  </div>
                )}
                {options.car && (
                  <Button onClick={() => loadCars()} classname={s.editBtn}>
                    {t('tripSteps.edit')}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Modal {...transferModal} title={t('changingTransfer.windowTitle')}>
        <ChangeTransferModal
          type={CarTransferType.RENTAL}
          onClick={handleCarChange}
          cars={cars}
          {...transferModal}
        />
      </Modal>
    </>
  )
}

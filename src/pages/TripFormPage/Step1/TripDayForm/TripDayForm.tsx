import React, { FC, useEffect, useState } from 'react'
import { truncate } from 'lodash'
import cn from 'classnames'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

import {
  Button,
  Counter,
  InfoIcon,
  Modal,
  PencilIcon,
  PinIcon,
  TrashIcon,
} from 'components'
import {
  ChangeLocationModal,
  ChangeAccomodationModal,
  ChangeHotelModal,
} from 'features'
import { Transfer } from '../Transfer'
import RegionCard from 'components/RegionCard/RegionCard'

import { getDayName } from 'shared/helpers/localize'
import { useModal } from 'shared/hooks/useModal'
import { getRooms } from 'shared/api/routes/rooms'
import { getClientsRoom } from 'shared/helpers/trip'
import { getNearDestinations } from 'shared/api/routes/destinations'
import { getTripDayByDestination } from 'shared/api/routes/order'
import { useTranslate } from 'shared/hooks/useTranslate'
import { getHotel } from 'shared/api/routes/hotels'

import { TRUNCATED_TEXT_SIZE } from 'shared/constants'
import { Hotel, Room } from 'shared/types/hotel'
import { CarTransferType } from 'shared/types/car'
import { OrderForm, PeopleCapacity } from 'shared/types/order'
import { TripDestination } from 'shared/types/trip'
import { Destination } from 'shared/types/destinations'
import { Option } from 'shared/types'
import {
  Transfer as TransferType,
  TransferOptions,
  TransferValue,
} from 'shared/types/transport'

import s from './TripDayForm.module.scss'
import { Taxi } from '../Taxi'

interface TripDayFormProps {
  form: OrderForm
  total: number
  index: number
  hotel: Hotel
  description: string
  duration: number
  destination: TripDestination
  day: string
  type: CarTransferType
  from?: Option
  capacity: PeopleCapacity[]
  previousDestination: TripDestination | null
  transfers: TransferOptions[]
  transferValue: TransferValue
  onChange: UseFormSetValue<FieldValues>
  onDelete?: (index: number) => void
}
export const TripDayForm: FC<TripDayFormProps> = ({
  form,
  day,
  total,
  hotel,
  from,
  duration,
  destination,
  type,
  capacity,
  description,
  index,
  previousDestination,
  transfers,
  transferValue,
  onChange,
  onDelete,
}) => {
  const [isTruncated, setIsTruncated] = useState(true)
  const [hotelRooms, setHotelRooms] = useState<Room[]>([])
  const [clientRooms, setClientRooms] = useState<Room[]>([])
  const [isRoomsAllocated, setIsRoomsAllocated] = useState<boolean>(false)
  const [nearDestinations, setNearDestinations] = useState<Destination[]>([])
  const [isShownCard, setIsShownCard] = useState(false)

  const arrivalTaxi = destination.taxi?.find(
    taxi => taxi.direction_name === 'ARRIVAL'
  )
  const departurelTaxi = destination.taxi?.find(
    taxi =>
      taxi.direction_name === 'DEPARTURE' || taxi.direction_name === 'LAYOVER'
  )

  const onClose = () => setIsShownCard(false)

  const locationModal = useModal()
  const accomodationModal = useModal()
  const hotelModal = useModal()
  const t = useTranslate()

  const loadNearLocations = async () => {
    if (previousDestination) {
      try {
        const { data } = await getNearDestinations(
          previousDestination.destination_id
        )
        setNearDestinations(data.data)
        locationModal.open()
      } catch (error) {
        console.log(error)
      }
    } else
      try {
        const { data } = await getNearDestinations(Number(from!.value))
        setNearDestinations(data.data)
        locationModal.open()
      } catch (error) {
        console.log(error)
      }
  }

  const сhangeHotel = async (id: number) => {
    try {
      const { data: newHotel } = await getHotel(id)
      const { data: newRooms } = await getRooms({ hotel: id })
      if (newHotel && newRooms.data?.length) {
        // @ts-ignore
        onChange(`destinations.${index}.hotel`, newHotel.data)
        setHotelRooms(newRooms.data)
      } else {
        alert('Sorry, these is no room left')
      }
    } catch (error) {
      console.log(error)
    }
    hotelModal.onClose()
  }
  const changeLocation = async (newLocation: number) => {
    try {
      const newTripDay = await getTripDayByDestination(newLocation)
      if (newTripDay) {
        onChange(`destinations.${index}.hotel`, newTripDay.hotel)
        onChange(`destinations.${index}.destination_id`, newTripDay.location.id)
        onChange(
          `destinations.${index}.destination_name`,
          newTripDay.location.name
        )
        onChange(
          `destinations.${index}.description`,
          newTripDay.location.description
        )
        setHotelRooms(newTripDay.rooms)
      } else
        alert(
          'Sorry, this location does not match, maybe these is no hotel or room left'
        )
    } catch (error) {
      console.log(error)
    }
  }

  const changeRoom = () => {
    accomodationModal.open()
  }
  const submitRoomChange = (roomIndex: number, newRoom: Room) => {
    const newRooms = [...clientRooms]
    newRooms[roomIndex] = newRoom
    setClientRooms(newRooms)
    onChange('rooms_ids', newRooms)
    onChange(`destinations.[${index}].rooms`, newRooms)
  }

  const handleTransferChange = (id: number | null, type: TransferType) => {
    onChange(`transports.${index}`, { value: id, type })
  }
  useEffect(() => {
    if (hotel) {
      const loadRooms = async () => {
        try {
          const rooms = await getRooms({ hotel: hotel.id })
          setHotelRooms(rooms.data.data)
        } catch (error) {
          console.log(error)
        }
      }
      loadRooms()
    }
  }, [hotel])

  useEffect(() => {
    const { isAllocated, roomsForClients } = getClientsRoom(
      hotelRooms,
      capacity
    )
    setIsRoomsAllocated(isAllocated)
    setClientRooms(roomsForClients)
    onChange(`destinations.[${index}].rooms`, roomsForClients)
  }, [hotelRooms, capacity, onChange])

  return (
    <div className={s.container}>
      {/* hide transfer within the same destionation */}
      {destination.destination_id.toString() !== from?.value ? (
        <Transfer
          destinationIndex={index}
          onChange={handleTransferChange}
          options={transfers[index]}
          from={from}
          to={{
            label: destination.destination_name,
            value: destination.destination_id.toString(),
          }}
          value={transferValue}
        />
      ) : null}

      {arrivalTaxi && (
        <Taxi
          destination_name={arrivalTaxi.destination_name}
          type_name={arrivalTaxi.type_name}
        />
      )}

      {duration > 0 && (
        <div className={s.content}>
          <div className={s.header}>
            <div className={s.day}>
              {' '}
              {t('tripSteps.day')} {day}
            </div>
            <div className={s.dayTotal}>
              {t('tripSteps.out')} {total}
            </div>
            {onDelete && (
              <div onClick={() => onDelete(index)} className={s.deleteDay}>
                <TrashIcon />
              </div>
            )}
          </div>

          <div className={s.section}>
            <div className={s.sectionTitle}>{t('tripSteps.location')}:</div>

            <div className={s.sectionWrap}>
              <div className={s.sectionValue}>
                <span className={s.valueIcon}>
                  <PinIcon />
                </span>
                <div className={s.valueName}>
                  {destination.destination_name}
                </div>
              </div>

              <Button onClick={() => loadNearLocations()} classname={s.editBtn}>
                {t('tripSteps.edit')}
              </Button>
            </div>
          </div>

          <div className={s.section}>
            <div className={s.sectionTitle}>{t('tripSteps.duration')}:</div>

            <div className={s.sectionWrap}>
              <div className={s.durationCounter}>
                {duration} {t(getDayName(duration, 'night'))}
                <div className={s.counter}>
                  <Counter
                    min={1}
                    value={duration}
                    onChange={num =>
                      onChange(`destinations.${index}.duration`, num)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={cn(s.section, s.descriptionSection)}>
            <div className={cn(s.sectionTitle, s.descriptionTitle)}>
              {t('tripSteps.description')}:
            </div>

            <div className={s.description}>
              <div className={s.descriptionText}>
                {description.length ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: isTruncated
                        ? truncate(description, { length: TRUNCATED_TEXT_SIZE })
                        : description,
                    }}
                  />
                ) : (
                  <div>-</div>
                )}
              </div>

              {isTruncated && description?.length > TRUNCATED_TEXT_SIZE && (
                <div
                  onClick={() => setIsTruncated(false)}
                  className={s.moreBtn}
                >
                  {t('destinations.buttonMore')}
                </div>
              )}
            </div>
          </div>

          <div className={s.section}>
            <div className={s.sectionTitle}>{t('tripSteps.breakfast')}:</div>

            <div className={s.sectionWrap}>
              <div className={cn(s.sectionValue, s.hotel)}>
                <span className={s.valueIcon}>
                  <PinIcon />
                </span>

                <div className={s.valueName}>{hotel?.lrweb}</div>
              </div>

              <div
                onMouseEnter={() => setIsShownCard(true)}
                onMouseLeave={() => setIsShownCard(false)}
                className={s.infoBtn}
              >
                <InfoIcon />

                <RegionCard
                  id={hotel?.id}
                  cardText={hotel?.description}
                  title={hotel?.lrweb}
                  link={`/hotels/${hotel?.id}`}
                  image={hotel?.images?.[0] || ''}
                  onClose={onClose}
                  isOpen={isShownCard}
                  isTooltip={true}
                  className={s.regionCard}
                />
              </div>

              <Button onClick={() => hotelModal.open()} classname={s.editBtn}>
                {t('tripSteps.edit')}
              </Button>
            </div>
          </div>

          {clientRooms.map((room, index) => {
            return (
              <React.Fragment key={room.id}>
                <div className={s.section}>
                  <div className={s.roomTitle}>
                    {' '}
                    {t('tripSteps.room')} {index + 1}
                  </div>

                  <div className={s.sectionWrap}>
                    <div
                      onClick={() => changeRoom()}
                      className={cn(s.sectionValue, s.changeRoom)}
                    >
                      <PinIcon />
                      <div className={s.valueName}>
                        {room.room_name}
                        <span className={s.pencil}>
                          <PencilIcon />
                        </span>
                      </div>
                    </div>

                    <div className={s.roomCapacityTitle}>
                      {t('forms.inputLabel19')}:
                    </div>

                    <div className={cn(s.sectionValue, s.roomCapacity)}>
                      {room.capacity}
                    </div>
                  </div>
                </div>

                <Modal
                  {...accomodationModal}
                  title={t('changingHotel.windowTitle')}
                  classname={s.modal}
                >
                  <ChangeAccomodationModal
                    onSubmit={newRoom => submitRoomChange(index, newRoom)}
                    hotel={hotel.lrweb}
                    rooms={hotelRooms}
                    current={room.id}
                    {...accomodationModal}
                  />
                </Modal>
              </React.Fragment>
            )
          })}
          {isRoomsAllocated && (
            <div className={s.allocationAlert}>
              {t('tripSteps.allocatedRooms')}
            </div>
          )}
        </div>
      )}

      {departurelTaxi && (
        <Taxi
          destination_name={departurelTaxi.destination_name}
          type_name={departurelTaxi.type_name}
        />
      )}

      <Modal
        {...locationModal}
        title={t('changingLocation.windowTitle')}
        classname={s.modal}
      >
        <ChangeLocationModal
          {...locationModal}
          onSubmit={id => changeLocation(id)}
          current={destination.id}
          location={destination.destination_name}
          destinations={[...nearDestinations]}
        />
      </Modal>

      <Modal
        {...hotelModal}
        title={t('changingHotel.windowTitle')}
        classname={s.modal}
      >
        <ChangeHotelModal
          onSubmit={id => сhangeHotel(id)}
          destination={destination.id}
          destinationName={destination.destination_name}
          {...hotelModal}
        />
      </Modal>
    </div>
  )
}

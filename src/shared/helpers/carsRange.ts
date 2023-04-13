import { OrderForm } from 'shared/types/order'
import { Transfer } from '../types/transport'

interface IndexRange {
  beforeIndex: number
  afterIndex: number
}

export function defineRangeForChangingCars(
  watchForm: Partial<OrderForm>,
  destinationIndex: number
): IndexRange {
  const afterIndex = watchForm.transports!.findIndex(
    (transport, index, arr) =>
      (transport?.type !== Transfer.CAR && index > destinationIndex!) ||
      index === arr.length - 1
  )
  const beforeIndex = watchForm.transports!.findLastIndex(
    (transport, index) =>
      (transport?.type !== Transfer.CAR && index < destinationIndex!) ||
      index === 0
  )

  return { beforeIndex, afterIndex }
}

import { TripDestination } from "shared/types/trip";

export const calculateDateByDurations = (
  startTripDate: Date | string,
  destinations: TripDestination[],
  index: number
): Date => {
  if (index === 0) return new Date(startTripDate);
  
  const durationAfterTripStart = destinations.slice(0, index).reduce<number>((acc, dest) => {
    return acc += dest.duration;
  }, 0);

  const resultDate = new Date(startTripDate);
  resultDate.setDate(resultDate.getDate() + durationAfterTripStart);

  return resultDate;
}
export const getDayName = (count: number, variant: 'day' | 'night'): string => {
  if (count === 1) {
    return variant === 'day' ? 'tripSteps.day' : 'tripSteps.night'
  } else {
    return variant === 'day' ? 'tripSteps.days' : 'tripSteps.nights'
  }
}

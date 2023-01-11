import {
  DESKTOP_MIDDLE_SCREEN,
  DESKTOP_MIN_SCREEN,
  LAPTOP_SCREEN,
  TABLET_MAX_SCREEN,
  TABLET_MIN_SCREEN,
  TABLET_SCREEN,
} from '../constants/screenResolutions'

export const slidesPerViewAbout = (width: number): number => {
  if (width > DESKTOP_MIDDLE_SCREEN) return 2
  if (width > DESKTOP_MIN_SCREEN) return 1.5
  if (width > TABLET_SCREEN) return 1.2
  if (width < TABLET_SCREEN) return 1
  return 0
}

export const slidesPerViewTestimonials = (width: number): number => {
  if (width > LAPTOP_SCREEN) return 3
  if (width < LAPTOP_SCREEN && width >= TABLET_MIN_SCREEN) return 2
  if (width < TABLET_MIN_SCREEN) return 1
  return 0
}

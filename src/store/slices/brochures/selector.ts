import { RootState } from 'store'

export const getSelectedBrochuresIds = (state: RootState): number[] =>
  state.brochures.brochures
    .filter(brochure => brochure.isSelected)
    .map(brochure => brochure.id)

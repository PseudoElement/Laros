import { TagProps } from 'components/Tag/Tag'

export const dropRight = (arr: TagProps[], limit: number): TagProps[] => {
  const arrDropRight = []

  for (let i = 0; i < limit; i++) {
    arrDropRight.push(arr[i])
  }
  return arrDropRight
}

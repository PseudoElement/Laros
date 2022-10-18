export default function dateFormater(date: Date): string {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let day: number | string = date.getDate()
  let month: string | number = date.getMonth()
  month = months[month]
  const year = date.getFullYear()
  if (day < 10) {
    day = '0' + day
  }

  return `${day} ${month}, ${year}`
}

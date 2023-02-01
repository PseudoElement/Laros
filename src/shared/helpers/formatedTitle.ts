export const formattedTitle = (title: string) => {
  return title.toLowerCase().replace(/[^A-Za-z]+/g, '')
}

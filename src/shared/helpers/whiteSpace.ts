export const whiteSpace = (str: string | undefined) => {
  if (str) {
    const separators = [',', '/', ':', '?'] // символы после которых добавится пробел
    let string

    for (let i = 0; i < separators.length; i++) {
      const rg = new RegExp('\\' + separators[i], 'g')
      string = str = str.replace(rg, '' + separators[i] + ' ')
    }

    return string
  }
  return ''
}

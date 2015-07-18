export function replicate(length, f) {
  // make a fake array, then convert it to a real array
  return [].slice.call([].fill.call({ length }, 0)).map(f)
}

export function intercalate(arr, del=',') {
  let str = arr.reverse().reduce((acc, c) => `${c}${del}${acc}`, '')
  return str.substring(0, str.length-1)
}

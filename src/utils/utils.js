export function getId(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr.sort((a, b) => a.id - b.id)[arr.length - 1].id + 1;
}

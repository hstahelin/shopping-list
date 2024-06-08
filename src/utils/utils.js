export function getId(arr) {
  return arr.sort((a, b) => a.id - b.id)[arr.length - 1].id + 1;
}

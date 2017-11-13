export const wait = time => new Promise(resolve => setTimeout(resolve, time))

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

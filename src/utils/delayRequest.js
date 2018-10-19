export default function delayRequest (time) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(true) ,time)
  })
}
const p1 = Promise.resolve(1)
const p2 = Promise.reject('my error')
const p3 = Promise.resolve(3)

// ;(async () => {
//   const res = await Promise.all([p1, p2, p3]).catch(e => console.log(e))
//   console.log('res: ', res)
// })()

;(async () => {
  const res = await Promise.allSettled([p1, p2, p3])
  console.log('res: ', res)
})()
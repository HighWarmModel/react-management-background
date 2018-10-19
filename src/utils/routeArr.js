/**
 * 路由同级
 * @param {*} arr 
 */
function routeArr (arr) {
  let arrs = []
  arr.forEach(v => {
    let obj = {...v}
    if(obj.routes) {
      arrs = [...arrs, ...routeArr(obj.routes)]
    }
    arrs.push(obj)
  })
  return arrs
}
export default routeArr
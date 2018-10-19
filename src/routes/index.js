import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import Dashboard from '../views/Dashboard/Dashboard'
import routesConfig from './routes.config'
// function routeArr (arr) {
//   let arrs = []
//   arr.forEach(v => {
//     let obj = {...v}
//     if(obj.routes) {
//       arrs = [...arrs, ...routeArr(obj.routes)]
//     }
//     arrs.push(obj)
//   })
//   return arrs
// }
function RouteComponent (props) {
  const routeLists = props.routeArr.map(v => {
    return (
       <Route exact={v.exact} key={v.id} path={v.path} component={v.component ? v.component : null}></Route>
    )
  })
 return <Switch>{routeLists}</Switch>
}
const MainRouter = () => (
  // <Provider >
    <HashRouter>
      <RouteComponent routeArr={routesConfig} />
    </HashRouter>
  // </Provider>
)
export default MainRouter
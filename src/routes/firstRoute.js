import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routesConfig from './routes.config'
import routeArr from '../utils/routeArr'
function FirstRoute () {
 return (
   <Switch>
     {routeArr(routesConfig[1].routes).map(v => {
    return v.redirect ? <Redirect exact key={v.id} from={v.from} to={v.to} /> : <Route exact key={v.id} path={v.path}  component={v.component ? v.component : null}></Route>
     })}
   </Switch>
 )
}
export default FirstRoute
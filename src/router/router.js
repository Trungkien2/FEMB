// ** react import 
import { Suspense,Lazy, UseContext, lazy } from "react";
import { useEffect } from "react";




// ** router component
import { BrowserRouter,Route,Switch,Redirect, Link, useHistory   } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { Loginpage,Homepgae} from "../pages";
const Homepage = lazy(()=>import('../pages/Homepgae'))

const ProTect = ({component: Component, ...rest })=>{
  const { userToken } = useSelector((state) => state.auth);
  return <Route
  {...rest}
  render={(props) => userToken ? <Component {...props} /> :  <Redirect to='/login' />
  }
/>

}

const Router = ()=>{
  
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={Loginpage}/>
                <ProTect  path='/' component={Homepage}/>
                <Route path="*" component={() => "404 Not found."} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
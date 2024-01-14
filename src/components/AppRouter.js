import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Home from '../pages/Home';
import { useContext } from 'react';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    // console.log( "App ROUTER : ")
    // console.log(user)

    return ( 
        <Routes>
            {localStorage.isAuth && authRoutes.map(({path, Component})=>
            <Route key={path} path={path} Component={Component} exact></Route>
            )}
            {publicRoutes.map(({path, Component})=>
            <Route key={path} path={path} Component={Component} exact></Route>
            )}
            <Route to={Home}/>
        </Routes>
     );
}

export default AppRouter;
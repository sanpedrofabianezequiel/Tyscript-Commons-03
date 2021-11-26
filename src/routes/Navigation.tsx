import React, { Suspense } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link,NavLink,Navigate } from "react-router-dom";
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import logo  from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
    return (
        <Suspense fallback={ <span> Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo}  alt="React logo" />
                        <ul>
                            {
                                routes.map( (x,item)=>(
                                    <li key={item.toString()} >
                                        <NavLink to={x.to} className={({isActive})=> isActive ? 'nav-active':''} >{x.name}</NavLink>
                                    </li>
                                ))
                            }                      
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map((x,item)=>(
                                <Route key={item.toString()} path={x.path} element= {<x.Component/>}  />
                            ))
                        }
                            <Route path='/*' element= {<Navigate to={routes[0].to} replace />}  />
                        
                    </Routes>
                </div>           
            </BrowserRouter>
        </Suspense>
        
    )
}

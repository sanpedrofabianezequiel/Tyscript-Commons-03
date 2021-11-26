//import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/pages";

import { lazy } from "react";
import { NoLazt } from '../01-lazyload/pages/NoLazt';

type IJSXComponent = ()=> JSX.Element;


interface Route {
    to:string;
    path:string;
    Component:React.LazyExoticComponent<IJSXComponent> |IJSXComponent;
    name:string;
}

const LazyLayout= lazy(()=> import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));//In this case we need write de Default export not in index;


//In this case we have lazy loading and full loading
//this comodin allow that all children has the PATH /LAZYLOAD

//IMPORTANTE EL COMODIN SE USA EN EL PATH
export const routes:Route [] = [
    {
        to:'/lazyload',
        path:'/lazyload/*',
        Component:LazyLayout,
        name:'LazyLayout - Dash'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component:NoLazt,
        name:'No Lazy'
    }
]
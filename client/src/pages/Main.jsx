import React, { Suspense, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
// import Emails from '../components/Emails';
import { Outlet } from 'react-router-dom';
import SuspenceLoader from '../components/common/SuspenceLoader';


export default function Main() {
    
    const [toggle,setToggle] = useState(true);
    const changeToggle = (val)=>{
        setToggle(val)
    }
  return (

    <div>
        <Header toggle = {toggle} changeToggle={changeToggle}/>
        <Sidebar toggle = {toggle} changeToggle={changeToggle}/>
        {/* <Emails toggle = {toggle}/> */}
        <Suspense fallback={<SuspenceLoader />}>
          <Outlet context={{toggle}} />
        </Suspense>
    </div>
  )
}

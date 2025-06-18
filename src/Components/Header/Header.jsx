import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    //inline styling storing the style in one variable, objc of obj
    //in small project, in component wich has this style without usibility
  /*   inline styling :1-no reusibility
                      2-not ableto use animation,or frames
                      3-*/
    const header={
       div: {
        background:"lightgray",
        padding:"1rem",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
       },
       img: {
         width : "100px",
       }}
  return (
    <div style={header.div}>
        <img  style={header.img}src="src/assets/logo.png" alt="logo" />
        <p style={{color:"blue"}}>ClruswaySchool</p>

       {/* it should be not apear this style because it doesnot import the navebar.css in header
        <p className='danger'>hallo there</p> */}
        <Navbar/>
    </div>
  )
}

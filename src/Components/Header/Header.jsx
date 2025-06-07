import React from 'react'

export default function Header() {
  return (
    <div style={{
        background:"lightgray",
        padding:"1rem",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
        }}>
        <img  style={{width:"100px"}}src="src/assets/logo.png" alt="logo" />
        <p style={{color:"blue"}}>ClruswaySchool</p>
    </div>
  )
}

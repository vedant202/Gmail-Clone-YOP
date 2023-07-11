import { Divider } from '@mui/material'
import React from 'react'

export default function NoEmails({message}) {
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginTop:50,opacity:0.8}}>
        <p>{message?.heading}</p>
        <p>{message?.subHeading}</p>
        <Divider style={{width:'100%'}}/>
    </div>
  )
}

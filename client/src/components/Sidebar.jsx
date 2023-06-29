import { Drawer } from '@mui/material'
import React, { useState } from 'react'
import SidebarContent from './SidebarContent'

export default function Sidebar({toggle,changeToggle}) {
    
  return (
    <div>
        <Drawer 
            anchor='left'
            open={toggle}
            hideBackdrop={true}
            ModalProps={{
                keepMounted:true
            }}
            variant='persistent'
            sx={{
            '& .MuiDrawer-paper':{
                marginTop:'64px',
                width:240,
                background:'#F5F5F5',
                borderRight:'none',
                height:'calc(100vh-64px)'
            }
            }}
        >
            <SidebarContent />
        </Drawer>
    </div>
  )
}

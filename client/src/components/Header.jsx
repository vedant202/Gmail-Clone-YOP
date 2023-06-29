import React from 'react'
import {AppBar, Toolbar, styled, Box} from '@mui/material'
import {Menu as MenuIcon, Padding, Search, Tune, HelpOutlineOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined} from '@mui/icons-material'
import {InputBase} from '@mui/material'
import { gmailLogo } from '../constants/constants'

const StyledAppBar = styled(AppBar)({
    backgroundColor:'#F5F5F5',
    boxShadow:'none',
})

const SearchWrapper = styled(Box)({
    background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWindth:720,
    height:48,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    Padding:" 0 20px",
    '& > div':{
        width:'100%',
        Padding:" 0 10px",
    }
})

const OptionsWrapper = styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:'20px',
    }
})

export default function Header({toggle,changeToggle}) {
    const handleEventClick = ()=>{
        (toggle==true)?changeToggle(false):changeToggle(true)
    }
  return (
    <div>
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcon onClick={()=>handleEventClick()} style={{cursor:'pointer'}} color='action'></MenuIcon>
                <img src={gmailLogo} style={{width:110,marginLeft:15}}/>

                <SearchWrapper>
                    <Search color='action'/>
                    <InputBase placeholder='Search mail' />
                    <Tune color='action'/>
                </SearchWrapper>

                <OptionsWrapper>
                    <HelpOutlineOutlined color='action'/>
                    <SettingsOutlined color='action'></SettingsOutlined>
                    <AppsOutlined color='action' />
                    <AccountCircleOutlined color='action' />
                </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
    </div>
  )
}

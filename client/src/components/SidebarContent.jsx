import { Box, Button, List, ListItem,ListItemButton } from '@mui/material'
import { CreateOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "../css/SideContent.css"
import { SIDEBAR_DATA } from '../config/sidebar.config'
import ComposeMail from './ComposeMail'
import { NavLink, useParams } from 'react-router-dom'
import { routes } from '../routes/routes'

export default function SidebarContent() {
    const {type} = useParams();

    const [clickCompose,setClickCompose] = useState(false);

    const open = ()=>{
        setClickCompose(true);
    }
  return (
    <div>
        <Box className='box'>
            <Button onClick={()=>open()} className='sidebar_compose'><CreateOutlined /> Compose</Button>
            <List className='sidebar_list'>
                {
                    SIDEBAR_DATA.map(data=>{
                        return <NavLink className="navlink" key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem style={type.toLowerCase()===data.name.toLowerCase()?{
                            backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"
                        }:{}} ><ListItemButton className='listbutton'><data.icon fontSize='small' />{data.title}</ListItemButton></ListItem>
                        </NavLink> 
                    })
                }
            </List>
            <ComposeMail clickCompose={clickCompose} setClickCompose={setClickCompose} />
        </Box>
        
        
    </div>
  )
}

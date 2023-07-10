import React from 'react'
import { Checkbox } from "@mui/material";
import { Star, StarBorder } from '@mui/icons-material';
import "../css/Email.css";
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes/routes';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

export default function Email({mail,selectedEmails,setRefreshScreen}) {
  const navigate = useNavigate();
    console.log(mail)

  const toggleStarredService = useApi(API_URLS.toggleStarredEmails)  

  const toggleStarredMails = ()=>{
    toggleStarredService.call({id:mail._id, value:!mail.starred});
    setRefreshScreen(prevState=>!prevState);
  }

  return (
    <div className='email_wrapper'>
      <div>
        <Checkbox checked={selectedEmails?.includes(mail._id)} size='small'/>
        {
          mail.starred?
            <Star style={{marginRight:10,overflow:'hidden'}} size='small' onClick={()=>{toggleStarredMails()}}/>
          :
          <StarBorder style={{marginRight:10,overflow:'hidden'}} size='small' onClick={()=>{toggleStarredMails()}}/>
        }
        
      </div>
        <div className='sub' onClick={()=>{
          navigate(routes.view.path,{state:{email:mail}})
        }} style={{width: '100%'}}>
            <p style={{width:200}}>
            {mail && mail.name}
            </p>
            <p className='sub_inbox'>Inbox</p>
            <p>{mail && mail.Subject} {mail && mail.Body && '-'} {mail.Body.slice(0,70)+"..."}</p>
            <p className='sub_date'>{mail && (new window.Date(mail.date)).getDate()}{mail && (new window.Date(mail.date)).toLocaleString('default',{month:'long'})}</p>
        </div>
    </div>
  )
}

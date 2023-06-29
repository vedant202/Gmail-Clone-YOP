import { Close,DeleteOutlined } from '@mui/icons-material'
import { Dialog, InputBase, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import "../css/ComposeMail.css"
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/api.urls'

const dialogStyle = {
    height:'90%',
    width:'80%',
    maxHeight:'100%',
    maxWidth:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0',
}

const config = {
    Host : "smtp.elasticemail.com",
    // calling environmental variables from .env file
    Username : process.env.REACT_APP_USERNAME,
    Password : process.env.REACT_APP_PASSWORD,
}

export default function ComposeMail({clickCompose, setClickCompose}) {

    const [receipents,setReceipents] = useState("")
    const [subject,setSubject] = useState("")
    const [message,setMessage] = useState("")
    const sentMailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService = useApi(API_URLS.saveDraftEmail)
    // function for closing compose
    const close =(e)=>{
        const payload = {
            to:receipents,
            From:"vedantdhenge9@gmail.com",
            Subject : subject,
            Body : message,
            date:new Date(),
            image:'',
            name:'Vedant Dhenge',
            starred:false,
            type:'drafts'

        }

        //sending data to api
        saveDraftService.call(payload);

        //checking error in api 
        if(!saveDraftService.error){
            //closing compose
            setClickCompose(false);
            setReceipents("");
            setSubject("");
            setMessage("");
        }
        // setClickCompose(false);
    }

    const sendMail =(e)=>{
        e.preventDefault();
        console.log(receipents,subject,message);

        // sending smtp mail 
        if(window.Email){
            window.Email.send({
                ...config,
                To : receipents,
                From : "vedantdhenge9@gmail.com",
                Subject : subject,
                Body : message
            }).then(
              message => alert(message)
            );
        }


        const payload = {
            to:receipents,
            From:"vedantdhenge9@gmail.com",
            Subject : subject,
            Body : message,
            date:new Date(),
            image:'',
            name:'Vedant Dhenge',
            starred:false,
            type:'sent'

        }

        //sending data to api
        sentMailService.call(payload);

        //checking error in api 
        if(!sentMailService.error){
            //closing compose
            setClickCompose(false);
            setReceipents("");
            setSubject("");
            setMessage("");
        }

        //closing compose
        setClickCompose(false);
    }
    
    const valueChange = (e)=>{
        console.log("Change "+e.target.name+ e.target.value)
        if(e.target.name==="Receipents"){
            setReceipents(e.target.value)
        }
        else if(e.target.name==="Subject"){
            setSubject(e.target.value)
        }
        else if(e.target.name==="Message"){
            setMessage(e.target.value);
        }
    }

  return (
    <div>
        <Dialog 
        open={clickCompose}
        PaperProps={{sx:dialogStyle}}
        >
            
            <div className='dialogHeader'><p>New Message</p>
            <Close fontSize='small' onClick={(e)=>close(e)} style={{cursor:'pointer'}}/>
            </div>
            <div className='dialogMainContent'>
                <InputBase placeholder='Receipients' name='Receipents' onChange={(e)=>{valueChange(e)}}></InputBase>
                <InputBase placeholder='Subject' name='Subject' onChange={(e)=>{valueChange(e)}}></InputBase>
            </div>
            <TextField 
                multiline
                rows={16}
                name="Message"
                onChange={(e)=>{valueChange(e)}}
                className='textField'
            ></TextField>
            <div className='footer'><Button onClick={(e)=>sendMail(e)} className='sendButton'>Send</Button>
            <DeleteOutlined onClick={()=>close()} style={{cursor:'pointer'}} />
            </div>
        </Dialog>
    </div>
  )
}

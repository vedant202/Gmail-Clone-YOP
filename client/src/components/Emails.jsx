
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import { useEffect, useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import "../css/Emails.css";
import Email from "./Email";

const Emails = ()=>{
    const {toggle} = useOutletContext();
    
    const {type} = useParams();
    
    const [refreshScreen,setRefreshScreen] = useState(false)

    const api = useApi(API_URLS.getEmailFromType);
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);

    const [selectedEmails, setSelectedEmails] = useState([]);

    useEffect(()=>{
        api.call({},type);
    },[type,refreshScreen])
    
    const selectAllEmails = (e)=>{
        if(e.target.checked){
            let emails = api?.response?.map((mail)=>mail._id);
            setSelectedEmails(emails);
        }
        else{
            setSelectedEmails([]);

        }
    }

    const deleteSelectedEmails = (e)=>{
        if(type==='bin'){

        }
        else{
            moveEmailsToBinService.call(selectedEmails);
        }
        setRefreshScreen(prevState => !prevState)
    }

    return (
        <div style={toggle?{marginLeft:250, width:'calc(100% - 270px)'} : { width:'100%' }}>
            <div className="emailHeader">
                <Checkbox onChange={(e)=>{selectAllEmails(e)}}  size="small" />
                <DeleteOutline style={{cursor:'pointer'}} onClick={(e)=>{deleteSelectedEmails(e)}} />
            </div>

            <div>
                {
                    api && api.response && api.response.map((mail)=>(
                        <Email selectedEmails={selectedEmails} key={mail._id} mail={mail} setRefreshScreen={setRefreshScreen} />
                    ))
                }
            </div> 
        </div>
    )
}

export default Emails;
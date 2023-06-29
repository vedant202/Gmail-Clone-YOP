
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import { useEffect } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import "../css/Emails.css";
import Email from "./Email";

const Emails = ()=>{
    const {toggle} = useOutletContext();
    
    const {type} = useParams();
    
    const api = useApi(API_URLS.getEmailFromType);

    useEffect(()=>{
        api.call({},type);
    },[type])
    

    return (
        <div style={toggle?{marginLeft:250, width:'100%'} : { width:'100%' }}>
            <div className="emailHeader">
                <Checkbox size="small" />
                <DeleteOutline />
            </div>

            <div>
                {
                    api && api.response && api.response.map((mail)=>(
                        <Email key={mail._id} mail={mail} />
                    ))
                }
            </div> 
        </div>
    )
}

export default Emails;
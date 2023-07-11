import { useOutletContext,useLocation } from "react-router-dom";
import { ArrowBack,Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../constants/constants";
import useApi from "../hooks/useApi";
import "../css/ViewEmail.css"
import { API_URLS } from "../services/api.urls";

const ViewEmails = ()=>{
    const {toggle} = useOutletContext();
    const {state} = useLocation();
    const {email} = state;
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
    const deleteEmail = ()=>{
        moveEmailsToBinService.call([email._id]);
        window.history.back();
    }
    return(
        <div style={toggle?{marginLeft:250} : { width:'100%' }}>
            <div className="viewEmail_iconwrapper">
                <ArrowBack onClick={()=>{window.history.back()}} style={{cursor:'pointer'}} color="action" fontSize="small"/>
                <Delete  color="action" fontSize="small" onClick={()=>deleteEmail()} style={{marginLeft:40,cursor:'pointer'}}/>
            </div>
            <div className="viewEmail_subject">
                <p>{email.Subject} <span className="viewEmail_subject_inbox">Inbox</span></p>
                
                
            </div>
            <div style={{width:'100%'}}>
                <div className="viewEmail_email">
                    <img src={emptyProfilePic} style={{marginRight:'10px'}}></img>
                    <div className="Container" style={{width:'100%'}}>
                        <div style={{width:'100%'}}>
                            <div className="viewEmail_email_name">
                                <p>{email.name}
                                <span>&nbsp; &#60;{email.to}&#62;</span>
                                </p>
                                <div className="viewEmail_email_date">
                                {email && (new window.Date(email.date)).getDate()}&nbsp;{email && (new window.Date(email.date)).toLocaleString('default',{month:'long'})}&nbsp;
                                {email && (new window.Date(email.date).getFullYear())}
                                </div>
                            </div>
                        </div>
                        <p style={{marginTop:20}}>{email.Body}</p>
                    </div>
                    
                </div>
                {/* <div className="viewEmail_email_body"></div> */}
            </div>
        </div>
    )
}

export default ViewEmails;

import { useOutletContext } from "react-router-dom";

const ViewEmails = ()=>{
    const {toggle} = useOutletContext();
    return(
        <div style={toggle?{marginLeft:250, width:'100%'} : { width:'100%' }}>View Emails</div>
    )
}

export default ViewEmails;

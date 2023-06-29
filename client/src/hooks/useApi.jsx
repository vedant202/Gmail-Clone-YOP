//Middleware for api , handling response, error, loading

import { useState } from "react";
import API from "../services/api";

const useApi = (urlObject)=>{
    // setting api responses and error
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    // calling api
    const call = async(payload, type='')=>{
        setResponse(null)
        setError("")
        setIsLoading(true)
        try {
            //calling api from services;
            let res = await API(urlObject,payload,type);
            setResponse(res.data);
        } catch (error) {
            setError(error.message)
        }
        finally{
            setIsLoading(false);
        }

    }
    return {call, response, error, isLoading}

}

export default useApi;
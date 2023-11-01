import React from 'react';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

export default function Notif(message, type, path) {
    if(type === 'success'){
        return(
            //change page to path
            <Navigate replace to path/>,
            //success message
            toast.success(path, {
                autoClose: 2000
            })
        );
    }
    else if(type === 'error'){
        return(
            //error message
            toast.error(message, {
                autoClose: 2000
            })
        );
    }
}
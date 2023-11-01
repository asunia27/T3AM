import React from 'react';
import { toast } from 'react-toastify';

export default function Notif(message, type, path) {
    if(type == 'success'){
        return(
            toast.success(message, {
                autoClose: 2000
                //on close, move to path
            })
        );
    }
    else if(type == 'error'){
        return(
            toast.error(message, {
                autoClose: 2000
            })
        );
    }
}
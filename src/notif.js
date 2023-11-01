import React from 'react';
import { toast } from 'react-toastify';

export default function Notif() {
    return(
        toast.success("Inquiry sent successfully!", {
            autoClose: 2000
        })
    );
}
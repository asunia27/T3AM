import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

function Node() {

    return (
        <>
            <FontAwesomeIcon icon={faCircleDot} />
        </>
    );
}

export default function TimelineDisplay() {

    return (
        <Node/>
    );
}
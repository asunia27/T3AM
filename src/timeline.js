import React, { useRef, useState } from 'react';
import './timeline.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const testNodes = [{
    id: 1,
    semName: 'FALL 2023'
}, {
    id: 2,
    semName: 'WINTER 2023'
}, {
    id: 3,
    semName: 'SPRING 2024'
}, {
    id: 4,
    semName: 'SUMMER 2024'
}, {
    id: 5,
    semName: 'FALL 2024'
}
];

function Node({semester, nodeId}) {

    return (
        <>
            <div className='node-container node-scroll' id={'node-'+nodeId}>
                <div className='card mb-5 rounded-pill'>
                    <div className='card-body'>
                        {semester}
                    </div>
                </div>
                <FontAwesomeIcon icon={faCircleDot} className='node-icon' />

            </div>
        </>
    );
}

export default function TimelineDisplay() {

    const [currentNode, setCurrentNode] = useState(0)

    function scrollNext() {
        //console.log('(NEXT) pre update ' + currentNode)
        setCurrentNode(currentNode => {
            if (currentNode <= testNodes.length)
                currentNode = currentNode + 1
            //console.log('(NEXT) post update ' + currentNode)
            let nextId = '#node-' + currentNode
            let nextNode = document.querySelector(nextId)
            //console.log('(NEXT) SCROLLING TO: ' + nextId)
            nextNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
            //console.log('END NEXT');
            return currentNode;
        })
    
    }

    function scrollPrev() {
        setCurrentNode(currentNode => {
            if (currentNode > 0)
                currentNode = currentNode - 1
            //console.log(currentNode)
            let prevId = '#node-' + currentNode
            let prevNode = document.querySelector(prevId)
            //console.log('(PREV) SCROLLING TO: ' + prevId)
            prevNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
            //console.log('END PREV');
            return currentNode;
        })
        
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <FontAwesomeIcon icon={faChevronCircleLeft} className='arrow-btn' style={{marginRight: '10rem'}} onClick={scrollPrev}/>
                <FontAwesomeIcon icon={faChevronCircleRight} className='arrow-btn' style={{marginLeft: '10rem'}} onClick={scrollNext}/>
            </div>
            <div className='d-flex align-items-center tl-container'>
                <div className='node-container'></div> {/* empty div to pad the beginning of the timeline */}
                <div className='node-container'></div> {/* empty div to pad the beginning of the timeline */}
                <div className='node-container'></div> {/* empty div to pad the beginning of the timeline */}
                <Node semester={'START'} nodeId={0}/>
                {testNodes.map((sem) => (
                    <Node key={sem.id} semester={sem.semName} nodeId={sem.id}/>
                ))}
                <Node semester={'FINISH'} nodeId={testNodes.length + 1}/>
                <div className='node-container'></div> {/* empty div to pad the end of the timeline */}
                <div className='node-container'></div> {/* empty div to pad the end of the timeline */}
                <div className='node-container'></div> {/* empty div to pad the end of the timeline */}
            </div>
        </>
    );
}
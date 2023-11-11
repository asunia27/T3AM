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
    semName: 'MAYMESTER 2024'
}, {
    id: 5,
    semName: 'FALL 2024'
}
];

function Node({semester, nodeId}) {

    return (
        <>
            <div className='node-scroll' id={'node-'+nodeId}>
                <div className='card mb-5 rounded-pill medium-blue-bg' style={{marginLeft: '8rem', marginRight: '8rem'}}>
                    <div className='card-body primary-text'>
                        {semester}
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='tl-line'></div>
                    <FontAwesomeIcon icon={faCircleDot} className='node-icon light-blue' />
                    <div className='tl-line'></div>
                </div>
            </div>
        </>
    );
}

function EndNode({text, nodeId}) {
    if (text=='START')
    {
        return (
            <>
                <div className='node-scroll' id={'node-'+nodeId}>
                    <div className='card mb-5 rounded-pill medium-blue-bg' style={{marginLeft: '8rem', marginRight: '8rem'}}>
                        <div className='card-body primary-text'>
                            {text}
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-end'>
                        <div style={{paddingLeft: '10rem'}}></div>
                        <FontAwesomeIcon icon={faCircleDot} className='node-icon medium-blue' />
                        <div className='tl-line'></div>
                    </div>
                </div>
            </>
        );
    }
    else
    {
        return (
            <>
                <div className='node-scroll' id={'node-'+nodeId}>
                    <div className='card mb-5 rounded-pill medium-blue-bg' style={{marginLeft: '8rem', marginRight: '8rem'}}>
                        <div className='card-body primary-text'>
                            {text}
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='tl-line'></div>
                        <FontAwesomeIcon icon={faCircleDot} className='node-icon medium-blue' />
                        <div style={{paddingRight: '10rem'}}></div>
                    </div>
                </div>
            </>
        );
    }
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
            <div className='' style={{position: 'absolute', marginTop: '10rem'}}>
                <FontAwesomeIcon icon={faChevronCircleLeft} className='arrow-btn light-blue' style={{marginRight: '10rem'}} onClick={scrollPrev}/>
                <FontAwesomeIcon icon={faChevronCircleRight} className='arrow-btn light-blue' style={{marginLeft: '10rem'}} onClick={scrollNext}/>
            </div>
            <div className='d-flex align-items-center tl-container' style={{zIndex: -1000}}>
                <div className='padding-container'></div> {/* empty div to pad the beginning of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the beginning of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the beginning of the timeline */}
                <EndNode text={'START'} nodeId={0}/>
                {testNodes.map((sem) => (
                    <Node key={sem.id} semester={sem.semName} nodeId={sem.id}/>
                ))}
                <EndNode text={'FINISH'} nodeId={testNodes.length + 1}/>
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
            </div>
        </>
    );
}
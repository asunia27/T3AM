import React, { useRef, useState } from 'react';
import './timeline.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const testNodes = [{
    id: 1,
    semName: 'FALL 2023',
    taskList: [
        'Make some friends from classes',
        'Talk with at least 1 professor',
        "Look into the different med schools and see which you actually like and would be interested in finding more about",
        "Study for the MCAT",
        "Try to get some clinical experience",
        "Maintain a high GPA",
        "Join a club related to the field",
        "Try not to be too pressured and cry",
        "Think about what you want to specialize in",
        "Try to learn to cook to save money",
        "Try to sleep early to be able to study better"
    ]
}, {
    id: 2,
    semName: 'WINTER 2023',
    taskList: [
        'Go visit some campuses',
        'Find a part time job',
        "Ask professors if they are willing to write some letters of recommendations for you",
        "Make more friends in classes",
        "Get some leadership roles",
        "Volunteer",
        "Eat out less",
        "Get ahead in work so that you can go on a trip for break"
    ]
}, {
    id: 3,
    semName: 'SPRING 2024',
    taskList: [
        "Make more friends",
        "Eat out less",
        "Get letters of recommendations",
        "Study for MCAT"
    ]
}, {
    id: 4,
    semName: 'MAYMESTER 2024',
    taskList: [
        "Study for MCAT",
        "Maintain high GPA",
        "Get clinical experience",
        "Talk more with professors"
    ]
}, {
    id: 5,
    semName: 'FALL 2024',
    taskList: [
        "Try to be a TA for a professor",
        "Volunteer",
        "Confirm a specialization",
        "Confirm a Medical School",
        "Study for MCAT"
    ]
}
];

function Node({semester, nodeId, onOpen}) {

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
                    <FontAwesomeIcon icon={faCircleDot} className='node-icon main-nodes' onClick={onOpen}/>
                    <div className='tl-line'></div>
                </div>
            </div>
        </>
    );
}

function EndNode({text, nodeId}) {
    if (text==='START')
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

function TaskBox({semester, tasks, isActive, onClose}) {
    if (isActive) {
    {console.log('opening modal')}
    return (
        <>
            <div className="modal fade show" id="" tabIndex="-1" style={{display: 'block', zIndex: 2}}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content dark-blue-bg border outer-border">
                        <div className="modal-header border-style">
                            <h1 className="modal-title fs-5 primary-text" id="">{semester}</h1>
                            <FontAwesomeIcon icon={faXmark} onClick={onClose} className='x-btn'/>
                        </div>
                        <div className="modal-body">
                            {tasks.map((t) => (
                                <>
                                    <div className='task-container p-2 px-3 my-3 modal-text'>{t}</div>
                                </>
                            ))}
                        </div>
                        <div className="modal-footer border-style">
                            <button type="button" className="btn btn-secondary btn-style" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );}
}

export default function TimelineDisplay() {

    const [currentNode, setCurrentNode] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);

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
            <div className='' style={{position: 'absolute', marginTop: '10rem', zIndex: 1}}>
                <FontAwesomeIcon icon={faChevronCircleLeft} className='arrow-btn light-blue' style={{marginRight: '10rem'}} onClick={scrollPrev}/>
                <FontAwesomeIcon icon={faChevronCircleRight} className='arrow-btn light-blue' style={{marginLeft: '10rem'}} onClick={scrollNext}/>
            </div>
            <div className='d-flex align-items-center tl-container' style={{}}>
                <div className='padding-container'></div> {/* empty div to pad the beginning of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the beginning of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the beginning of the timeline */}
                <EndNode text={'START'} nodeId={0}/>
                {testNodes.map((sem, i) => {
                    return [
                    <>
                        <Node key={sem.id} semester={sem.semName} nodeId={i+1} onOpen={() => setActiveIndex(i+1)}/>
                        <TaskBox semester={sem.semName} tasks={sem.taskList} isActive={activeIndex === i+1} onClose={() => setActiveIndex(-1)}/>
                    </>]
                })}
                <EndNode text={'FINISH'} nodeId={testNodes.length + 1}/>
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
            </div>
        </>
    );
}
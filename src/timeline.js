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
        'Do something',
        'Do some other thing',
        "Some task that's really long for some reason and I'm just making stuff up to take up more space.",
        "Testing overflow so this list should be really long yayyyyy",
        "Some task 1",
        "Some task 2",
        "Some task 3",
        "Some task 4",
        "idgjslkjhbskdfjijnslfkhujdsriofnhskfjdglsekrfdhskldfjksjdfhkljglkshhdkljglhkfdjskldfjglksdjfdhkfjhskdljhskdlfjlkdfdslfh",
        "idgjslkjhbskdfjijnslfkhujdsriofnhskfjdglsekrfdhskldfjksjdfhkljglkshhdkljglhkfdjskldfjglksdjfdhkfjhskdljhskdlfjlkdfdslfh",
        "idgjslkjhbskdfjijnslfkhujdsriofnhskfjdglsekrfdhskldfjksjdfhkljglkshhdkljglhkfdjskldfjglksdjfdhkfjhskdljhskdlfjlkdfdslfh",
        "idgjslkjhbskdfjijnslfkhujdsriofnhskfjdglsekrfdhskldfjksjdfhkljglkshhdkljglhkfdjskldfjglksdjfdhkfjhskdljhskdlfjlkdfdslfh"
    ]
}, {
    id: 2,
    semName: 'WINTER 2023',
    taskList: [
        'Do something',
        'Do some other thing',
        "Some task that's really long for some reason and I'm just making stuff up to take up more space.",
        "Testing overflow so this list should be really long yayyyyy",
        "Some task 1",
        "Some task 2",
        "Some task 3",
        "Some task 4"
    ]
}, {
    id: 3,
    semName: 'SPRING 2024',
    taskList: [
        "Some task 1",
        "Some task 2",
        "Some task 3",
        "Some task 4"
    ]
}, {
    id: 4,
    semName: 'MAYMESTER 2024',
    taskList: [
        "Some task 1",
        "Some task 2",
        "Some task 3",
        "Some task 4"
    ]
}, {
    id: 5,
    semName: 'FALL 2024',
    taskList: [
        "Some task 1",
        "Some task 2",
        "Some task 3",
        "Some task 4"
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
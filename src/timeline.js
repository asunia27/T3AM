import React, { useRef, useState } from 'react';
import './timeline.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import NodeEdit from './node-mod';

const testNodes = [{
    id: 2023.4,
    semester: 'FALL',
    year: '2023',
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
    id: 2024.1,
    semester: 'SPRING',
    year: '2024',
    taskList: [
        "Make more friends",
        "Eat out less",
        "Get letters of recommendations",
        "Study for MCAT"
    ]
}, {
    id: 2024.4,
    semester: 'FALL',
    year: '2024',
    taskList: [
        "Try to be a TA for a professor",
        "Volunteer",
        "Confirm a specialization",
        "Confirm a Medical School",
        "Study for MCAT"
    ]
}];

function Node({semester, year, nodeId, onOpen}) {

    return (
        <>
            <div className='node-scroll' id={'node-'+nodeId}>
                <div className='card mb-5 rounded-pill medium-blue-bg' style={{marginLeft: '8rem', marginRight: '8rem'}}>
                    <div className='card-body primary-text'>
                        {semester + ' ' + year}
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

function TaskBox({semester, year, tasks, isActive, onClose}) {
    if (isActive) {
    {console.log('opening modal')}
    return (
        <>
            <div className="modal fade show" id="" tabIndex="-1" style={{display: 'block', zIndex: 2}}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content dark-blue-bg border outer-border">
                        <div className="modal-header border-style">
                            <h1 className="modal-title fs-5 primary-text" id="">{semester + ' ' + year}</h1>
                            {/*<FontAwesomeIcon icon={faXmark} onClick={onClose} className='x-btn'/>*/}
                        </div>
                        <div className="modal-body">
                            {tasks.length > 0 ? tasks.map((t) => (
                                <>
                                    <div className='task-container p-2 px-3 my-3 modal-text'>{t}</div>
                                </>
                            )):
                                <>
                                    <div className='task-container p-2 px-3 my-3 modal-text'>This semester has no tasks.</div>
                                </>
                            }
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

    const [isEditActive, setIsEditActive] = useState(false);
    const [currentNode, setCurrentNode] = useState(0);
    const [activeTaskIndex, setActiveTaskIndex] = useState(-1);
    const [nodeList, setNodeList] = useState(testNodes);

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

    function compareIds (a, b) {
        if (a.id < b.id)
            return -1;
        else if (a.id > b.id)
            return 1;
        return 0;
    }

    function addNodeToList (sem, yr, tList) {
        let semEnum;
        switch (sem) {
            case "SPRING":
                semEnum = 1;
                break;
            case "MAYMESTER":
                semEnum = 2;
                break;
            case "SUMMER":
                semEnum = 3;
                break;
            case "FALL":
                semEnum = 4;
                break;
            case "WINTER":
                semEnum = 5;
                break;
        }
        
        let idCalc = parseFloat(yr + '.' + semEnum);

        let newNode = {
            id: idCalc,
            semester: sem,
            year: yr,
            taskList: tList
        };
        let newList = [...nodeList, newNode];
        newList.sort(compareIds);
        console.log(newList);

        setNodeList(newList);
    }

    function deleteNodeFromList(nodeId) {
        let newList = nodeList.filter((node) => node.id !== nodeId);
        setNodeList(newList);
    }

    function editNodeInList(oldId, newId, sem, yr, tList) {
        let newList = nodeList.filter((node) => node.id !== oldId); //remove old node that was changed
        let newNode = {
            id: newId,
            semester: sem,
            year: yr,
            taskList: tList
        };
        newList.push(newNode);
        newList.sort(compareIds);
        setNodeList(newList);
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
                {nodeList.map((sem, i) => {
                    return [
                    <>
                        <Node key={sem.id} semester={sem.semester} year={sem.year} nodeId={i+1} onOpen={() => setActiveTaskIndex(i+1)}/>
                        <TaskBox semester={sem.semester} year={sem.year} tasks={sem.taskList} isActive={activeTaskIndex === i+1} onClose={() => setActiveTaskIndex(-1)}/>
                    </>]
                })}
                <EndNode text={'FINISH'} nodeId={testNodes.length + 1}/>
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
                <div className='padding-container'></div> {/* empty div to pad the end of the timeline */}
            </div>
            <div className='extra-container d-flex justify-content-center'>
                {isEditActive ? null : <button onClick={() => setIsEditActive(true)} className='btn btn-secondary btn-style rounded-pill p-3 px-5' style={{fontSize: "2rem"}}>Edit Timeline</button>}
            </div>
            
                {isEditActive ? <div className='edit-feature-container'><NodeEdit onClose={() => setIsEditActive(false)} allNodes = {nodeList} onAddNode = {addNodeToList} onDeleteNode = {deleteNodeFromList} onEditNode = {editNodeInList}></NodeEdit></div> : null}
        </>
    );
}
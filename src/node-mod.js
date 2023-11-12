import React, {useState} from 'react';
import './node-mod.css'
import DropdownSelect from './general';
import Notif from './notif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

//also need to change colors lol
//in general, going to move this whole thing into a sidebar / popup
//then add in the buttons to differentiate between add / edit
//node needs to be able to be saved

//CURRENT ISSUES
//-saves duplicates
//-so can't truly edit
//-dropdown doesn't reset

//-redundant add node button
//-no confirmation when deleting nodes

//maybe move state variables + task functions to its own const?
//then make add button / edit button separate allowing new node or existing node ig

export default function NodeEdit() {
    const navigate = useNavigate();

    function handleBack(e) {
        e.preventDefault()
        navigate('/');
    }

    const [nodeList, setNodeList] = useState([]);
    const [node, setNode] = useState({
        id: 0,
        semester: '',
        year: 0,
        tasks: null,
    });

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");
    const [sem, setSem] = useState("");
    const [yr, setYr] = useState("");
    
    const addNode = () => {
        //nodeMod with null node (empty)
        NodeMod(null, nodeList.length+1);
    }

    const editNode = (node) => {
        //nodeMod with given node
        NodeMod(node, node.id);
    }

    const removeNode = (index) => {
        let holdArr = nodeList.filter((node, i) => i !== index);
        setNodeList(holdArr);
        setTaskList([]);
    }

    function NodeMod(node, id2) {
        let title = "Node Information: "
        //grab existing taskList
        if(node !== null){
            setTaskList(node.tasks);
            title += "Node " + id2;
        }
        else{
            title += " New Node";
        }

        //function to add task
        const addTask = () => {
            //create temp then push new task then replace
            let holdArr = taskList;
            holdArr.push(task);
            setTaskList(holdArr);
            setTask("");
        }
    
        //function to remove task, needs index to filter out
        const removeTask = (index) => {
            let holdArr = taskList.filter((task, i) => i !== index);
            setTaskList(holdArr);
        }
    
        const saveNode = () => {
            /*setSem("Spring");
            console.log(sem);
            setYr(2024);*/

            //check that valid input for sem / yr
            let valid = true;
            if(!semesterOp.includes(sem) || !yearOp.includes(yr)){
                if(!semesterOp.includes(sem)){
                    Notif('Semester field is not filled in!', 'error', '/');
                }
                if(!yearOp.includes(yr)){
                    Notif('Year field is not filled in!', 'error', '/');
                    console.log(yr);
                }
                valid = false;
            }

            //check that semester + year combo is unique
            let unique = true;
            for(let i=0; i<nodeList.length; i++){
                if(sem === nodeList[i].semester && yr === nodeList[i].year){
                    unique = false;
                    Notif('Semester + Year combo is not unique!', 'error', '/');
                    break;
                }
            }

            if(valid && (unique || node !== null)){
                //if node is not null, remove old so no duplicates
                if(node !== null){
                    setSem(node.semester);
                    setYr(node.year);

                    let holdArr = nodeList.filter((node, i) => i !== id2);
                    setNodeList(holdArr);
                }

                //set the node to the parameters
                let newNode = { id: id2, semester: sem, year: yr, tasks: taskList };
                /*setNode({
                    id: id2,
                    semester: 'Spring',
                    year: 2024,
                    tasks: taskList,
                });*/

                //create temp then push new node then replace
                let holdArr = nodeList;
                holdArr.push(newNode);
                setNodeList(holdArr);

                setTaskList([]);
                //reset node
                /*setNode({
                    id: null,
                    semester: 'Spring',
                    year: 2024,
                    tasks: null,
                });*/

                //close the menu (hopefully would get replace semester / year to placeholder idk)
            }
        }

        const clearNode = () => {
            setTaskList([]);
        }

        //prob need to have semester / year be state variables
        const semesterOp = [
            'Fall',
            'Winter',
            'Spring',
            'Maymester',
            'Summer'
        ];
        
        const yearOp = [
            '2023',
            '2024',
            '2025',
            '2026',
            '2027'
        ];
    
        return(
            <div className='nodeMod-menu text-color'>
                {/* 
                -if node is not null, set taskList to node's taskList
                -for the dropdown, default should only be set if creating new (maybe have a status var)
                -also probably need to have it change semester / year state variable when change
                */}
                <div>
                    <h3>{title}</h3>
                </div>
                <div className='d-flex flex-column mb-2'>
                        <div className='my-2'>
                            {/* if node is not null, placeholder should be the semester in the node 
                            
                            onChange={ (e) => {setSem(e.target.value); Notif('changed!', 'success', '/')}}
                            onChange={ (e) => setYear(e.target.value)} 

                            */}
                            <DropdownSelect fnc={setSem}
                            placeholder={'Semester*'} options={semesterOp}/>
                            {/* need to save in semester var to be used in node */}
                        </div>
                        <div className='my-2'>
                            {/* if node is not null, placeholder should be the year in the node */}
                            <DropdownSelect fnc={setYr} 
                            placeholder={'Year*'} options={yearOp}/>
                            {/* need to save in year var to be used in node */}
                        </div>
                </div>
                <div>
                    <h3>Tasks</h3>
                </div>
                {/* displays all of the tasks */}
                <div className='mb-2 d-flex align-items-center'>
                    <input
                        className='form-control me-2'
                        placeholder = "Type..."
                        type = "text"
                        value = {task}
                        onChange={ (e) => setTask(e.target.value)}
                    />{" "}
                    <FontAwesomeIcon className='plus-btn' icon={faCirclePlus} onClick={addTask}/>
                </div>
                <div>
                    <div className="taskList-container pe-2 mb-4">
                        {taskList.length > 0 && 
                        taskList.map((task, index) => 
                                //need to make everything here look good
                                <div key={index} className='task-style d-flex p-2 my-2'>
                                    <div className='col-11'>
                                        {task}
                                    </div>
                                    {/*<input value = {task} type="checkbox" />*/}
                                    <div className='col-1'>
                                        <FontAwesomeIcon className='task-x' icon={faXmark} onClick={() => removeTask(index)}/>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
                <div className='mb-5'>
                    {/*on click, needs to create / save node info - store in node and then push to nodeList*/}
                    <button className='btn btn-primary btn-color mx-3' onClick={ () => saveNode()}>save</button>
                    {" "}
                    {/*on click, needs to exit and discard changes - maybe don't even need*/}
                    <button className='btn btn-primary btn-color mx-3' onClick={ () => clearNode()}>cancel</button>
                </div>
            </div>
        );
    }
    
    return(
        <div className="wrapper">
            <div className="nodeEdit mx-5 text-color">
                {/* displays all of the nodes (maybe display in order or id instead of index later) */}
                <div>
                    <h3>Node List</h3>
                </div>
                <div className="nodeList-container">
                    {nodeList.length > 0 && 
                    nodeList.map((node, index) => 
                            //need to make everything here look good
                            <div key={index} className='task-style d-flex p-2 my-2 align-items-center'>
                                <div className='col-8 ms-2'>
                                    {node.semester + " " + node.year}
                                </div>
                                <div className='col-1 mx-3'>
                                    <FontAwesomeIcon className='icon-btn' icon={faPen} onClick={ () => editNode(node)} />
                                </div>
                                <div className='col-1'>
                                    <FontAwesomeIcon className='icon-btn' icon={faTrash} onClick={ () => removeNode(index)} />
                                </div>
                            </div>
                        )}
                </div>
                <div className='mb-5'>
                    {/*{"(add a node) "}
                    <button onClick= { () => addNode() }>+</button>*/}
                    <button className='btn btn-primary btn-color mx-3' onClick={handleBack}>Done</button>
                </div>
            </div>
            <div className="nodeMod mx-5">
                {NodeMod(null, 1)}
            </div>
        </div>
    );
}


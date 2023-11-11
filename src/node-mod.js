import React, {useState} from 'react';
import DropdownSelect from './general';
import Notif from './notif';

//also need to change colors lol
//in general, going to move this whole thing into a sidebar / popup
//then add in the buttons to differentiate between add / edit
//node needs to be able to be saved

//maybe move state variables + task functions to its own const?
//then make add button / edit button separate allowing new node or existing node ig

export default function NodeEdit() {
    const [nodeList, setNodeList] = useState([]);
    const [node, setNode] = useState({
        id: null,
        semester: null,
        year: null,
        taskList: null,
    });

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");
    const [sem, setSem] = useState("");
    const [year, setYear] = useState(0);
    
    const addNode = () => {
        //nodeMod with null node (empty)
        NodeMod(null, nodeList.length+1);
    }

    const editNode = (node) => {
        //nodeMod with given node
        NodeMod(node, node.id);
    }

    const removeNode = (id) => {
        let holdArr = nodeList.filter((node, i) => node.id !== id);
        setNodeList(holdArr);
    }

    function NodeMod(node, id) {
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
            //if node is not null, remove afterwards so no duplicates

            //set the node to the parameters
            setNode({
                id: id,
                semester: sem,
                year: year,
                taskList: taskList,
            });

            //create temp then push new node then replace
            let holdArr = nodeList;
            holdArr.push(node);
            setNodeList(holdArr);

            //reset node
            setNode({
                id: null,
                semester: null,
                year: null,
                taskList: null,
            });
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
            2023,
            2024,
            2025,
            2026,
            2027
        ];
    
        return(
            <div>
                {/* 
                -if node is not null, set taskList to node's taskList
                -for the dropdown, default should only be set if creating new (maybe have a status var)
                -also probably need to have it change semester / year state variable when change
                */}
                <div className='d-flex justify-content-between row mb-5'>
                        <div className='col-5'>
                            {/* if node is not null, placeholder should be the semester in the node */}
                            <DropdownSelect onChange={ (e) => setSem(e.target.value)} 
                            placeholder={'Semester*'} options={semesterOp}/>
                            {/* need to save in semester var to be used in node */}
                        </div>
                        <div className='col-5'>
                            {/* if node is not null, placeholder should be the year in the node */}
                            <DropdownSelect onChange={ (e) => setYear(e.target.value)} 
                            placeholder={'Year*'} options={yearOp}/>
                            {/* need to save in year var to be used in node */}
                        </div>
                </div>
                <div>
                    <h3>Tasks</h3>
                </div>
                <div>
                    <div className="taskList-container">
                        {taskList.length > 0 && 
                        taskList.map((task, index) => 
                                //need to make everything here look good
                                <div key={index}>
                                    {task}
                                    {" "}
                                    <input value = {task} type="checkbox" />
                                    {" "}
                                    <button onClick={ () => removeTask(index)}>x</button>
                                </div>
                            )}
                    </div>
                </div>
                {/* displays all of the tasks */}
                <div className='mb-5'>
                    <input
                        placeholder = "Type..."
                        type = "text"
                        value = {task}
                        onChange={ (e) => setTask(e.target.value)}
                    />{" "}
                    <button onClick={addTask}>+</button>
                </div>
                <div className='mb-5'>
                    {/*on click, needs to create / save node info - store in node and then push to nodeList*/}
                    <button onClick={ () => saveNode()}>confirm</button>
                    {" "}
                    {/*on click, needs to exit and discard changes*/}
                    <button>cancel</button>
                </div>
            </div>
        );
    }
    
    return(
        <div>
            {/* displays all of the nodes (maybe display in order or id instead of index later) */}
            <div className="nodeList-container">
                {nodeList.length > 0 && 
                nodeList.map((node, index) => 
                        //need to make everything here look good
                        <div key={index}>
                            {node}
                            {" "}
                            <button onClick={ () => editNode(index)}>[pencil icon here]</button>
                            {" "}
                            <button onClick={ () => removeNode(index)}>x</button>
                        </div>
                    )}
            </div>
            <div className='mb-5'>
                {"(add a node) "}
                <button onClick= { () => addNode() }>+</button>
            </div>
        </div>
    );
}


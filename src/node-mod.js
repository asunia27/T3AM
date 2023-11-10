import React, {useState} from 'react';
import DropdownSelect from './general';

//also need to change colors lol
//in general, going to move this whole thing into a sidebar / popup
//then add in the buttons to differentiate between add / edit
//node needs to be able to be saved

export default function NodeMod() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");

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

    const taskItem = (task, index) => {
    }

    const semester = [
        'Fall',
        'Winter',
        'Spring',
        'Maymester',
        'Summer'
    ];
    
    const year = [
        '2023',
        '2024',
        '2025',
        '2026',
        '2027'
    ];

    return(
        <div>
            {/* for the dropdown, default should only be set if creating new (maybe have a status var)*/}
            <div className='d-flex justify-content-between row mb-5'>
                    <div className='col-5'>
                        <DropdownSelect placeholder={'Semester*'} options={semester}/>
                    </div>
                    <div className='col-5'>
                        <DropdownSelect placeholder={'Year*'} options={year}/>
                    </div>
            </div>
            <div>
                <h3>Tasks</h3>
            </div>
            <div>
                <div className="taskList-container">
                    {taskList.length > 0 && 
                    taskList.map((task, index) => 
                            //need to reformat everything here
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
                {/*on click, needs to create / save node info*/}
                <button>confirm</button>
                {" "}
                {/*on click, needs to exit sidebar*/}
                <button>cancel</button>
            </div>
        </div>
    );
}
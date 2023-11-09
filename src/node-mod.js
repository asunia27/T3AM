import React from 'react';
import DropdownSelect from './general';

//in general, going to move this whole thing into a sidebar
//then add in the buttons to differentiate between add / edit
//remove node probably just needs timeline / node components first lol

export default function NodeMod() {
    const [items, setItems] = useState(['x', 'y']);

    //this should just create a task component and add it to the list / add to a basic list, unsure rn
    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        
        //go into setItems array length - 1
        //set the state to e.data

        /* Read the form data
        const form = e.target;
        const formData = new FormData(form);*/
    
        /* You can pass formData as a fetch body directly:
        fetch('/some-api', { method: form.method, body: formData });*/
    
        /* Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);*/
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
                {/*
                existing tasks here
                -probably mapped list
                -use function when mapping that turns list items (tasks) into textarea + button to delete
                    -figure out how to make it display w/o reloading (state variable?)
                -maybe even get rid of below and replace with just rendering initial list with task Type...
                -can actually just throw a mylist here probs
                */}
            </div>
            <div className='mb-5'>
                <form onSubmit = {handleSubmit}>
                    <textarea name='taskInput' className='form-control' placeholder='Type...'></textarea>
                    <button type="submit">+</button>
                </form>
            </div>
            <div className='mb-5'>
                <button>confirm</button>
                <button>cancel</button>
            </div>
        </div>
    );
}
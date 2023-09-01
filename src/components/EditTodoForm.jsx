import React, {useState} from 'react';

export const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue] = useState(task.task);

    const handleSubmit = (e) =>{
        // prevent default action
        e.preventDefault();
        if (value){
            // edit todo
            editTodo(value, task.id);
        }
    };

    return(

        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  className='task-input' />
            <button type="submit" className='add-button save-button'> Save</button>
        </form>
    );
}
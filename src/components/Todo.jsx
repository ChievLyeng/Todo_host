import React from 'react';
import {BiEdit} from 'react-icons/bi'; 
import {AiFillDelete} from 'react-icons/ai';

export const Todo = ({task,deleteTodo,editTodo,toggleComplete}) => {
    return (
        <div className='task'>
            <div className='show-task'>
            <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
            <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            </div>
            <div className='button-container'>
                <button className='todo-btn'>
                    <BiEdit icon={BiEdit} size={25} onClick={() => editTodo(task.id)} />
                </button>

                <button className='todo-btn'>
                    <AiFillDelete icon={AiFillDelete} size={25} onClick={() => deleteTodo(task.id)}/>
                </button>
            </div>

        </div>
    );
}
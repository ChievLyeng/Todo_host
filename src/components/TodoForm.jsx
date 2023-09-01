import React, {useState} from 'react';

export const TodoForm =({addTodo}) => {
   
   const [value,setValue] = useState('');

   const handleSubmit = (e) => {
       //prevent default action
       e.preventDefault();
       if (value){
           //add todo
           addTodo(value);
           //clear form after submission
           setValue('')
       }
   };

   return(
       <div>
           <form onSubmit={handleSubmit} className="TodoForm">
               <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  className='task-input' placeholder='What is your task ?' />
               <button type="submit" className='add-button'> Add </button>
           </form>
       </div>
   
   );
}
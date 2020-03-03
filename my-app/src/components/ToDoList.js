import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//components
import ToDoCard from './ToDoCard';

const ToDoList = () => {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const getList = () =>{
            axios
                .get('https://reqres.in/api/unknown')
                .then(res=>{
                    console.log(res.data.data, 'todo list worked')
                    setTodo(res.data.data);
                    console.log(todo);
                })
                .catch(err=>{
                    console.log(err, 'todo list failed')
                })
        }
        getList();
    }, [])
    

    return(
        <section className='ToDoList'>
            <h1>ToDo List</h1>
            {todo.map(e => {
                return(
                    <ToDoCard 
                        key={e.id} 
                        name={e.name}
                        color={e.color}
                    />
                )
            })}
        </section>

        // <h1>works</h1>
    )
}

export default ToDoList;
import React, {useState, useEffect} from "react"
import axiosWithAuth from"../utils/axiosWithAuth"
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    CardButton,
    CardLink
  } from "./styles";


const Form =({dispatch})=>{
    useEffect(()=>{
        axiosWithAuth()
        .get('https://wunderlistbuildweek.herokuapp.com/api/lists/1/tasks')
        .then(res=>console.log(res))
        .catch(err=>console.log(err ))
    },[])
    useEffect(()=>{
        axiosWithAuth()
        .get('https://wunderlistbuildweek.herokuapp.com/api/lists/1/tasks')
        .then(res=>console.log(res))
        .catch(err=>console.log(err ))
    },[])
    

    const [newTask, setNewTask] = useState({
        description: '',
        frequency:'',
    })

    const handleChanges= e=>{
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value   
        
            
        })
    }

    
    const handleSubmit= e =>{
        e.preventDefault();
        dispatch({type: "ADD_TASK", payload:newTask})
        setNewTask("")
         axiosWithAuth()
        .post('/api/lists/1/tasks', newTask)
        .then(res=>{
            console.log("this is RESPONSE from POST in ADDTASK from Form.js", res)
           
        })
        .catch(err=>{
            console.log('this is ERROR from POST in ADDTASK from Form.js', err)
        })
        
      
    };
    const clearTask=(e)=>{
        e.preventDefault();
        dispatch({type:"CLEAR_TASK"})
        axiosWithAuth()
        .delete(`/api/lists/1/tasks/${newTask.id}`)
        console.log(newTask.id)
       
    }
    return (
        <CardWrapper>
            <CardHeader><CardHeading>Add Your Chores Here!</CardHeading></CardHeader>
        <CardBody>
        <form onSubmit={handleSubmit}>
            <CardFieldset>
            <CardInput 
            type="text" 
            name="description" 
            value={newTask.description} 
            onChange={handleChanges} 
            placeholder="Add A Task..."
            />
            </CardFieldset>
            <CardFieldset>
              <CardInput 
            type="text" 
            name="frequency" 
            value={newTask.frequency} 
            onChange={handleChanges} 
            placeholder="How Often?"
            />
            </CardFieldset>
         
        
            <br></br>
            <CardButton type="submit">Add Da Task</CardButton><br></br>
         
        </form>
        </CardBody>
        </CardWrapper>
    )
}

export default Form
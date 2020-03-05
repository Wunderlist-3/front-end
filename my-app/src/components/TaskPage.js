import React, { useState, useEffect } from "react";

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
    CardLink,
    StyledDiv,
    CardBodyStyled,
    CardWrapperStyled
  } from "./styles";



const TaskPage = props =>{
    const [tasks, setTasks] = useState([])
    const [editing, setEditing] = useState(false);
    const [edited, setEdited]=useState({
        description: "",
        frequency:""
    })


    useEffect(()=>{
        axiosWithAuth()
        .get('https://wunderlistbuildweek.herokuapp.com/api/lists/1/tasks')
        .then(res=>{
            console.log("res from tasklist", res)
            setTasks(res.data)
            console.log(res.data)
            
            
        })
        .catch(err=>console.log(err ))
    },[])

    const toggleEdit= task=>{
        if(editing !== task.id){
            setEdited(task)
            setEditing(task.id)
        }else{
            axiosWithAuth()
            .put(`https://wunderlistbuildweek.herokuapp.com/api/tasks/${task.id}`, edited)
            .then(res=>{
                console.log("edited",res)
                setTasks([...tasks.filter(item=>item.id !==tasks.id), res.data])
                setEditing(false)
            })
            .catch(err=>console.log("edit error", err))
        }
    }
    const handleChange =e => setEdited({...edited, [e.target.name]:e.target.value});

    const deleteTask = id=>{
        axiosWithAuth()
        .delete(`https://wunderlistbuildweek.herokuapp.com/api/tasks/${id}`)
        .then(res=>{
            console.log("delete res", res)
            setTasks(tasks.filter(item=>item.id !== id))
        })
        .catch(err=>{
            console.log('delete eror', err)
        })
    }


   return(
       <div>
     
           <br></br><StyledDiv>List of Chores To Do:</StyledDiv>
           {console.log(tasks)}
           {tasks.map(item=>{
               
               return (
                   <CardWrapperStyled key={item.id}>
                       <CardBodyStyled>
                       {editing===item.id ?
                       <CardFieldset>
                       <CardInput name="description" value={edited.description} onChange={handleChange}/>
                       <CardInput name="frequency" value={edited.frequency} onChange={handleChange}/>
                       </CardFieldset> :
                       <div>
                       <h3>Task:{item.description}</h3>
                       <p>How Often:{item.frequency}</p>
                       <p>{item.id}</p>
                       </div>
                       }
                       <CardButton onClick={()=>toggleEdit(item)}>{editing===item.id ? "Submit": "Edit Description"}</CardButton><br></br>
                       <CardButton onClick={()=>deleteTask(item.id)}>Delete Task</CardButton>
                       </CardBodyStyled>
                   </CardWrapperStyled>
               )
           })}
         
           

       </div>
   )
}

export default TaskPage
import React,{useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';
// import { useState } from 'react';

const MpthreeList = () => {
    const [modal, setModal] = useState(false);
    const [videoType,setVideotype ]=useState([]);

    

    useEffect(() =>{
        let arr = localStorage.getItem("videoType")
        
        if(arr){
            let obj= JSON.parse(arr)
            setVideotype(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = videoType
        tempList.splice(index,1)
        localStorage.setItem("videoType",JSON.stringify(tempList))
        setVideotype(tempList)
        window.location.reload()
    }
    const updateListArray= (obj,index) =>{
        let tempList=videoType
        tempList[index]=obj
        localStorage.setItem("videoType",JSON.stringify(tempList))
        setVideotype(tempList)
        window.location.reload()
    }

    const toggle = () =>{
        setModal(!modal)
    }

    const saveType = (typeObj) =>{
        let tempList=videoType
        tempList.push(typeObj)
        localStorage.setItem("videoType",JSON.stringify(tempList))
        setModal(false)
        setVideotype(videoType)
        window.location.reload()
        
    }

    return (
       <>
        <div className='header text-center'>
            <h3 >My PlayList</h3>
            {/* <button className='btn btn-primary mt-2'onClick = {() => setModal(true)}>create playlist</button> */}
            <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create</button>
        </div>
        <div className='task-container'>
                { videoType && videoType.map((obj,index) =><Card taskObj={obj} index = {index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
        </div>
        <CreateTask toggle = {toggle} modal = {modal} save = {saveType}/>
       </>
    );
};

export default MpthreeList;
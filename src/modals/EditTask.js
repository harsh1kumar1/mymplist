import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    // const [taskName, setTaskName] = useState('');
    // const [description, setDescription] = useState('');
    const [videoType,setVideotype ]=useState('');//state
    const [link,setLink]=useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "videoType"){
            setVideotype (value)
        }else{
            setLink(value)
        }


    }

    useEffect(() => {
        setVideotype (taskObj.Name)
        setLink(taskObj.Link)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['VideoType'] = videoType
        tempObj['Link'] = link
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {videoType} onChange = {handleChange} name = "videoType"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {link} onChange = {handleChange} name = "link"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;
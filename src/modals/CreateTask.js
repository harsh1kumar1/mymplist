import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [videoType,setVideotype ]=useState('');//state
    const [link,setLink]=useState('');

    const handleChange = (e) => {
        // const name=e.target.name
        // const value=e.target.value
        const {name,value}=e.target

        if(name === "videoType"){
            setVideotype(value)
        }else{
            setLink(value)
        }
    }
    const handleSave = () =>{
        let taskObj = {}
        taskObj["Name"]=videoType
        taskObj["Link"]=link
        save(taskObj)
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Playlist</ModalHeader>
            <ModalBody>
           <form>
              <div className='form-group'>
                <label>Video Type</label>
                    <input type="text" className='form-control' value={videoType} onChange = {handleChange} name="videoType"/>
              </div>
              <div className='form-group'>
                <label>Link</label>
                    <textarea rows= "10" className='form-control' value={link} onChange = {handleChange} name="link"></textarea>
              </div>
           </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>
                Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;
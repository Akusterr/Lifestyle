import React, {useState, useEffect} from "react";
import "./styles/UserFormModal.css";
import { Button, Icon, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu, Form } from 'semantic-ui-react'

function UserFromModal(props) {
    console.log(props)
  const user = props.onUser || {};
  const [userName, setUserName] = useState(user.username)
  const [userPassword, setUserPassword] = useState("")
  const [userEmail, setUserEmail] = useState(user.email)

  const {open, setOpen} = props;

  const handleSubmit = (e) => {
    e.preventDefault()

    let info = {
      username: userName,
      password: userPassword,
      email: userEmail
    }

    fetch(`/updateUser/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })

        .then(resp => resp.json())
        .then((update) => setOpen(false))

    }

    const handleDeleteUser = () => {

        fetch(`/deleteUser/${user.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then(user(null));
                window.location.href = 'http://localhost:4000/loginPage'
    }



    return(
        <div className="User-modal-wrap">
            <Modal 
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button>Edit Profile</Button>} 
                >

                    <Modal.Content>
                        <Form warning size="large" onSubmit={handleSubmit} className="registerForm">
                            <h1>Create Your Account</h1>
                            <Form.Input type="text" name="username" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <Form.Input type="text" name="email" placeholder="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                            <Form.Input type="password" name="password" placeholder="Password must have 6-20 letters" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                            <Button type="submit">Update</Button>
                            <Button onClick={handleDeleteUser}>Delete User</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>

        
    );
}

export default UserFromModal;
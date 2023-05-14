import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap'
import UserService from './UserService';
import FetchClient from './FetchClient';

const UserUpdate = () => {
    const initialFormState = {
        firstName: '',
        lastName:'',
        email:'',
        imageUrl:''
    };

    const [user, setUser] = useState(initialFormState)
    const navigate = useNavigate()
    const {id} = useParams();
    const userService = new UserService(FetchClient)

    useEffect(() => {
        if(id !== 'new') {
            const getUserByID = async () => {
                const user = await userService.getUserById(id)
                setUser(user)
            }

            getUserByID()
        }
    }, [id, setUser])

    const handleChange = (event) => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(user.id) {
            userService.updateUser(id, user)
        } else {
            userService.createUser(user)
        }
        setUser(initialFormState)
        navigate('/')
    }

    const title = <h2>{user.id ? 'Edit User' : 'Create User'}</h2>

    return (
        <Container>
            {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='firstName'>First Name</Label>
                    <Input type='text' name='firstName' id='firstName' value={user.firstName || ''}
                            onChange={handleChange} autoComplete='name'/>
                </FormGroup>
                <FormGroup>
                    <Label for='lastName'>Last Name</Label>
                    <Input type='text' name='lastName' id='lastName' value={user.lastName || ''}
                            onChange={handleChange} autoComplete='name'/>
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='text' name='email' id='email' value={user.email || ''}
                            onChange={handleChange} autoComplete='email'/>
                </FormGroup>
                <FormGroup>
                    <Label for='imageUrl'>Image Url</Label>
                    <Input type='text' name='imageUrl' id='imageUrl' value={user.imageUrl || ''}
                            onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Button color='primary' type='submit'>Save</Button>
                    <Button color='secondary' to='/'>Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    )
}
export default UserUpdate
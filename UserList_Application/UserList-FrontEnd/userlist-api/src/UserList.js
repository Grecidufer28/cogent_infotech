import React, {useEffect, useState} from 'react'
import {Button, ButtonGroup, Container, Table} from 'reactstrap'
import UserService from './UserService'
import {Link} from 'react-router-dom'
import FetchClient from './FetchClient'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const userService = new UserService(FetchClient)

    const fetchUsers = async () => {
        try {
            const users = await userService.getAllUsers()
            setUsers(users)
        } catch (error) {
            setError(error)
            setIsLoaded(false)
        }
    }

    const removeUser = async (id) => {
        userService.deleteUser(id)
        // window.location.reload(false)
        const updatedUserList = users.filter(user => user.id != id)
        setUsers(updatedUserList)
    }

    useEffect(() => {
        setIsLoaded(true)
        

        fetchUsers()
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
        return <div>Loading...</div>
    }

    const userlist = users.map(user => {
        return <tr key = {user.id}>
            <td><img src={user.imageUrl}/></td> 
            <td>{user.firstName}</td> 
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
                <ButtonGroup>
                    <Button size='sm' color='primary' tag={Link} to={"/users/"+user.id}>Update</Button>
                    <Button size='sm' color='danger' onClick={() => removeUser(user.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    })

    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
            <Container fluid>
                <div>
                    <Button color='success' tag={Link} to="/users/new">Add User</Button>
                </div>
                <h2>User List</h2>
                <Table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userlist}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
    
}

export default UserList;
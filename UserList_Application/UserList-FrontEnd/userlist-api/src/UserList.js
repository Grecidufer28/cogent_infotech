import React, {useEffect, useState} from 'react'
import {Button, ButtonGroup, Container, Table} from 'reactstrap'
import UserService from './UserService'
import {Link} from 'react-router-dom'
import FetchClient from './FetchClient'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const userService = new UserService(FetchClient)
        setIsLoaded(true)
        const fetchUsers = async () => {
            try {
                const users = await userService.getAllUsers()
                setUsers(users)
            } catch (error) {
                setError(error)
                setIsLoaded(false)
            }
        }

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
                    <Button size='sm' color='primary'   >Update</Button>
                    <Button size='sm' color='danger' onClick={() => this.userService.deleteUser(user)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    })

    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
            <Container fluid>
                <h2>User List</h2>
                <Table>
                    <thead>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
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
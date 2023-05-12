import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './home';
const User = () => {
    const params = useParams()
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [user, setUsers] = React.useState([]);
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + params.id)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

return(
        <div>
            <h1>User Details</h1>
            <h3>ID#: {user.id}</h3>
            <h3>Name: {user.name}</h3>
        </div>
    );
}
export default User;
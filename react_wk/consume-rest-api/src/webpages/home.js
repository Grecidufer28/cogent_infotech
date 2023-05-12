import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
const [error, setError] =  React.useState(null);
    const [isLoaded, setIsLoaded] =  React.useState(false);
    const [users, setUsers] =  React.useState([]);
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
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
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    <Link to={`user/${user.id}`}>{user.name}</Link>
                </li>
                ))}
            </ul>
        );
    }
}
export default Home;
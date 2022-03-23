import User from "./User.jsx"
import {useState} from 'react';
import id from "react-uuid";

const initUsers = [
	{id: id(), name: 'user1', surname: 'surn1', age: 30, isBanned: false},
	{id: id(), name: 'user2', surname: 'surn2', age: 31, isBanned: false},
	{id: id(), name: 'user3', surname: 'surn3', age: 32, isBanned: false},
];

function Users() {
    const [users, setUsers] = useState(initUsers);
    function changeIsBanned(id) {
        const newUsers = users.map(user => {
            if(user.id === id) {
                return {...user, isBanned: !user.isBanned};
            } else {
                return user;
            }
        });

        setUsers(newUsers);
    }

    const result = users.map(user => {
        return <User key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
            isBanned={user.isBanned}
            changeIsBanned={changeIsBanned}/>;
    });

    return result;
}

export default Users;
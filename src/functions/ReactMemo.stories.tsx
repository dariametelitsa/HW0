import React from "react";

export default {
    title: "React Memo",
}

const NewMessagesCounter = (props: any) => {
    console.log('heheh');
    return <div>{props.count}</div>
};

const UsersSecret = (props: { users: string[] }) => {
    return <div>
        {props.users.map((user: any, i) => (<div key={i}>{user}</div>))}
    </div>
};

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = React.useState(0);
    const [users, setUsers] = React.useState(['Valera', 'Nikola', 'Santropa']);

    const addUser = () => {
        setUsers([...users, 'Kate ' + new Date().getTime()]);
    };

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>Add User</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
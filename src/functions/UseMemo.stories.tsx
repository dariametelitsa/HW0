// @flow
import * as React from 'react';
import { useMemo } from 'react';

export default {
    title: 'UseMemo',
}

export const UseMemoStories_DifficultCounting = () => {
    const [a, setA] = React.useState<number>(3);
    const [b, setB] = React.useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempRes = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempRes = tempRes * i;
        }
        return tempRes;
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <div>
            <input type="number" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="number" value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for A: {resultA}
            </div>
            <div>
                Result for B: {resultB}
            </div>
        </div>
    );
};


const UsersSecret = (props: { users: string[] }) => {
    console.log('UsersSecret')
    return <div>
        {props.users.map((user: any, i) => (<div key={i}>{user}</div>))}
    </div>
};
const Users = React.memo(UsersSecret);

export const UseMemoStories_HelpsToReactMemo = () => {
    const [counter, setCounter] = React.useState(0);
    const [users, setUsers] = React.useState(['Valera', 'Nikol', 'Santropa']);

    const filteredUsers = useMemo(() => {
        console.log('Zatupok');
        return users.filter(u=>u.toLowerCase().indexOf('a') > -1)}, [users]);

    const addUser = () => {
        setUsers([...users, 'Kate ' + new Date().getTime()]);
    };

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={filteredUsers}/>
    </>
};
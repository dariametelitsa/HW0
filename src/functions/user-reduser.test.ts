import { StateType, userReduser } from "./user-reduser";

test('user reducer should increment only age', () => {
    const startState: StateType = {age: 20, childrenCount: 2, name: 'Tom'};
    const endState: StateType = userReduser(startState, {type: "INCREMENT-AGE"});

    expect(endState.name).toEqual('Tom');
    expect(endState.age).toEqual(21);
});

test('user reducer should increment only childrenCount', () => {
    const startState: StateType = {age: 20, childrenCount: 2, name: 'Tom'};
    const endState: StateType = userReduser(startState, {type: "INCREMENT-CHILDREN-COUNT" });

    expect(endState.name).toEqual('Tom');
    expect(endState.age).toEqual(20);
    expect(endState.childrenCount).toEqual(3);
});

test('user reducer should change name of user', () => {
    const startState: StateType = {age: 20, childrenCount: 2, name: 'Tom'};
    const newName: string = 'Tomas';
    const endState: StateType = userReduser(startState, {type: 'CHANGE-NAME', newName: newName});

    expect(endState.name).toEqual(newName);
    expect(endState.age).toEqual(20);
    expect(endState.childrenCount).toEqual(2);
});
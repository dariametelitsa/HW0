import { reducer, StateType, TOGGLE_COLLAPSED } from "./Reducer";

export const zero = 0;

test('reducer should change value to opposite value', () => {
    //data
    const state: StateType = {
        collapsed: false,
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true);
})


test('reducer should be false', () => {
    //data
    const state: StateType = {
        collapsed: true,
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false);
});


test('reducer should give error', () => {
    //data
    const state: StateType = {
        collapsed: true,
    }

    //expection
    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError();
})
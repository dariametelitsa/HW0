// @flow
import * as React from 'react';
import { useEffect, useState } from "react";

export default {
    title: 'UseEffect',
}

export const UseEffectExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    },[]);

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter]);


    return <>
        <h2>UseEffect</h2>
        <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        Hello, {counter}
    </>
};
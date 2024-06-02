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

export const UseEffectSetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            console.log('useEffect first render and every counter change');
            document.title = counter.toString();
        }, 2000)
    }, [counter]);

    return <>
        <h2>UseEffect</h2>
        <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        Hello, {counter}
    </>
};

export const UseEffectSetIntervalExample = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setCounter(prev => prev + 1);
            console.log('setTimeout');
            document.title = counter.toString();
        }, 1000)
    },[]);

    return <>
        <h2>UseEffect</h2>
        Hello, counter: {counter}
    </>
};

export const UseEffectClock = () => {
    const [date, setDate] = useState(new Date);

    useEffect(() => {
        setInterval(() => {
            setDate(prev => new Date);
            console.log('setTimeout');
        }, 1000)
    },[]);

    return <>
        <time>Time: {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</time>
    </>
};
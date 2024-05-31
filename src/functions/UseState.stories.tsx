// @flow
import * as React from 'react';
import { useMemo, useState } from "react";

export default {
    title: 'UseState',
}

function generateData() {
    //difficult counting
    console.log('Generate data');
    return 12345678;
}

export const UseStateExample = () => {
    console.log('Example useState1');
    // const initValue = useMemo(generateData, []); //чтобы не пересчитывать каждый раз при обновлении компоненты
    // const [counter, setCounter] = useState(initValue);
    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        {counter}
    </>
};
// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';

function get2digitsString(date: number) {
    return date < 10
        ? '0' + date
        : date;
}

type ClockProps = {};
export const Clock: React.FC = (props: ClockProps) => {
    const [date, setDate] = useState(new Date);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    );
};
import React from 'react';


type PropsType = {
    on?: boolean;
}

export const OnOff = (props: PropsType) => {
    const container = {
        display: 'flex',
        justifyContent: 'center',
        margin: '100px 0',
    }

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: props.on ? 'lightgreen' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'tomato',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '8px',
        backgroundColor: props.on ? 'lightgreen' : 'tomato',
    };


    return (
        <div style={container}>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

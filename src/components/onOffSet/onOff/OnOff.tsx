import React, { useState } from 'react';


export const OnOff = ({callBack} : {callBack: (isOn: boolean)=> void}) => {

    let [isOn, setIsOn] = useState(false);

    const container = {
        display: 'flex',
        justifyContent: 'center',
        margin: '50px 0',
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: isOn ? 'lightgreen' : 'white',
        cursor: 'pointer',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: isOn ? 'white' : 'tomato',
        cursor: 'pointer',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '8px',
        backgroundColor: isOn ? 'lightgreen' : 'tomato',
    };

    const onClickDivHandler = (status: boolean) => {
        if (isOn !== status) {
            setIsOn(status);
            callBack(status);
        }
    }

    return (
        <div style={container}>
            <div style={onStyle} onClick={() => onClickDivHandler(true)}>On</div>
            <div style={offStyle} onClick={() => onClickDivHandler(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

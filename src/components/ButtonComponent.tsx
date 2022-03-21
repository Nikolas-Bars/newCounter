import React from 'react';

type PropsType = {
    title: string
    disabled: boolean
    callback: ()=> void
}

const ButtonComponent = (props: PropsType) => {
    return (
        <>
         <button onClick={props.callback} disabled={props.disabled}>{props.title}</button>
        </>
    );
};

export default ButtonComponent;
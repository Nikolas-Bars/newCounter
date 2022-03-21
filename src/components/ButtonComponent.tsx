import React from 'react';
import {Button} from "@mui/material";

type PropsType = {
    title: string
    disabled: boolean
    callback: ()=> void
}

const ButtonComponent = (props: PropsType) => {
    return (
        <>
            <Button variant="contained" color="primary" onClick={props.callback} disabled={props.disabled} style={{margin: '7px 5px'}}>{props.title}</Button>
        </>
    );
};

export default ButtonComponent;
import React from 'react';
import { Button } from './Button';

type ButtonsPropsType = {
    className: string,
    count: number,
    addCount: () => void,
    resetCount: () => void,
    minValue: number,
    maxValue: number,
}

export function Buttons(props: ButtonsPropsType) {

    return (
        <div className={props.className}>
            <Button name={'inc'} className={'button'} callback={props.addCount} disabled={props.count === props.maxValue}/>
            <Button name={'reset'} className={'button'} callback={props.resetCount} disabled={props.count === props.minValue}/>
        </div>
    );
}
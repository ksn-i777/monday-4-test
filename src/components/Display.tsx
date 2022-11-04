import React from 'react';

type NumberPropsType = {
    className: string,
    count: number,
    maxValue: number,
}

export function Display(props: NumberPropsType) {
    return <div className={props.className}>{props.count === props.maxValue ? props.count + ' max' : props.count}</div>;
}

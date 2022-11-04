import React, { useState } from 'react';
import './App.css';
import { Display } from './components/Display';
import { Buttons } from './components/Buttons';

function App() {

    const minValue = 0
    const maxValue = 5

    const [count, setCount] = useState<number>(minValue)

    function addCount() {count < maxValue && setCount(count + 1)}

    function resetCount() {setCount(0)}

    return (
        <div className="App">
            <div className='wrapper'>
                <Display
                    className={count === maxValue ? 'number numberMax' : 'number'}
                    count={count}
                    maxValue={maxValue}
                />
                <Buttons
                    className='buttons'
                    addCount={addCount}
                    resetCount={resetCount}
                    count={count}
                    minValue={minValue}
                    maxValue={maxValue}
                />
            </div>
        </div>
    );
}

export default App
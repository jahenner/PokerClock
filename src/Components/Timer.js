import React, { useEffect, useState } from 'react';
import Time from './Time';


function Timer() {
    const [timerState, setClockState] = useState(20)
    const [pauseState, setPauseState] = useState(false)

    const handleChangeActive = () => {
        setPauseState((previous) => {
            return !previous
        });
    };

    useEffect(() => {
        setInterval(() => {
            if (pauseState) {
                setClockState(timerState - 1);
            };
        }, 1000);
        
    }, [handleChangeActive]);
    return (
        <tbody>
            <tr>
                <Time active={pauseState} handleChangeActive={handleChangeActive} />
                <td>{timerState}</td>
            </tr>
        </tbody>
        
    )
}

export default Timer;
import React, { useEffect, useState } from 'react';
import Time from './Time';
import { MdPause, MdPlayArrow } from "react-icons/md"


function Timer() {
    const [timerState, setClockState] = useState(20);
    const [pauseState, setPauseState] = useState(false);

    function updateTimer() {
        console.log(pauseState)
        if (pauseState & timerState > 0) {
            setClockState(timerState - 1);
        }
    }

    useEffect(() => {
        setInterval(updateTimer, 1000);
    }, []);

    return (
        <tbody>
            <tr>
                <td><MdPause onClick={() => setPauseState(!pauseState)} /></td>
                <td>{timerState}</td>
                <td>{Boolean.prototype.toString(pauseState)}</td>
            </tr>
        </tbody>
        
    )
}

export default Timer;
import React from 'react';
import { MdPause, MdPlayArrow } from "react-icons/md"

function Time( {pauseState, setPauseState, startCountDown} ) {
    console.log(`This is Time's ${pauseState}`)
    function updateTime(start) {
        setPauseState((pause) => {return !pause})
        if (start) {
            startCountDown(true)
        } else {
            startCountDown(false)
        }
    }
    return (
        <td>
            {pauseState ? (
                <MdPause 
                    className="active"
                    onClick={() => updateTime(true)}
                />
            ) : (
                <MdPlayArrow 
                    className="inactive"
                    onClick={() => updateTime(true)}
                /> 
            )}
        </td>
    )
}

export default Time;
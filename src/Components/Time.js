import React from 'react';
import { MdPause, MdPlayArrow } from "react-icons/md"

function Time( {pauseState, setPauseState} ) {
   
    return (
        <td>
            {pauseState ? (
                <MdPause 
                    className="active"
                    onClick={() => setPauseState(!pauseState)}
                />
            ) : (
                <MdPlayArrow 
                    className="inactive"
                    onClick={() => setPauseState(!pauseState)}
                /> 
            )}
        </td>
    )
}

export default Time;
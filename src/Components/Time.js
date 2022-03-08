import React from 'react';
import { MdPause, MdPlayArrow } from "react-icons/md"

function Time( {active, handleChangeActive} ) {
    return (
        <td>
            {active ? (
                <MdPause 
                    className="active"
                    onClick={() => handleChangeActive()}
                />
            ) : (
                <MdPlayArrow 
                    className="inactive"
                    onClick={() => handleChangeActive()}
                /> 
            )}
        </td>
    )
}

export default Time;
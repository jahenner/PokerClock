import React from 'react';
import Time from './Time';
import { MdPause, MdPlayArrow } from "react-icons/md"

function Timer() {
    return (
        <tbody>
            <tr>
                <td><MdPause /></td>
                <Time />
            </tr>
        </tbody>
        
    )
}

export default Timer;
import * as React from 'react';

const BuggyComp = ({enable = true}: {enable:boolean}) => {
    if (enable)
        throw new Error('BuggyComp is rendering');
    return <label>BuggyComp is not enabled</label>
}

export default BuggyComp;
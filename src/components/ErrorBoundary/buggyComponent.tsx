import * as React from 'react';

const BuggyComponent = ({enable = true}: {enable:boolean}) => {
    if (enable)
        throw new Error('BuggyComp is rendering');
    return <label>BuggyComp is not enabled</label>
}

export default BuggyComponent;
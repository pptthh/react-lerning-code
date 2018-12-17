import * as React from 'react';
import { throwError } from '../../utils';

const BuggyComponent:React.SFC<{enable:boolean}> =
({enable = true}: {enable:boolean}) =>
    enable ? 
        throwError('BuggyComp is rendering') :
        <label>BuggyComp is not enabled</label>


export default BuggyComponent;
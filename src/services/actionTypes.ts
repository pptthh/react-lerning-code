import detailedViewActionTypes from "../scenes/DetaildView/dvActions";

const a:object = {
    a:'a',
    b:'b',
    c:'c',
}
const a1:object = {
    a1:'a1',
    b1:'b1',
    c1:'c1',
}
enum ActionTypes {
    ... a,
    ... a1,
};

export default ActionTypes;


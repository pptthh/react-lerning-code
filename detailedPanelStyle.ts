import { create, JSS } from 'jss';

const detailedPanelStyle: JSS = create();
detailedPanelStyle.createStyleSheet({
    '.DetailedPanel': {
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'space-around',
    },
    '.DetailedPanel img': {
        height: 250,
    },
    '.DetailedPanel .fimlData': {
        width: 500,
    },
});

export default detailedPanelStyle;

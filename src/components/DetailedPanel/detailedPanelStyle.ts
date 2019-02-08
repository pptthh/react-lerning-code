const detailedPanelStyle = {
    '@global': {
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
        '#filmTitle': {
            color: '#F33',
            fontSize: '16pt',
            fontWeight: 'bold',
            },
        '#filmRating': {
            border: '1px solid #090',
            borderRadius: 25,
            color: '#090',
            fontSize: '10pt',
            margin: 10,
            padding: 10,
        },
        '#filmYear, #filmDuration': {
            fontSize: '8pt',
            fontWeight: 'bold',
            paddingRight: 20,
        },
        '#fimlDescription': {
            color: '#CCC',
            fontSize: '10pt',
        },
    },
};

export default detailedPanelStyle;

import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context(
    '../stories',
    true,
    /.stories.tsx$/,
);
const loadStories = () => {
    req.keys().forEach(
        req,
    );
};

configure(loadStories, module);

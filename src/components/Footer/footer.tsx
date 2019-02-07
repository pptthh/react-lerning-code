import * as React from 'react';

interface FooterProps {
    children?: JSX.Element | string;
    tooltip?: string;
}

const Footer = ({ children = 'netflixroulette', tooltip = '' }: FooterProps): JSX.Element =>
    <h5 className='Footer' title={tooltip}>{children}</h5>;

export default Footer;

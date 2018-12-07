import * as React from "react";

interface FooterProps {
    children?: JSX.Element | string;
    tooltip?: string;
}

const style = {
    'background':'black',
    'color':'white',
};

const Footer = ({children = 'netflixroulette', tooltip = ''}: FooterProps): JSX.Element => 
    <h5 style={style} className="Footer" title={tooltip}>{children}</h5>;

export default Footer;

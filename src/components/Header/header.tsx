import * as React from 'react';

interface HeaderProps {
    children: any;
    tooltip?: string;
}

const Header = ({children, tooltip = ''}: HeaderProps): JSX.Element => 
    <h5 className="header" title={tooltip}>{children}</h5>;

export default Header;

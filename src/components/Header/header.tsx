import * as React from 'react';

interface HeaderProps {
    // tslint:disable-next-line:no-any
    children: any;
    tooltip?: string;
}

const Header = ({children, tooltip = ''}: HeaderProps): JSX.Element =>
    <h5 className='header' title={tooltip}>{children}</h5>;

export default Header;

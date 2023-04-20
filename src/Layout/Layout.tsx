import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

import Start from '../Start/Start';

function Layout():JSX.Element {
    return (
        <div>
           <Header />
           <Start />
            <Outlet />
        </div>
    );
}
export default Layout;

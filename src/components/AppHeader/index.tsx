import './AppHeader.css';
import React  from 'react';

import logo from '../../../public/logo.png';


const AppHeader: React.FC = ({ }) => {


    return (
        <div className="header-div">

            <img className='header_logo_image'
                src={logo}
                alt="IMAGE"
            />
            <span className='app-title'>
                Personality Test
            </span>
        </div>
    );
};

export default AppHeader;

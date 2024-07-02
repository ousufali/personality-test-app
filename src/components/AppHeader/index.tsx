import './AppHeader.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../../public/logo.png';


const AppHeader: React.FC = ({ }) => {
    const navigate = useNavigate();

    return (
        <div className="header-div">

            <img className='header_logo_image'
                src={logo}
                alt="IMAGE"
                onClick={() => navigate('/')}
            />
            <span className='app-title'>
                Personality Test
            </span>
        </div>
    );
};

export default AppHeader;

import React, { FC } from 'react';
import './Results.css'; // Import the CSS file

const Results: FC = () => {
    return (
        <div className="resultsContainer">

            <div className="resultsImageContainer">
                {/* <img src="/extrovert.jpg" alt="Image" className="resultsImage" /> */}

                <img src="/introvert.jpg" alt="Image" className="resultsImage" />
                <p className="resultsText">{"You are introvert".toLocaleUpperCase()}</p>
                {/* <p className='resultsText'>{"You are extrovert".toLocaleUpperCase()}</p> */}
            </div>

        </div>
    );
};

export default Results;
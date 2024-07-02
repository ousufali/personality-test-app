import { FC } from 'react';
import './Results.css';

import { EXTROVERT_BOUNDRY } from '../../utils/constant';

interface ResultsProps {
    score: number;
}

const Results: FC<ResultsProps> = ({ score }) => {
    return (
        <div className="resultsContainer">

            <div className="resultsImageContainer">
                {
                    score > EXTROVERT_BOUNDRY ?
                        <>
                            <img src="/extrovert.jpg" alt="Image" className="resultsImage" />
                            <p title="Don't worry this result is not real." className='resultsText'>{"You are extrovert".toLocaleUpperCase()}</p>
                        </>
                        :
                        <>

                            <img src="/introvert.jpg" alt="Image" className="resultsImage" />
                            <p title="Don't worry this result is not real." className="resultsText">{"You are introvert".toLocaleUpperCase()}</p>
                        </>
                }



            </div>

        </div>
    );
};

export default Results;
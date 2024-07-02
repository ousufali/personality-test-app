import './AssessmentDescription.css';
import React, { useState } from 'react';

import Loader from '../HelperComponents/Loader';

import { AssessmentListing } from '../../utils/models';

interface AssessmentDescriptionProps {
    assessment: AssessmentListing
    startTestCallback: () => Promise<boolean>
}

const AssessmentDescription: React.FC<AssessmentDescriptionProps> = ({ assessment, startTestCallback }) => {
    const [showLoader, setShowLoader] = useState<boolean>(false)
    const [notification, setNotification] = useState<{ message: string, type: string }>({ message: '', type: '' })

    const startTestHandler = async () => {
        setShowLoader(true)
        const is_question_fetched = await startTestCallback()
        // console.log("is_question_fetched:   ", is_question_fetched)
        if (!is_question_fetched) {
            setNotification({ message: 'Error fetching questions', type: 'error' })
            setTimeout(() => {
                setNotification({ message: '', type: '' })
            }, 3000)
        }
        setShowLoader(false)
    }

    return (
        <div className='test-section'>


            <div className='response-sheet-section'>
                <span className="description-heading"> {assessment?.title} </span>

                <span className='description-content'
                    dangerouslySetInnerHTML={{ __html: assessment?.description?.replace(/\n/g, '<br />') }}

                />

            </div>

            <div className='action-section'>
                <span
                    style={{ color: notification.type === "error" ? 'red' : 'green' }}
                >
                    {notification.message}
                </span>

                {
                    showLoader === true ? <Loader />
                        : <button
                            id='action-button'
                            className='action-button-start'
                            onClick={startTestHandler}
                        >
                            Start
                        </button>
                }


            </div>
        </div>
    );
};

export default AssessmentDescription;
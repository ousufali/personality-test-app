import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';

import { Question } from '../../utils/models'


interface WithQuestionsValidationProps {
    questions: Array<Question>;
    children: ReactNode;
}

const WithQuestionsValidation: React.FC<WithQuestionsValidationProps> = ({ questions, children }) => {
    if (questions.length > 0) {
        return <>{children}</>;
    } else {
        return <Navigate to="/" />;
    }
};


export default WithQuestionsValidation;
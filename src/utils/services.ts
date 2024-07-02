import axios from 'axios';
import config from './config';

export const getAssessments = async () => {
    var results = []
    try {
        const response = await axios.get(`${config.EXAM_API_URI}/get/assessments`);
        if (response.status === 200) {
            results = response.data;
        }
        // console.log("response: ", response);
    } catch (error) {
        console.error(error);
    }

    return results;
}


interface GetAssessmentQuestions {
    assessmentNumber: number
}

export const getAssessmentQuestions = async (data: GetAssessmentQuestions) => {
    var results = []
    try {
        const response = await axios.post(`${config.EXAM_API_URI}/get/questions`, data);
        if (response.status === 200) {
            results = response.data.map((item: object) => { return { ...item, "isAnswered": false, "selectedOption": -1 } });
        }
        // console.log("response: ", response);
    } catch (error) {
        console.error(error);
    }
    return results;
}



interface GetScoreData {
    assessmentNumber: number,
    answerSheet: Array<{ questionNumber: number, selectedOption: number }>
}

export const getAssessmentScore = async (data: GetScoreData) => {
    var result = undefined
    try {
        const response = await axios.post(`${config.EXAM_API_URI}/get/score`, data);
        if (response.status === 200) {
            result = response.data;
        }
    } catch (error) {
        console.error(error);
    }
    return result;
}   

import axios from 'axios';
import config from './config';

export const getAssessments = async () => {
    var results = []
    try {
        const response = await axios.get(`${config.BASE_URL}/get/assessments`);
        if (response.status === 200) {
            results = response.data;
        }
        console.log("response: ", response);
    } catch (error) {
        console.error(error);
    }

    return results;
}


interface GetQuestionsData {
    assessmentNumber: number
}

export const getQuestions = async (data: GetQuestionsData) => {
    var results = []
    try {
        const response = await axios.post(`${config.BASE_URL}/get/questions`, data);
        if (response.status === 200) {
            results = response.data;
        }
        console.log("response: ", response);
    } catch (error) {
        console.error(error);
    }
    return results;
}



interface GetScoreData {
    assesmentNumber: number,
    answerSheet: Array<{ questionNumber: number, selectedOption: number }>
}

export const getScore = async (data: GetScoreData) => {
    var result = undefined
    try {
        const response = await axios.post(`${config.BASE_URL}/get/score`, data);
        if (response.status === 200) {
            result = response.data;
        }
    } catch (error) {
        console.error(error);
    }
    return result;
}   


export interface Question {
    text: string,
    isAnswered: boolean,
    options: string[],
    selectedOption: number
}


export interface AssessmentListing {
    title: string,
    shortDescription: string,
    description: string
}


def calculate_score(data):
    option_values = {
        0: [1, 3, 5, 10],
        1: [1, 3, 5, 10],
        2: [1, 3, 5, 10],
        3: [1, 3, 5, 10],
        4: [1, 3, 5, 10],
    }

    assessment_number = data['assessmentNumber']
    answer_sheet = data['answerSheet']
    total_score = 0

    for answer in answer_sheet:
        selected_option = answer['selectedOption']
        total_score += option_values[assessment_number][selected_option]

    total_possible_score = len(answer_sheet) * 10
    normalized_score = (total_score / total_possible_score) * 10
    return normalized_score
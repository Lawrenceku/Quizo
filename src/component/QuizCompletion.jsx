import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const QuizCompletion = ({ score, onclick }) => {
    const navigate = useNavigate();
    // Determine the circle color and text based on the score
    let circleColor = '';
    let gradeText = '';

    if (score >= 0 && score < 4) {
        circleColor = 'bg-red-500'; // Red circle for low scores
        gradeText = 'Low Score - Try Again!';
    } else if (score >= 4 && score < 6) {
        circleColor = 'bg-orange-500'; // Orange circle for medium scores
        gradeText = 'Good Effort - Keep Going!';
    } else {
        circleColor = 'bg-green-500'; // Green circle for high scores
        gradeText = 'Great Job - Well Done!';
    }

    return (
        <div className="flex pt-40 items-center flex-col w-full h-screen bg-gray-100">
            <div className={`flex justify-center items-center ${circleColor} w-32 h-32 rounded-full text-white text-4xl`}>
                <FaCheck style={{ color: 'white', fontSize: '50px' }} />
            </div>
            <p className="mt-4 text-xl font-semibold text-center">
                Congratulations! You've completed the quiz with a score of {score}.
            </p>
            <p className="mt-2 text-lg text-center">
                {gradeText}
            </p>
            <button className='text-white font-medium rounded px-4 py-2 my-8 bg-green-800' onClick={onclick}>Try again ?</button>
        </div>
    );
};

export default QuizCompletion;

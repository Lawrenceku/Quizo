import React, { useState, useEffect } from 'react';
import QuestionCard from '../component/QuestionCard'; // Import QuestionCard component
import Loader from '../component/SkeletonLoader';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    useEffect(() => {
        // Fetch questions and answers from an API or other source
        const fetchQuizData = async () => {
            const response = await fetch('https://api.example.com/quiz');
            const data = await response.json();
            setQuestions(data.questions);
        };

        fetchQuizData();
    }, []);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
        console.log('Selected answer:', answer);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Move to the next question
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(''); // Reset answer for next question
        } else {
            console.log('Quiz completed');
        }
    };

    if (questions.length === 0) {
        return <Loader />;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
                <QuestionCard
                    question={currentQuestion.question}
                    options={currentQuestion.answers}
                    onAnswer={handleAnswer}
                />
                <div className="mt-6 flex justify-between">
                    <button
                        type="submit"
                        className="w-1/2 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                        className="w-1/2 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Quiz;

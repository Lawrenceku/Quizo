import React, { useState, useEffect } from 'react';
import QuestionCard from '../component/QuestionCard';
import Loader from '../component/SkeletonLoader';
import QuizCompletion from '../component/QuizCompletion';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    useEffect(() => {
        fetch('https://quizo-backend-bx0u.onrender.com/api/quiz/questions')
            .then(response => response.json())
            .then(data => {
                // API returns array directly, no need for data.questions
                setQuestions(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        const currentQuestion = questions[currentQuestionIndex];
        const correctOption = currentQuestion.options.find(opt => opt.isCorrect);
        
        if (selectedAnswer === correctOption.answer) {
            setScore(prevScore => prevScore + 1);
        }

        // Move to next question
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer('');
        } else {
            console.log('Quiz completed! Final score:', score + (selectedAnswer === correctOption.answer ? 1 : 0));
            setIsQuizCompleted(true);
        }
    };

    if (!questions || questions.length === 0) {
        return <Loader />;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    return (
        <div>
            {isQuizCompleted ? (
                <QuizCompletion onclick={()=>{setCurrentQuestionIndex(0); setScore(0); setIsQuizCompleted(false)}} score={score} />
            ) : (
                <div className="flex justify-center items-center w-full h-screen bg-gray-100">
                    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                        <div className="mb-4 flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                                Question {questionNumber} of {questions.length}
                            </span>
                            <span className="text-sm text-gray-600 font-medium">
                                Score: {score}
                            </span>
                        </div>
                        <span></span>
                        <span className="text-xs text-gray-900 my-1">
                                    Category: {currentQuestion.category}
                                </span>
                        
                        <QuestionCard
                            question={currentQuestion.question}
                            options={currentQuestion.options.map(opt => opt.answer)}
                            selectedAnswer={selectedAnswer}
                            onAnswer={handleAnswer}
                        />

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                            >
                                {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Quiz;
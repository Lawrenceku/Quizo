import React, { useState, useEffect } from 'react';
import QuestionCard from '../component/QuestionCard';
import Loader from '../component/SkeletonLoader';
import QuizCompletion from '../component/QuizCompletion';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [answeredQuestions, setAnsweredQuestions] = useState({}); // Track answered questions
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const shuffleArray = (array) => {
        return array
            .map(value => ({ value, sort: Math.random() })) // Attach a random key
            .sort((a, b) => a.sort - b.sort) // Sort by random key
            .map(({ value }) => value); // Extract original values
    };
    
    useEffect(() => {
        fetch('https://quizo-backend-bx0u.onrender.com/api/quiz/questions')
            .then(response => response.json())
            .then(data => {
                // Shuffle options for each question
                const shuffledData = data.map(question => ({
                    ...question,
                    options: shuffleArray(question.options),
                }));
                setQuestions(shuffledData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    const handleAnswer = (answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [currentQuestionIndex]: answer,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const currentQuestion = questions[currentQuestionIndex];
        const correctOption = currentQuestion.options.find(opt => opt.isCorrect);

        // Only update score if the question hasn't been answered yet
        if (!answeredQuestions[currentQuestionIndex]) {
            if (selectedAnswers[currentQuestionIndex] === correctOption.answer) {
                setScore((prevScore) => prevScore + 1);
            }

            // Mark the question as answered
            setAnsweredQuestions((prev) => ({
                ...prev,
                [currentQuestionIndex]: true,
            }));
        }

        // Move to next question or complete quiz
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
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
                <QuizCompletion
                    onClick={() => {
                        setCurrentQuestionIndex(0);
                        setScore(0);
                        setIsQuizCompleted(false);
                        setSelectedAnswers({});
                        setAnsweredQuestions({});
                    }}
                    score={score}
                />
                
            ) : (
                <div className="flex justify-center items-center w-full h-screen bg-gray-100">
                    <form onSubmit={handleSubmit} className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
                        <div className="mb-4 flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                                Question {questionNumber} of {questions.length}
                            </span>
                        </div>
                        <span className="text-xs text-gray-900 my-1">
                            Category: {currentQuestion.category}
                        </span>

                        <QuestionCard
                            question={currentQuestion.question}
                            options={currentQuestion.options.map(opt => opt.answer)}
                            selectedAnswer={selectedAnswers[currentQuestionIndex] || ''} // Get selected answer for the current question
                            onAnswer={handleAnswer}
                        />

                        <div className="mt-6 flex space-x-10">
                            <button
                                type="button"
                                onClick={() => {
                                    if (currentQuestionIndex > 0) {
                                        setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
                                    }
                                }}
                                className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                            >
                                Back
                            </button>
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

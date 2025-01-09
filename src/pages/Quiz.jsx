import React, { useState, useEffect } from 'react';
import QuestionCard from '../component/QuestionCard';
import Loader from '../component/SkeletonLoader';
import QuizCompletion from '../component/QuizCompletion';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [loading, setLoading] = useState(false); // New loading state for refetching
    const [time, setTime] = useState(60);

    const shuffleArray = (array) => {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const fetchQuestions = () => {
        setLoading(true); // Start loading
        setTime(60); // Reset time
        fetch('https://quizo-backend-bx0u.onrender.com/api/quiz/questions')
            .then(response => response.json())
            .then(data => {
                const shuffledData = data.map(question => ({
                    ...question,
                    options: shuffleArray(question.options),
                }));
                setQuestions(shuffledData);
                setLoading(false); // End loading
                startTimer();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // End loading on error
            });
    };

    const startTimer = () => {
        // Clear any existing timer
        if (window.timer) {
            clearInterval(window.timer);
        }
        // Start a new timer
        window.timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(window.timer);
                    setIsQuizCompleted(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };
        useEffect(() => {
        fetchQuestions();
    }, []);

    useEffect(() => {
        return () => {
            if (window.timer) {
                clearInterval(window.timer);
            }
        };
    }, []);
    

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsQuizCompleted(false);
        setSelectedAnswers({});
        setAnsweredQuestions({});
        fetchQuestions(); // Refetch questions
    };

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

        if (!answeredQuestions[currentQuestionIndex]) {
            if (selectedAnswers[currentQuestionIndex] === correctOption.answer) {
                setScore((prevScore) => prevScore + 1);
            }
            setAnsweredQuestions((prev) => ({
                ...prev,
                [currentQuestionIndex]: true,
            }));
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    if (loading || !questions || questions.length === 0) {
        return <Loader />;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    return (
        <div>
            {isQuizCompleted ? (
                <QuizCompletion
                    onclick={handleRestart}
                    score={score}
                />
            ) : (
                <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
                    <span className={`${time <= 10 ? 'text-red-500' : time <= 30 ? 'text-orange-500' : 'text-gray-900'} text-2xl my-10 mx-auto`}
                    ><span className='text-gray-900 font-medium'>Time left:</span> {time}s</span>
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
                            selectedAnswer={selectedAnswers[currentQuestionIndex] || ''}
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

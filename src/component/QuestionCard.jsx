import React from 'react';

const QuestionCard = ({ question, options, selectedAnswer, onAnswer }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">{question}</h2>
            <div className="space-y-2">
                {options.map((option, index) => (
                    <label
                        key={index}
                        className={`block p-4 border rounded-lg cursor-pointer transition-colors duration-200
                            ${selectedAnswer === option 
                                ? 'bg-green-100 border-green-500' 
                                : 'hover:bg-gray-50 border-gray-200'}`}
                    >
                        <input
                            type="radio"
                            name="answer"
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={(e) => onAnswer(e.target.value)}
                            className="mr-3"
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
const QuestionCard = ({ question, options, onAnswer, selectedAnswer, isAnswered }) => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{question}</h2>
            <div>
                {options.map((option, index) => (
                    <div key={index} className={`mb-2 p-2 rounded-lg 
                        ${isAnswered ? 
                            option.isCorrect ? 'bg-green-300' : 
                            (selectedAnswer === option.answer ? 'bg-red-300' : '') : ''}`}>
                        <label>
                            <input
                                type="radio"
                                value={option.answer}
                                checked={selectedAnswer === option.answer}
                                onChange={() => onAnswer(option.answer)}
                                className="mr-2"
                            />
                            {option.answer}
                        </label>
                    </div>
                ))} 
            </div>
        </div>
    );
};

export default QuestionCard;

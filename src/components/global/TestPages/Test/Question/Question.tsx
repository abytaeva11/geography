import React, { useState } from 'react';
import "../Test.scss"

interface QuestionProps {
    question: string;
    options: string[];
    correctAnswer: number;
    onAnswerSelected: (isCorrect: boolean) => void;
}

function Question({ question, options, correctAnswer, onAnswerSelected }: QuestionProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (index: number) => {
        setSelectedAnswer(index);
        onAnswerSelected(index === correctAnswer);
    };

    return (
        <div className="question">
            <p>{question}</p>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            checked={selectedAnswer === index}
                            onChange={() => handleAnswerClick(index)}
                        />
                        <h2>{option}</h2>
                    </li>
                ))}
            </ul>
            <button onClick={() => setShowResult(true)}><h4>Жообу</h4></button>
            {showResult && (
                <p style={{ color: "white", background: selectedAnswer === correctAnswer ? 'green' : 'red', alignItems: "center", display: "flex", width: "200px" }}>
                    {selectedAnswer === correctAnswer ? 'туура ' : 'туура эмес'}
                </p>
            )}
        </div>
    );
}

export default Question;

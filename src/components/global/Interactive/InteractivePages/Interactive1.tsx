import React, { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

interface Interactive1Props {
    images: string[];
    answerOptions: string[][];
    title:string[]
}

const Interactive1: React.FC<Interactive1Props> = ({ images, title, answerOptions }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const { seconds, restart } = useTimer({ expiryTimestamp: new Date(Date.now() + 20000), onExpire: handleTimerExpire });

    useEffect(() => {
        startGame();
    }, [currentImageIndex]);

    function handleTimerExpire() {
        alert(`Убакыт аяктады! Туура жооп: ${answerOptions[currentImageIndex][3]}`);
        nextImage();
    }

    function startGame() {
        setIsTimerRunning(true);
        restart(new Date(Date.now() + 20000));
    }

    function nextImage() {
        setCurrentImageIndex(currentImageIndex + 1);
        setSelectedAnswer(null);
        setIsTimerRunning(false);
    }

    function handleAnswerClick(answerIndex: number) {
        setSelectedAnswer(answerIndex);
        setIsTimerRunning(false);

        if (answerIndex === 3) {
            alert('Туура!');
        } else {
            alert(`туура эмес! Туура жооп: ${answerOptions[currentImageIndex][3]}`);
        }

        nextImage();
    }

    return (
        <div className="interactive-inside">
            <h1> {title[currentImageIndex]} </h1>

            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ maxWidth: '50%' }} />
            <p>Убакыт : {seconds} секунд</p>
            <div>
                {[0, 1, 2, 3].map((answerIndex) => (
                    <button
                        key={answerIndex}
                        onClick={() => handleAnswerClick(answerIndex)}
                        className={`answer-button 
                ${selectedAnswer === answerIndex ?
                            (answerIndex === 3 ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500 m-3 '} 
                text-white 
                px-4 py-2 
                rounded 
                ${!isTimerRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!isTimerRunning}
                    >
                         {answerIndex + 1}: {answerOptions[currentImageIndex][answerIndex]}
                    </button>

                ))}
            </div>
        </div>
    );
};

export default Interactive1;

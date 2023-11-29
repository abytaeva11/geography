import React from 'react';
import Question from "./Test/Question/Question";
import {NavLink} from "react-router-dom";
import {AiOutlineDoubleLeft} from 'react-icons/ai';
import {AiOutlineDoubleRight} from 'react-icons/ai';

function TestPages4() {
    const question1 = '7 Жогорку Кеңештин депутаттыгына канча жаштан жана канча жылга шайланат?';
    const options1 = ['35 жаштан, 6 жылга', ' 25 жаштан, 5 жылга', '23 жаштан, 4 жылга ', '24 жаштан, 5 жылга '];
    const correctAnswer1 = 1;

    const question2 = '8 Кыргыз Республикасынын мыйзам чыгаруучу органы?'
    const options2 = ['Мажилис', 'Жогорку кеңеш ', 'Акимчилик','Окмөт'];
    const correctAnswer2 = 1;

    const question3 = '1 Калктын өсүп-өнүгүү мыйзам ченемдүүлүктөрүн,санын, табигый өсүшүн, курамын изилдөөчү илим?';
    const options3 = [' география', 'сейсмология', ' демография', 'геоэкология'];
    const correctAnswer3 = 2;

    const question4 = '2 Кыргыз Республикасынын калкынын саны?';
    const options4 = ['5 млн', '2,5 млн', ' 5,2 млн', '  7 млн'];
    const correctAnswer4 = 3;



    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 4</p>
                <Question
                    question={question1}
                    options={options1}
                    correctAnswer={correctAnswer1}
                    onAnswerSelected={handleAnswerSelected}
                />

                <Question
                    question={question2}
                    options={options2}
                    correctAnswer={correctAnswer2}
                    onAnswerSelected={handleAnswerSelected}
                />
                <h5>II. Бөлүм. КЫРГЫЗ РЕСПУБЛИКАСЫНЫН КАЛКЫНЫН ГЕОГРАФИЯСЫ</h5>
                <h1> Тема: 3. Калкы. Демографиялык процесстер</h1>
                <Question
                    question={question3}
                    options={options3}
                    correctAnswer={correctAnswer3}
                    onAnswerSelected={handleAnswerSelected}
                />
                <Question
                    question={question4}
                    options={options4}
                    correctAnswer={correctAnswer4}
                    onAnswerSelected={handleAnswerSelected}
                />

                <div className="btn-both">
                    <button className="test-btn" onClick={() => window.history.back()}>
                        <span> <AiOutlineDoubleLeft/></span> <h3>Артка</h3></button>
                    <NavLink to="/test-pages5"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TestPages4;

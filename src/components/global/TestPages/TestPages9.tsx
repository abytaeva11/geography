import React from 'react';
import Question from "./Test/Question/Question";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function TestPages9() {
    const question1 = '4 Кыргыз Республикасында 1км2 жерге калктын орточо жыштыгы ...';
    const options1 = [' 22,5 киши', '25,2 киши', ' 31 киши', '23,6 киши'];
    const correctAnswer1 = 2;

    const question2 = '5 Кайсы облуста калктын жыштыгы жогорулугу менен айырмаланат?';
    const options2 = [' Жалал-Абад', 'Ысык-Кол ', 'Нарын', 'Oш'];
    const correctAnswer2 = 3;

    const question3 = '6 Республиканын калкынын 34% ы кайсы калктуу пунктарда топтолгон?';
    const options3 = ['кыштактарда', 'шаарларда', ' шаарчаларда', 'дачаларда'];
    const correctAnswer3 = 2;

    const question4 = '7 Калктын белгилуу бир аймакка топтолуп отурукташуусу - бул ....';
    const options4 = ['калктын жыштыгы', 'калктын отурукташуусу', ' калкттуу пункттар', ' калктын жайгашуусу'];
    const correctAnswer4 = 3;

    const question5 = '8 Бир нече милдетти аткарган шаарлар кандай аталат?';
    const options5 = ['экономикалык эмес ', 'монофункциялуу ', 'полифункциялуу', ' экономикалык'];
    const correctAnswer5 = 3;

    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 9</p>
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
                <Question
                    question={question5}
                    options={options5}
                    correctAnswer={correctAnswer5}
                    onAnswerSelected={handleAnswerSelected}
                />

                <div className="btn-both">
                    <button className="test-btn" onClick={() => window.history.back()}><span> <AiOutlineDoubleLeft/></span> <h3>Артка</h3></button>
                    <NavLink to="/test-pages10"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TestPages9;

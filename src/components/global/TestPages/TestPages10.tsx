import React from 'react';
import Question from "./Test/Question/Question";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function TestPages10() {
    const question1 = '9. Орто шаарларга төмөнкү шаарлардын кайсылары\n' +
        'кирет?';
    const options1 = ['миграция', 'уй-бүлөнүн материалдык денгээли', ' өнөр жайлардын иштөөсү', 'эненин бала багуу эс алуусу'];
    const correctAnswer1 = 1;

    const question2 = '9 Кыргыз Республикасында 2010-жылкы маалымат боюнча калктын орточо жашы?';
    const options2 = ['73,0 жаш', '64,2 жаш ', '68,8 жаш', '65,6 жаш'];
    const correctAnswer2 = 0;

    const question3 = '10 Көчүп келгендердин эсебинен калктын санынын\n' +
        'көбөйүшү...';
    const options3 = ['төрөлүү', 'табигый өсүш', ' механикалык кыймыл', 'жыштык'];
    const correctAnswer3 = 2;

    const question4 = '1. Адам баласынын өмүрүндө канча мезгил болот?';
    const options4 = ['төрт', 'эки', 'үч', 'беш'];
    const correctAnswer4 = 2;

    const question5 = '2. Республикада эркектердин жашыным орточо узактыгы.';
    const options5 = ['58 жаш', '63 жаш ', '69 жаш', ' 77 жаш'];
    const correctAnswer5 = 1;

    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 10</p>
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
                    <NavLink to="/test-pages7"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TestPages10;

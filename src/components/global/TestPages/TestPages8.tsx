import React from 'react';
import Question from "./Test/Question/Question";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function TestPages8() {
    const question1 = '9 Улуттар аралык айырмачылык эмнеде?';
    const options1 = [' табигый өсүшү, отурукташуусу', ' жашаган аймагы', ' тили, каада салты менен ', 'жашоо шарты'];
    const correctAnswer1 = 2;

    const question2 = '10. Кыргыз Республикасында кенири таралган дин ';
    const options2 = ['христиан', 'ислам', 'жергиликтуу',' буддизм'];
    const correctAnswer2 = 2;

    const question3 = '1 Кыргызстанда калктын негизги бөлүгү деңиз деңгээлинен канча бийиктикте отурукташкан?';
    const options3 = ['200-300м ', '500-900м', '500-1500м', '300-900м'];
    const correctAnswer3 = 2;

    const question4 = '2 Төмөнкүлөрдүн кайсынысы калктын жайгашуусуна ыңгайлуу?';
    const options4 = ['айыл чарба, өнөр жай ', ' транспорт, дыйканчылык', 'рельеф, таза суу, климаттык шарт', 'жаныбарлар, өсүмдүктөр'];
    const correctAnswer4 = 2;

    const question5 = '3 Калктын аймак боюнча жайгашуусун көрсөтүүчү\n' +
        'бирдик.?'
    const options5 = ['калктын миграциясы ', 'калктын саны', ' калктын жыштыгы', 'калктын жайгашуусу'];
    const correctAnswer5 = 1;


    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 8</p>
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
                <h1>Тема: 5. Калктын отурукташуусу жана жыштыгы</h1>
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
                    <NavLink to="/test-pages9"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TestPages8;

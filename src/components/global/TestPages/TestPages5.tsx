import React from 'react';
import Question from "./Test/Question/Question";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function TestPages4() {
    const question1 = '3 Табигый осүш-бул...';
    const options1 = ['жыл ичинде төрөлгөндөрдүн саны', ' төрөлгөндөрдүн саны өлгөндөрдүн санынан коп болушу', ' башка мамлекеттин жарандыгын алган калктын\n' +
    'саны ', 'жаны төрөлгөн ымыркайлардын саны '];
    const correctAnswer1 = 1;

    const question2 = '4 Республикабызда канча жылда бир эл каттоо жургүзүлөт!';
    const options2 = ['беш жылда', 'он жылда ', 'жети жылда', 'алты жылда'];
    const correctAnswer2 = 1;

    const question3 = '5 Калктын санынын көбөйүшүнө таасир этүүчү процесс.';
    const options3 = ['саламаттыкты сактоонун деңгээли', 'табигый өсүш', 'калктын жыштыгы', ' элдин улуттук өзгөчүлүгү'];
    const correctAnswer3 = 1;

    const question4 = '6 Калктын санына таасир этүүчү фактор.';
    const options4 = ['табигый  өсүш', 'өлүм-житим', 'калктын жыштыгы', 'улуттук курам'];
    const correctAnswer4 = 1;

    const question5 = '7 1920-40-жылдары калктын санынын өсүшү канча пайызга өскөн?';
    const options5 = [' 0,5%', ' 65% ', '77%', ' 80%'];
    const correctAnswer5 = 2;

    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 5</p>
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
                    <NavLink to="/test-pages6"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TestPages4;

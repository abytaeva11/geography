import React from 'react';
import Question from "./Test/Question/Question";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function TestPages3() {
    const question1 = '2 Азыркы учурда pecпубликада канча шаар жана шаарчалар бар?';
    const options1 = ['21 шaaр, 7 шаарча', ' 28 шaap, 11 шаарча', ' 31 шaap, 9 шаарча ', '27 шaaр, 8 шаарча '];
    const correctAnswer1 = 2;

    const question2 = '3 Баткен облусу республиканын кайсы тарабында ';
    const options2 = ['батыш', 'чыгыш ', 'түштүк-батыш', 'түндүк'];
    const correctAnswer2 =  2;

    const question3 = '4 Бишкек шаары жайгашкан облус?';
    const options3 = [' Чүй облусу', 'Баткен облусу', ' Ысык-Көл облусу', 'Жалал-Абад облусу'];
    const correctAnswer3 = 0;

    const question4 = '5 Кыргыз Рecпубликасынын президенти канча жылга шайланат?';
    const options4 = ['алты', 'жети', 'төрт', ' сегиз'];
    const correctAnswer4 = 2;

    const question5 = '6 эгемендуулукту алгандан кийин Кыргыз Республикасынын биринчи Конституциясы кабыл алынган жыл.';
    const options5 = ['1991-жылы 31-августунда', ' 1993-жылы 5-майында ', '1992-жылы 10-майында', ' 1994-жылы 5-майында'];
    const correctAnswer5 = 1;

    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 3</p>
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
                    <NavLink to="/test-pages4"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TestPages3;

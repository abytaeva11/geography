import React from 'react';
import Question from "./Test/Question/Question";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function TestPages2() {
    const question1 = '6 Кыргыз Pecпубликасы түштүк-батышынан кайсы мамлекет менен чектешет?';
    const options1 = ['Кытай', 'Казахстан', 'Ѳзбекстан', 'Tажикстан'];
    const correctAnswer1 = 3;

    const question2 = '7. Кыргыз Республикасы кайсы эл аралык уюмдарга мучө? ';
    const options2 = ['КМШ', ' HATO', 'ОБС', 'EC'];
    const correctAnswer2 = 0;

    const question3 = '8 Peспублика чыгыш жана түштүк-чыгышынан кайсы мамлекет менен чектешет?';
    const options3 = ['Ѳзбекстан', 'Казакстан ', 'Kытай', 'Tажикстан'];
    const correctAnswer3 = 2;

    const question4 = '9 Кыргыз Республикасынын башкаруу формасы? ';
    const options4 = ['президенттик', ' парламенттик', ' парламенттик-президенттик', 'президенттик-парламенттик'];
    const correctAnswer4 = 2;

    const question5 = '1. Pecпублика канча облуска бөлүнөт? ';
    const options5 = ['6', '7 ', '8', '9'];
    const correctAnswer5 = 1;

    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 2</p>
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
                <h1> Tема: 2. Mамлекеттик түзүлүшү .Кыргыз Республикасынын
                    административдик аймактык бөлүнүшү   </h1>
                <Question
                    question={question5}
                    options={options5}
                    correctAnswer={correctAnswer5}
                    onAnswerSelected={handleAnswerSelected}
                />

                <div className="btn-both">
                    <button className="test-btn" onClick={() => window.history.back()}><span> <AiOutlineDoubleLeft/></span> <h3>Артка</h3></button>
                    <NavLink to="/test-pages3"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TestPages2;

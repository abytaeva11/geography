import React from 'react';
import Question from "./Test/Question/Question";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function TestPages1() {
    const question1 = '1 Кыргыз Республикасынын аянты канчага барабар ?';
    const options1 = ['187,9 миң.км²', '198,5 миң.км²', '186,6 миң.км²', '178,2 миң.км²'];
    const correctAnswer1 = 1;

    const question2 = '2 Кыргыз Республикасы кайсыл материкте орун алган ? ';
    const options2 = ['Африка', 'Түндүк Aмерика ', 'Tүштүк Америка', 'Евразия'];
    const correctAnswer2 =  3;

    const question3 = '3 Кыргыз Рecпубликасы эгемендуулукту алган жыл?';
    const options3 = ['1989-жылы 3-августа', ' 1991-жылы 31-августа', '1993-жылы 25-июлда', '1990-жылы 31-август'];
    const correctAnswer3 = 1;

    const question4 = '4 Кыргыз Республикасы менен чектешкен мамлекет-\n' +
        'тердин тобун белгилегиле.';
    const options4 = [' Aзербайжан, Туркменстан, Молдова, Россия', ' Казахстан, Ѳзбекстан, Кытай, Тажикстан', 'Россия, Индия, Афганистан, Ирак', ' Пакистан, Иран, Mонголия'];
    const correctAnswer4 = 1;

    const question5 = '5 Кыргыз Республикасы канча мамлекет менен чектeшeт? ';
    const options5 = ['5', '6 ', '4', '3'];
    const correctAnswer5 = 2;

    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 1</p>
                <h5>I. Бөлүм Кыргыз Республикасынын дүйнө жүзүндө алган орду</h5>
                <h1> Tема: 1. Кыргыз Республикасы дуйнонун саясий картасында    </h1>

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
                   <NavLink to="/test-pages2"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
               </div>
            </div>
        </div>
    );
}

export default TestPages1;

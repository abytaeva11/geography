import React from 'react';
import Question from "./Test/Question/Question";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function TestPages7() {
    const question1 = '3 Эмгекке жарамдуу калк - бул ...';
    const options1 = ['калктын социалдык курамы', ' улуттук курамы', ' курактык курамы ', 'эмгек ресурсу'];
    const correctAnswer1 = 3;

    const question2 = '4 Эмгек ресурстарына төмөнкүлөрдүн кайсынысы кирбейт?';
    const options2 = ['18 жаштан баштап', 'жетилуу аттестатын алгандан кийин ', '16 жашка чейин', ' өндүрүштө иштөөнү каалоочулардын баары кирет'];
    const correctAnswer2 = 2;

    const question3 = '5 Кыргыз Республикасында эмгекке жарамдуулар канча пайызды түзөт?';
    const options3 = [' 32,8%', '17-40%', '59,0%', ' 50,5%'];
    const correctAnswer3 = 3;

    const question4 = '6 Кыргыз Республикасындагы улуттардын саны.';
    const options4 = ['60дай', ' 80дей', '100дөй', '150дөй'];
    const correctAnswer4 = 2;

    const question5 = '7. Кыргыздар Кыргыз Республикасынын калкынын канча пайызын түзөт?';
    const options5 = [' 12,9 %', '53,2 %', '61,6 %', '73 %'];
    const correctAnswer5 = 3;

    const question6 = '8 Жергиликтуу калктын саны эн жогору болгон облус.';
    const options6 = ['Баткен', 'Ысык-Көл', 'Ош', 'Нарын'];
    const correctAnswer6 = 3;

    const handleAnswerSelected = (isCorrect: boolean) => {
        console.log(isCorrect ? 'Правильно' : 'Неправильно');
    };

    return (
        <div className="test-page">
            <div className="test-page-inside">
                <p> бет 7</p>
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
                <Question
                    question={question6}
                    options={options6}
                    correctAnswer={correctAnswer6}
                    onAnswerSelected={handleAnswerSelected}
                />

                <div className="btn-both">
                    <button className="test-btn" onClick={() => window.history.back()}><span> <AiOutlineDoubleLeft/></span> <h3>Артка</h3></button>
                    <NavLink to="/test-pages8"><h3>Алдыга</h3> <span><AiOutlineDoubleRight/></span> </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TestPages7;

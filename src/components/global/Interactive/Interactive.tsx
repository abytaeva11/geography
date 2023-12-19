// src/components/global/Interactive/Interactive.tsx

import React from 'react';
import Interactive1 from './InteractivePages/Interactive1';
import '../Interactive/Interactive.scss';

import img1 from '../../../assets/каркыра.jpg';
import img2 from '../../../assets/бишкек.jpg';
import img3 from '../../../assets/каркыра.jpg';
import img4 from '../../../assets/img/лампа1.jpg';

const Interactive: React.FC = () => {
    const images = [img1, img2, img3, img4];
const title=["Каркыра жайлоосу кайда жайгашкан?",'Бишкек шаары орун алган орон?']
    const answerOptions1 = ['Ош', 'Нарын', 'Талас', 'Ыссык-Кол'];
    const answerOptions2 = ['Сузак', 'Ыссык-Кол', 'Кант', 'Чуй'];

    return (
        <div className="interactive w-full">
            <Interactive1 images={images} title={title} answerOptions={[answerOptions1, answerOptions2]} />
        </div>
    );
};

export default Interactive;

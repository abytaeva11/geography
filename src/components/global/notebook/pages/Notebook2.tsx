import React from 'react';
import "../notebook.scss"
import {NavLink} from "react-router-dom";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

const Notebook2 = () => {
    return (
      <div className="notebook">
          <div className="notebook-inside">

              <div className="notebook2">
                  <h2>
                      4-тапшырма. Кыргыз Республикасынан океандарга чейинки аралыктар берилген, океандардын аттарын жазгыла.
                  </h2>
<div className="notebook2-input">
    <div className="flex w-full item-center justify-between pb-5">
        <div className="notebook2-input-block w-[400px] h-[100px] border-2 border-black rounded-full bg-blue-300 p-4">
            <h3 className="text-center text-white text-2xl">3380 км</h3>
            <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
        </div>
        <div className="notebook2-input-block w-[400px] h-[100px] border-2 border-black rounded-full bg-blue-300 p-4">
            <h3 className="text-center text-white text-2xl">3380 км</h3>
            <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
        </div>
    </div>
    <div className="flex w-full item-center justify-between ">
        <div className="notebook2-input-block w-[400px] h-[90px] border-2 border-black rounded-full bg-blue-300 p-6">
            <h3 className="text-center text-white text-2xl">Кыргыз
                Республикасы</h3>
        </div>


    </div>
    <div className="flex w-full item-center justify-between pt-5 ">
        <div className="notebook2-input-block w-[400px] h-[100px] border-2 border-black rounded-full bg-blue-300 p-4">
            <h3 className="text-center text-white text-2xl">3380 км</h3>
            <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
        </div>
        <div className="notebook2-input-block w-[400px] h-[100px] border-2 border-black rounded-full bg-blue-300 p-4">
            <h3 className="text-center text-white text-2xl">3380 км</h3>
            <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
        </div>
    </div>
</div>
                  <h2>
                      5-тапшырма. Кыргыз Республикасынын экономикалык-географиялык
                      абалынын өзгөчөлүктөрүн Т-схемасы боюнча аныктагыла.
                  </h2>
                  <div className="flex item-center justify-between ">
                      <label className="form-control w-[50%] " >
                          <div className="label">
                              <span className="label-text text-xl "> Ыңгайлуу жактары</span>
                          </div>
                          <textarea className="textarea textarea-bordered h-24 text-xl" placeholder="+"></textarea>
                      </label>
                      <label className="form-control w-[50%]" >
                          <div className="label">
                              <span className="label-text text-xl ">Ыңгайсыз жактары</span>
                          </div>
                          <textarea className="textarea textarea-bordered h-24 text-xl" placeholder="-"></textarea>
                      </label>
                  </div>
<h2>6-тапшырма. Кыргыз Республикасы кайсы дүйнөлүк уюмдарга мүчө?
    Санап өткөргүлө.</h2>
                <div className="text-area">
                      <textarea className="w-full h-[200px]  text-xl p-2"
                                placeholder="Жазып баштаныз..."></textarea>
                </div>

                  <div className="w-full items-center justify-between flex pt-10">
                      <NavLink to="/notebook1" className="btn pr-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                          <FaAngleDoubleLeft/>
                          Артка
                      </NavLink>
                      <NavLink to="/notebook3" className="btn pl-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                          Алдыга <FaAngleDoubleRight/>
                      </NavLink>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Notebook2;
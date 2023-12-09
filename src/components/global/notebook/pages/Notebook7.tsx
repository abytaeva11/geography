import React from 'react';

const Notebook7 = () => {
    return (
        <div className="notebook">
            <div className="notebook-inside items-center justify-center  flex flex-col ">
                <div className="w-[100%] my-6 ">
                    <div className="w-[90%] flex items-center justify-between">
                        <div
                            className="krug rounded-full flex   items-center justify-center  bg-blue-200 h-[100px] w-[350px] bg-blue-500">
                            <input type="text" placeholder="жазуу"
                                   className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl"/>
                        </div>
                        <div
                            className="krug rounded-full flex   items-center justify-center  bg-blue-200 h-[100px] w-[350px] bg-blue-500">
                            <input type="text" placeholder="жазуу"
                                   className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl"/>
                        </div>
                    </div>

                    <div
                        className="rounded-full flex   items-center justify-center  bg-blue-200 h-[210px] w-[210px] bg-blue-500">
                        <p className=" text-white text-center text-2xl"> Калктын жыштыгы жогору</p>
                    </div>
                    <div
                        className="krug rounded-full flex mt-5   items-center justify-center  bg-blue-200 h-[100px] w-[350px] bg-blue-500">
                        <input type="text" placeholder="жазуу"
                               className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl"/>
                    </div>


                </div>
                <h4>
                    7-тапшырма. Схема боюнча шаарларды бөлүп, аттарын жазып чыккыла.
                </h4>
                <div className="w-full">
                    <div className="w-[100%] flex items-center justify-between">
                            <div className=" w-[15%] mt-[60px] ">
                                <p className="transform rotate-90 text-center w-[30px]  bg-blue-200 text-lg text-white">туурасынан</p>

                            </div>
                        <input type="text" placeholder="жазуу"
                               className="w-[30%] h-[70px] text-w border-black border-solid bottom-2 bg-gray-500 text-xl pl-2"/>
                        <div className="w-[65%] h-[70px] text-center  border-black border-2 border-solid  ">
                            <input type="text" className="w-[90%]  h-[80%] ml-1" placeholder="жазуу"/>
                            <hr className="bg-black  ml-3 text-black h-0.5 w-[90%]"/>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Notebook7;
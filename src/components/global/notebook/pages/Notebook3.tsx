import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    writing: string;
}

const Notebook3: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Аянты', writing: '' },
        { id: 2, name: 'Башкаруу формасы', writing: '' },
        { id: 3, name: 'Мамлекеттик түзүлүшү', writing: '' },
        { id: 4, name: 'Мамлекеттик ыйык белгилери', writing: '' },
        { id: 5, name: 'Мамлекеттик сыйлыктары', writing: '' },
        { id: 6, name: 'Мыйзам чыгаруучу органы', writing: '' },
        { id: 7, name: 'Аткаруучу органы', writing: '' },
        { id: 8, name: 'Аткаруучу органы', writing: '' },
        { id: 9, name: 'Аткаруучу органы', writing: '' },
        { id: 10, name: 'Аткаруучу органы', writing: '' },


    ]);
    const [table, setTable] = useState<Product[]>([

        { id: 1, name: 'Аткаруучу органы', writing: '' },
        { id: 2, name: 'Аткаруучу органы', writing: '' },
        { id: 3, name: 'Аткаруучу органы', writing: '' },
])
    const handleTablesChange=(id:number,value:string)=>{
        setTable((prevTables)=>
            prevTables.map((el)=>
            el.id===id?{...el,writing:value}:el
            )
        )
    }

    const handleWritingChange = (id: number, value: string) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, writing: value } : product
            )
        );
    };

    return (
        <div className="notebook">
            <div className="notebook-inside">
                <h1>1.2. Кыргыз Республикасынын мамлекеттик түзүлүшү, административдик-аймактык бөлүнүшү</h1>
                <h4>1-тапшырма. Кыргыз Республикасына мүнөздөмө бергиле.</h4>
                <table className="border-black border-2 w-full">
                    <tbody >
                    {products.map((product) => (
                        <tr key={product.id} className="border-black border-2">
                            <td className="border-black border-2 p-2">{product.name}</td>
                            <td className="border-black border-2 p-2">
                  <input
                      value={product.writing}
                      onChange={(e) => handleWritingChange(product.id, e.target.value)}
                      className="w-full"
                  />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <h4 className="my-6">2-тапшырма. Венндин диаграммасын толтургула.</h4>
                <table className="w-full">
                    <tbody >
                    {
                        table.map((el)=>(
                            <td>
                                <tr className="border-black border-2 p-2 w-[70%]"> {el.name}</tr>
                                <td className="border-black border-2 w-[70%] text-xl p-2">
                                    <textarea value={el.writing}
                                           onChange={(e) => handleTablesChange(el.id, e.target.value)}
                                           className="w-full"/> </td>
                            </td>
                        ))
                    }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Notebook3;




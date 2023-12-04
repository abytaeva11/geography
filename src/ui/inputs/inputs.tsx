import React, {useState} from 'react';
interface Product {
    id: number;
    name: string;
    writing: string;
}
const Inputs = () => {
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


    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Товар 1', writing: '' },
        { id: 2, name: 'Товар 2', writing: '' },
        // Добавьте другие товары по необходимости
    ]);

    const handleWritingChange = (id: number, value: string) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, writing: value } : product
            )
        );
    };
    return (
        <div>
            <div className="text-area">
                      <textarea className="w-full h-[200px]  text-xl p-2"
                                placeholder="Жазып баштаныз..."></textarea>


{/*tables*/}

                <table className="border-black border-2 w-full">
                    <thead>
                    <tr className="border-black">
                        <th className="border-black border-2 p-2">Список товаров</th>
                        <th className="border-black border-2 p-2">Место для написания</th>
                    </tr>
                    </thead>
                    <tbody>
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

{/*-----------------------------------*/}
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

export default Inputs;
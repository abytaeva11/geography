import React from 'react';
import "../notebook/notebook.scss"
import Notebook1 from "src/components/global/notebook/pages/Notebook1";

const Notebook = () => {
    return (
        <div className="notebook">
            <div className="notebook-inside">
                <Notebook1 />
            </div>
        </div>
    );
};

export default Notebook;

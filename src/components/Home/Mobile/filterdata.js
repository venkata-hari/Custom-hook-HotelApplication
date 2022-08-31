import React from 'react';

function Filterdata({filter}) {
    return (
        <div>
            {filter.map(x=>
                <div key={x.id} className="border border-dark">
                    <p>{x.item}</p>
                    <p>{x.price}</p>
                    <button>Add</button>
                </div>
                )}
        </div>
    );
}

export default Filterdata;
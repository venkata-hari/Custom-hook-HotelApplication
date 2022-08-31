import React from 'react';

function Serachdata({product,Inc1}) {
    return (
        <div>
            {product.map(x=>
   
              
               
                  <div className="card text-center my-1" style={{display:x.display}} key={x.id}>
              
               <div className="card-body">
                 <h5 className="card-title">{x.item}</h5>
                 <p className="card-text">{x.price}$</p>
                 <button className="btn btn-dark" onClick={()=>Inc1(x)}>Add</button>
               </div>
               </div>
              

             
                )}
        </div>
    );
}

export default Serachdata;
import React, { Fragment } from 'react';

function Filterdata({filter,Inc}) {
    return (
        <Fragment>
            {filter.map(x=>
                
<div className="card text-center my-1" style={{width: '100%'}}>
  <div className="card-body">
    <h5 className="card-title">{x.item}</h5>
    <p className="card-text">{x.price}$</p>
    <button className="btn btn-dark" onClick={()=>Inc(x)}>Add</button>
  </div>
</div>
                )}
            
        </Fragment>
    );
}

export default Filterdata;
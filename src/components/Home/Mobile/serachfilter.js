import React from 'react';

function serachfilter({searchformSubmit,Order,searchSubmit}) {
    return (
        <div>
             <form onSubmit={searchformSubmit}>
            <input type='text' placeholder='enter new item' name="item" required='required' onChange={searchSubmit}/>
            <input type='number' placeholder='enter price' name="price" required='required' onChange={searchSubmit}/>
            <button type="submit">Add</button>
            </form>
            <div>
                {Order.map(x=>
                    <div key={x.id}>
                        <p>{x.item}</p>
                        <p>{x.price}</p>
                    </div>
                    )}
            </div>
            
        </div>
    );
}

export default serachfilter;

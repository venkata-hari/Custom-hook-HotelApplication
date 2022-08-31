import React, { Fragment } from 'react';

function filterdataolp({data,Dec,Inc}) {
    return (
        <>
            {data.map(x=>
                    <tbody key={x.id}>
                    {x.value?(
                    <tr>
                    <td>{x.item}</td>
                     <td>

                      <button className="btn btn-dark" onClick={()=>Dec(x)}>-</button>  
                      <span className='my-1 mx-4'>{x.qut}</span>
                      <button className="btn btn-dark" onClick={()=>Inc(x)}>+</button>
                        
                    </td>
                     <td>{x.count} $</td>
                     </tr>):(<div></div>)}
                    </tbody>
                    )
            }
            
        </>
    );
}

export default filterdataolp;
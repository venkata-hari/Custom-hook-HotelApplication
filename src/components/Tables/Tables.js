import React,{Fragment} from 'react';
import './tables.scss'
function Tables({Table,tableHandle,tableinputSubmit,tableformSubmit}) {
    return (
        <> 
        <nav className="navbar navbar-light bg-light justify-content-around">
  <h5 className="navbar-brand">Venkata Hari</h5>
  <form className="d-flex" onSubmit={tableformSubmit}>
    <input className="form-control mr-sm-2 w-100" type="text" onChange={tableinputSubmit} name="Table" placeholder="Add New Table" aria-label="Search"/>
    <button className="btn btn-outline-success" id="btn" type="submit">Add</button>
  </form>
</nav>
        <div className='table'>
            {Table.map(x=>
 
                <div key={x.id}>
                    <button className='btn btn-dark' id="table-btn" onClick={()=>tableHandle(x)}>
            
                      <h4>{x.Table}</h4>
                        
                    </button>
                
        </div>)}
        </div>
      </>  
    );
}

export default Tables;
import React from 'react';
import './sass/navbar.scss'
import {Link} from 'react-router-dom'
function NavBar({handleorder,item,Tables,backTables}) {
  
 
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
        <div>
               
        {Tables.map(x=>
               <div key={x.id}>
                   {x.value?(<div  className='d-flex'>
                   
                    <i className="fa fa-arrow-left me-3 ms-2 text-danger" style={{fontSize:"25px"}} onClick={()=>backTables(x)}></i>
                    <Link to='/'><h4><b>{x.Table}</b></h4> </Link>
                    <Link to='/ADDNEWORDER'> <button className='btn btn-danger ms-3 p-1 text-uppercase' onClick={()=>handleorder()}>New Order</button></Link> 
                   </div>):(<></>)}
               </div>
                )}
         </div>       
        <div>  
     
        </div>
        <div>
    <Link to='/ICONFOOD' style={{textDecoration:'none',color:'black',textTransform:"uppercase"}} className='me-3'><button className='btn btn-dark btn-sm rounded-circle py-0 me-2'>{item}</button><i class="fa fa-cutlery"></i>icon-food</Link>
    <button className="btn btn-outline-danger my-2 my-sm-0 me-3" ><i className='fa fa-phone me-2'></i>8247329502</button>
</div>      
</nav>

    );
}

export default NavBar;
import React from 'react';
import NavBar from './NavBar/NavBar';
import useForm from './Routes/route'
import Neworder from './neworder/neworder';
import ICONFOOD from './neworder/IconFood';
import Home from './Home/home'
import Tabel from './Tables/Tables'
import{Routes,Route} from 'react-router-dom'
function Main() {
    const{handleorder,
        backTables,
        order,
        toggleform,
        inputSubmit,
        formSubmit,
        item,
        close,
        display,
        Tables,
        tableinputSubmit,
        tableformSubmit,
        tableHandle
    }=useForm()
    
    
    return (
        <div>
            {display?(
            <section>
        <NavBar handleorder={handleorder} item={item} Tables={Tables} backTables={backTables}/>
         
        <Routes>
        <Route path='/ADDNEWORDER' element={<Neworder toggleform={toggleform} inputSubmit={inputSubmit} formSubmit={formSubmit}/>}/>
            <Route path='/ICONFOOD' element={<ICONFOOD order={order}  close={close} toggleform={toggleform}/>}/>
            <Route path='/' element={<Home/>}/> 
        </Routes>
            </section>):(
        <section>
        <Tabel Table={Tables} tableHandle={tableHandle} tableinputSubmit={tableinputSubmit} tableformSubmit={tableformSubmit}/>
       </section>)}
        </div>
    );
}

export default Main;
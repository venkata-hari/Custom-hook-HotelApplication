import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Homefilter from './filter'
import './sass/mobile.scss'


import FiltereData from './filterdata'  
function Mobilehome() {
    const[data,setData]=useState([])
    const[filter,setFilter]=useState(data)
 


    useEffect(()=>{
        async function getData(){
         try{
         const res=await axios.get('./data.json')
         const newIndex=res.data.homedata
         setData(newIndex)

         }
         catch(error){
            console.log(error)
         }
        }getData()
    },[])
    const f1=(e)=>{
     
        const z=data.filter(x=>{
            return x.tag.includes(e)
        })
        setFilter(z)
    }
    
    return (
        <div>
            <div className='mobile'>
            <section>
            <Homefilter f1={f1}/>
           <FiltereData filter={filter}/>
           </section>
           
            </div>
          
        </div>
    );
}

export default Mobilehome;
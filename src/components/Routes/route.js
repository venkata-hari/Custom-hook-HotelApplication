import {useEffect,useState} from 'react';
import {nanoid} from 'nanoid'

import axios from 'axios'
function Route() {
    const[order,setOrder]=useState([])
    const[addOrder,setAddOrder]=useState({
        fullName:'',
        address:"",
        phonenumber:"",
        display:true
    })

  const[display,setDisplay]=useState(false)
  const[Tables,setTables]=useState([])
  const[addTables,setAddTables]=useState({
    Table:""
  })
    const[toggleform,setToggleForm]=useState(false)
  const[item,setItem]=useState(0)
  const value=[{value:false}]

    const handleorder=(e)=>{
        setToggleForm(true)
      } 
    const close=(e)=>{
        setItem(item-1)
      setOrder(order.map(x=>x.id===e.id?{...x,display:true}:x))
    }  
 const inputSubmit=(e)=>{
    e.preventDefault()
    const Name=e.target.getAttribute("name")
    const Value=e.target.value
    const newIndex={...addOrder}
    newIndex[Name]=Value
    setAddOrder(newIndex)
        
}
const formSubmit=(e)=>{
    setToggleForm(true)
    setItem(item+1)
    e.preventDefault()
    const newIndex1={
        id:nanoid(),
        fullName:addOrder.fullName,
        address:addOrder.address,
        phonenumber:addOrder.phonenumber
    }
    const newIndex2=[...order,newIndex1]
    setOrder(newIndex2)
}

    useEffect(()=>{
        async function getOrder(){
         try{
            const res=await axios.get('./data.json')
            setOrder(res.data.orderItems) 
            const newIndex=res.data.Tables
            const newIndex1=newIndex.map(myFun)
            function myFun(e){
                const z={...e,...value[0]}
                return z
            }
            setTables(newIndex1)
            
        }
         catch(error){
            console.log(error)
         }
        }
        getOrder()
    },[])
    const tableHandle=(e)=>{
        setDisplay(true)
        setTables(Tables.map(x=>{
            if(x.id===e.id){
                return{
                    ...x,value:true
                }
            }
            return x
        }))
    }
   
    const backTables=(e)=>{
        setDisplay(false)
        const z=Tables.find(x=>x.id===e.id)
        if(z){
            setTables(Tables.map(x=>x.id===e.id?{...x,value:false}:x))
        }
    }
    const tableinputSubmit=(e)=>{
        e.preventDefault()
        const Name=e.target.getAttribute("name")
        const Value=e.target.value
        const newIndex={...addTables}
        newIndex[Name]=Value
        setAddTables(newIndex)
    }
    const tableformSubmit=(e)=>{
        e.preventDefault()
            const newIndex1={
                id:nanoid(),
                Table:addTables.Table,
            }
           const newIndex2=[...Tables,newIndex1]
           setTables(newIndex2)
        
    }
    return (
        {
        backTables,   
        order,
        toggleform,
        inputSubmit,
        formSubmit,
        handleorder,
        item,
        close,
        display,
        Tables,
        tableHandle,
        tableinputSubmit,
        tableformSubmit
    }
    );
}

export default Route;
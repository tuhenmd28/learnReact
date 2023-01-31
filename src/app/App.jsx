import { useEffect, useState } from "react";
import Formgroup from "../components/shared/formConponets/Formgroup";
import Button from '../components/ui/button/Button';
const int = {name:'',title:'',bio:''};
function App() {
  const [data,setData] = useState({...int});
  const [error,setError] = useState({...int});
  const [focus,setFocus] = useState({name:false,title:false,bio:false});
  const [validation ,setValidation] = useState({...int})
  
  const InputChangeHandel = (e)=>{
    let item = e.target;
    setData(pre=>({
      ...pre,[item.name]:item.value
  }))
  if(item.value){
    setError(pre=>({...pre,[item.name]:''}))
  }else{
    setError(pre=>({...pre,[item.name]:`${(item.name).charAt(0).toUpperCase() + (item.name).slice(1)} is can not be empty`}))
  }
  }
  // useEffect(()=>{
  //   if(terget.value){
  //     setErrors(pre=>({...pre,[terget.name]:''}))
  //   }
  // },[inputData])
//  submit handel function 
  const submitHandel = (e)=>{
    e.preventDefault();
    if(checkValidity(data)){
      console.log("send data");
    }
  }
  // validation chacker function
  const checkValidity = (data)=>{
    let valied = true;
   for(let d in data){
    if(!data[d].length){
      setError(pre=>({
        ...pre,[d]:`${d.charAt(0).toUpperCase() + d.slice(1)} is can not be empty`
      }))
      valied = false;
    }
   }
   return valied;
  }
  //  focus tacker function 
  const focusHandeler = (e)=>{
    setFocus(pre=>({...pre,[e.target.name]:true}))
  }
  const blurHandeler = (e)=>{
    if(focus[e.target.name] && !data[e.target.name]){
      setError(pre=>({
        ...pre,[e.target.name]:`${(e.target.name).charAt(0).toUpperCase() + (e.target.name).slice(1)} is can not be empty`
      }))
    }
  }

  return (
    <>
    <form onSubmit={submitHandel}>
      <Formgroup
       label='Enter Your Name' 
       placeholder='Enter Your Name'
       name='name' 
       error={error.name}
       onchange={InputChangeHandel}
       onfocus = {focusHandeler}
       onblur = {blurHandeler}
       />
     <Formgroup
      label='Enter Your title' 
      placeholder='Enter Your title'
      name='title' 
      error={error.title}
      onchange={InputChangeHandel}
      onfocus = {focusHandeler}
      onblur = {blurHandeler}
      />
     <Formgroup
      label='Enter Your bio' 
      placeholder='Enter Your bio'
      name='bio'
      error={error.bio}
      onchange={InputChangeHandel}
      onfocus = {focusHandeler}
      onblur = {blurHandeler}
      />
      <Button > Submit </Button>

    </form>
    </>
  )
}

export default App;

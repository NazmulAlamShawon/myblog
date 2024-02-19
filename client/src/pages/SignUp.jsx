import {useState} from 'react'
import { Button, Label, TextInput,Alert } from 'flowbite-react';
import {Link} from 'react-router-dom';
export default function SignUp() {
  const [formdata,setFormData]=useState({});
  const [errorMessage,setErrorMessage] = useState([]);
  const [loading,setLoading]=useState(false);
  
  const handleChange = (e)=>{
    
    setFormData({...formdata,[e.target.id]: e.target.value.trim()});
  }
  console.log(formdata);
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!formdata.username||!formdata.email||!formdata.password){
      return setErrorMessage ('please fill out all fields')
    }
    try {
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formdata),
      });
      const data = await res.json();
    } catch (error) {
      
    }
  }
  return (
    <div className="min-h-screen mt-20">
       <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center  gap-5">
        <div className="flex-1">
          <Link to='/' className=" font-bold dark:text-white text-4xl">
    <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 rounded-lg text-white ">Nazmul's</span>
     Blog
    </Link>
    <p className='text-sm mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam assumenda quaerat dolorum molestias libero ut iste consequuntur quibusdam id, accusamus quo magni voluptas eaque incidunt voluptates quae quas dolore ex.</p>
        </div>
        <div className='flex-1'>
           <form className='flex flex-col gap-4 'onSubmit={handleSubmit}>
             <div>
               <Label value='Your username'/>
               <TextInput 
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
               />
             </div>
               <div>
               <Label value='Your email'/>
               <TextInput 
                type='email'
                placeholder='email'
                id='email'
                onChange={handleChange}
               />
             </div>
               <div>
               <Label value='Your password'/>
               <TextInput 
                type='password'
                placeholder='password'
                id='password'
                onChange={handleChange}
               />
             </div>
             <Button gradientDuoTone='purpletopink' type='submit'>
              sign up
             </Button>
           </form>
           <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
          <Link to='/sign-in'>
           Sign in
         </Link>
           </div>
           {
            errorMessage && (
              <Alert className='mt-5 ' color='failure'>
                {errorMessage }
              </Alert>
            )
           }
        </div>

       </div>
    </div>
  )
}
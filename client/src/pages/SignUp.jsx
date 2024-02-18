import { Label, TextInput } from 'flowbite-react';
import {Link} from 'react-router-dom';
export default function SignUp() {
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
           <form className='flex flex-col gap-4 '>
             <div>
               <Label value='Your username'/>
               <TextInput 
                type='text'
                placeholder='Username'
                id='username'
               />
             </div>
               <div>
               <Label value='Your email'/>
               <TextInput 
                type='text'
                placeholder='email'
                id='email'
               />
             </div>
               <div>
               <Label value='Your password'/>
               <TextInput 
                type='text'
                placeholder='password'
                id='password'
               />
             </div>
           </form>
        </div>

       </div>
    </div>
  )
}
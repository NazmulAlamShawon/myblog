import {Footer} from 'flowbite-react'
import {Link} from 'react-router-dom';
export default function FooterCom() {
  return (
    <Footer container className="border border-t8 border-teal-500">
        <div className='w-full max-w-7xl mx-auto'>
           <Link to='/' className="self-center whitespace-nowrap text-lg:text:xl font-semibold dark:text-white">
    <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 rounded-lg text-white ">Nazmul's</span>
     Blog
    </Link>
    </div>
    <div className='grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
      <div>
        <Footer.Title  title='about'></Footer.Title>
         <Footer.LinkGroup col>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel = 'noopener noreferrer'
            >
              100 js projects
            </Footer.Link>
                <Footer.Link
            href='/about'
            target='_blank'
            rel = 'noopener noreferrer'
            >
              About
            </Footer.Link>
         </Footer.LinkGroup>
      </div>
       <div>
        <Footer.Title  title='Follow us'></Footer.Title>
         <Footer.LinkGroup col>
            <Footer.Link
            href='https://github.com/NazmulAlamShawon'
            target='_blank'
            rel = 'noopener noreferrer'
            >
             Github
            </Footer.Link>
                <Footer.Link
            href='/about'
            target='_blank'
            rel = 'noopener noreferrer'
            >
              About
            </Footer.Link>
         </Footer.LinkGroup>
      </div>
       <div>
        <Footer.Title  title='Legal'></Footer.Title>
         <Footer.LinkGroup col>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel = 'noopener noreferrer'
            >
              100 js projects
            </Footer.Link>
                <Footer.Link
            href='/about'
            target='_blank'
            rel = 'noopener noreferrer'
            >
              About
            </Footer.Link>
         </Footer.LinkGroup>
      </div>
       
    </div>
    </Footer>
  )
}
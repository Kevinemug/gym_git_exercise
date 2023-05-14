/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './navigation.css'
import { Link } from 'react-router-dom';
import {BsFillPlayFill} from 'react-icons/bs'
const Navigation = () => {
const [active,setActive]=useState('')
const [dot,setDot]=useState('')
const handleClick= (link)=>{
setActive(link)
handleDot(link)
}
const handleDot= (link)=>{
setDot(link)

}


    return ( <>
    

    <div className='nav-container'>
   


   <div className="links">
    <div className={`link ${active === 'projects' ? "link-active"  : ""}  `  }  onClick={()=>handleClick('projects')}   >
        
        
        <div>Projects</div>
     
        {dot === 'projects'  ? (<div className='dot'></div>) : null}

      
    </div>
    <div className={`link ${active === 'services' ? "link-active"  : ""}  `  }  onClick={()=>handleClick('services')} >
        <div>Services</div>
       
       
        {dot === 'services'  ? (<div className='dot'></div>) : null}

    </div>
    <div className={`link ${active === 'about' ? "link-active"  : ""}  `  }  onClick={()=>handleClick('about')} >
        <div>About Us</div>
        {dot === 'about'  ? (<div className='dot'></div>) : null}

        </div>
    <div className={`link ${active === 'career' ? "link-active"  : ""}  `  }  onClick={()=>handleClick('career')} >
        <div>Careers</div>
        {dot === 'career'  ? (<div className='dot'></div>) : null}

        </div>
    <div className={`link ${active === 'blog' ? "link-active"  : ""}  `  }  onClick={()=>handleClick('blog')} >
        <div>Blog</div>
        {dot === 'blog'  ? (<div className='dot'></div>) : null}

        </div>


   </div>

<div className="info">
    <div className='play'><BsFillPlayFill/></div>
    <div className='btn-container'> Contact</div>
</div>


    </div>
    
    
    
    </> );
}
 
export default Navigation;
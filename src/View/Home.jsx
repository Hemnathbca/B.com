import React from 'react'
import './Home.css'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import{RiFacebookLine ,RiTwitterFill} from 'react-icons/ri'
import {MdAlternateEmail} from 'react-icons/md'
import {TbMessageShare} from 'react-icons/tb'
import { Image } from '../assets/image/assets'
import { SyncLoader } from 'react-spinners';
import { useState,useEffect } from 'react';



const Home = () => {
  const[isloading,setLoading]=useState(true)
 
  const Loader = ()=>{
    return(
      <>
      <div className="loader">
      <div className="loading"><SyncLoader color='white' size={9}/></div>  
      </div>
      </>
    )
  }
  const Main = ()=>{
    return(
      <div className="container-fuild main-container">
      <div className="card">
     
        <div className="container-md">
            <section className='section1 text-dark'>
                <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-5" style={{letterSpacing:'1px',fontFamily: 'Roboto Slab'}}>Dowager Matrimony</div>
                <div className="col-lg-6 col-md-8 col-sm-7 text-end" >
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                  </ul>
               </div>
                </div>
            </section>
           <section className='section2'>
               <div className="row">
               <div className="col-lg-5 col-md-12">
                 <p className='text-md-center text-sm-center'>Welcome to <span style={{color:'hotpink',fontFamily: 'Roboto Slab'}}>Dowager</span><span style={{fontSize:'2.5rem'}}>&#127801;</span></p>
                 <p>Features of Widow Remarriage Act 1856 Validating and legalising the marriage of Hindu widows.Acknowledging the rights and inheritance of remarried widow as those when she married the first timeForfeited the rights, obligations and inheritances from the previous marriage to be obtained from the deceased husband.</p>
                 <div className='btn btn-block btn-lg mt-5 mb-5 '>Pick the person</div>
               </div>
               <div className="col-lg-7 col-md-12 text-sm-center image-slider mb-5 mt-3">
                 <div className="image-slider-option text-sm-center text-md-center">
                   {
                     Image.map((value)=>{
                       return (
                        <img src={value.marriage} className='img-fluid img-thumbnail' alt="" />
                       )
                     })
                    }
               </div>
               </div>
              </div>
           </section>
           <section className='section3'>
          <div className="row social-media">
            <div className="col-12"><RiFacebookLine className='mx-4' size={25}/><RiTwitterFill  size={25}/><MdAlternateEmail className='mx-4'size={25} color='hotpink'/></div>
             {/* <div className="col-6 text-end "><TbMessageShare size={28} color='hotpink'/></div> */}
           </div>
           </section>
           <section className='section4'>
        
             <div className='message'><TbMessageShare size={28} color='hotpink'/></div>
        
           </section>
           
        </div>
       </div>
     </div>
    )
  }
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[isloading])
  return (
   <>
  {isloading?<Loader/>:<Main/>}
   </>
  )
}

export default Home

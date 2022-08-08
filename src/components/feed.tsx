import user1 from '../images/user1.jpg'
import user3 from '../images/user3.jpg'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import feed1 from '../images/feed1.jpg'
import feed2 from '../images/feed2.jpg'
import { useState, useRef } from 'react'
import React from 'react'


export default function Feed(){
   
    const [like, setLike] = useState(false)
    const [like1, setLike1] = useState(false)
   

   
  
    return <div className='flex justify-center flex-col items-center'>
        <div >
        <div className='flex justify-between items-center mt-5 bg-[#FFFFFF] md:border border-gray-300 rounded rounded-b-none'>
            <div className='flex ml-4 h-[60px] items-center lg:w-[566px] lg:ml-0'>
            <span className="border-2 rounded-full border-pink-600 ml-2">
                <img src={user1} alt="" className='rounded-full h-[32px] w-[32px] border object-cover border-white' />
                </span>
                <p className='text-sm ml-3 text-center'>user</p>
            </div>
        <button className='mr-4'><FontAwesomeIcon icon={faEllipsis}/></button>
        
        </div>
        <img className='h-[516px] w-[414px] lg:w-[614px]  lg:h-[755px]' src={feed1} alt="" />
        <div className='text-gray-400 text-[10px] md:border border-gray-300 rounded-b rounded-t-none'>
        <div  className='flex justify-between '>
        <span className='text-black'>
        <button  onClick={()=>{setLike(true)}} className={like ? 'hidden' : ''}><FontAwesomeIcon id='a' className='m-2 h-[24px] w-[24px] mt-3 ' icon={faHeart}/></button>
        <button onClick={()=>{setLike(false)}} className={like ? '' : 'hidden'}><FontAwesomeIcon className='m-2 h-[24px] w-[24px] mt-3 text-red-500' icon={solidHeart}/></button>
        <FontAwesomeIcon className='m-2 h-[24px] w-[24px] mt-3' icon={faComment}/>
        <FontAwesomeIcon className='m-2 h-[24px] w-[24px] mt-3' icon={faPaperPlane}/>
        </span>
        <FontAwesomeIcon className='m-2 h-[24px] text-black w-[24px] mt-3' icon={faBookmark}/>
        </div>
        <p className='text-sm ml-3'>3 curtidas</p>
        <p className='text-sm ml-3'>user *-*</p>
        <p className=' ml-3'>HÁ 2 DIAS</p>
        </div></div>

        <div >
        <div className='flex justify-between items-center mt-5 bg-[#FFFFFF] md:border border-gray-300 rounded rounded-b-none'>
            <div className='flex ml-4 h-[60px] items-center lg:w-[566px] lg:ml-0'>
            <span className="border-2 rounded-full border-pink-600 ml-2">
                <img src={user3} alt="" className='rounded-full h-[32px] w-[32px] border object-cover border-white ' />
                </span>
                <p className='text-sm ml-3 text-center'>user</p>
            </div>
        <button className='mr-4'><FontAwesomeIcon icon={faEllipsis}/></button> 
        
        </div>
        <img className='h-[516px] w-[414px] lg:w-[614px]  lg:h-[755px]' src={feed2} alt="" />
        <div className='text-gray-400 text-[10px] md:border border-gray-300 rounded-b rounded-t-none'>
        <div  className='flex justify-between '>
        <span className='text-black'>
        <button  onClick={()=>{setLike1(true)}} className={like1 ? 'hidden' : ''}><FontAwesomeIcon id='a' className='m-2 h-[24px] w-[24px] mt-3 ' icon={faHeart}/></button>
        <button onClick={()=>{setLike1(false)}} className={like1 ? '' : 'hidden'}><FontAwesomeIcon className='m-2 h-[24px] w-[24px] mt-3 text-red-500' icon={solidHeart}/></button>
        <FontAwesomeIcon className='m-2 h-[24px] w-[24px] mt-3' icon={faComment}/>
        <FontAwesomeIcon className='m-2 h-[24px] w-[24px] mt-3' icon={faPaperPlane}/>
        </span>
        <FontAwesomeIcon className='m-2 h-[24px] text-black w-[24px] mt-3' icon={faBookmark}/>
        </div>
        <p className='text-sm ml-3'>3 curtidas</p>
        <p className='text-sm ml-3'>user *-*</p>
        <p className=' ml-3'>HÁ 2 DIAS</p>
        </div></div>
    </div>
}
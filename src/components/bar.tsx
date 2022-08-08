import React from 'react';
import logo from "../images/insta.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faPlus, faCompass, faHeart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
export default function Bar(){
    return <div className='h-16 w-30 flex flex-row justify-between border-b-1 border-black items-center border-b-gray-300 border-b ml-2 mr-2 sm:justify-evenly' >
        <a className='w-32'><img src={logo} alt="" /></a>
        <input type="text" className='h-8 w-60 rounded text-black bg-[#EFEFEF] hidden sm:block' placeholder="   Pesquisar"/>
        <div className='flex align-center '>
        <FontAwesomeIcon icon={faHouse} className='w-6 h-6 ml-2 mr-2 cursor-pointer hidden sm:flex'/>
        <FontAwesomeIcon icon={faFacebookMessenger} className='md:w-6 h-6 ml-2 mr-2 cursor-pointer hidden sm:block' />
        <FontAwesomeIcon icon={faPlus} className='w-6 h-6 ml-2 mr-2 cursor-pointer hidden sm:block'/>
        <FontAwesomeIcon icon={faCompass} className='w-6 h-6 ml-2 mr-2 cursor-pointer hidden sm:block'/>
        <FontAwesomeIcon icon={faHeart} className='w-6 h-6 ml-2 mr-2 cursor-pointer'/>
        </div>
    </div>
}
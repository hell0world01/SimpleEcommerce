import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div>
                <a href="#">Logo</a>
            </div>
            <div className='flex flex-col'>
                <p>Stay in Touch</p>
                <div className='flex'>
                <input type="email" className='py-1 px-2' placeholder='Enter your email' />
                <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex justify-around flex-col my-5 md:flex-row'>
            <div className='my-4'>
                <p>Kathmandu,Nepal</p>
                <p>+977 985649852</p>
                <p>customercare@himalayavogue.com</p>
                <div className='flex'>
                    <FaFacebook className='mx-2 text-xl'/>
                    <FaInstagram className='text-xl'/>
                </div>
            </div>
            <div className='my-4'>
                <p>Quick Links</p>
                <p><a href="#">Men's Collection</a></p>
                <p><a href="#">Women's Collection</a></p>
                <p><a href="#">Kid's Collection</a></p>
            </div>
            <div className='my-4'>
                <p><a href="#">Privacy Policy</a></p>
                <p><a href="#">Exchange and Refund</a></p>
                <p><a href="#">Terms and Conditions</a></p>
            </div>
        </div>
        <hr />
        <div className='flex justify-center my-2'>
            COPYRIGHT &copy; 2025 HimalayanVogue | All Rights Reserved
        </div>
    </div>
  )
}

export default Footer
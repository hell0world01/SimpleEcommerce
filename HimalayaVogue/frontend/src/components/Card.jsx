// import { data } from '../assets/assets'
// import React from 'react'
// import {Swiper, SwiperSlide} from "swiper/react";
// import {Link} from "react-router-dom";
// import "swiper/css"
// import "swiper/css/pagination"
// import "swiper/css/free-mode"

// import { FreeMode, Pagination, Navigation } from 'swiper/modules';
// const Card = ({id, image, name, price}) => {
//   return (
//     <div>
//         <Swiper
//             breakpoints={{
//                 546: {
//                     slidesPerView:2,
//                     spaceBetween: 15
//                 },
//                 835: {
//                     slidesPerView: 4,
//                     spaceBetween: 15
//                 }
//             }}
//             freeMode= {true}
//             pagination={{
//                 clickable: true
//             }}
//             modules={{FreeMode, Pagination, Navigation}}
//             className='max-w-[90%] lg:max-w-[80%]'
//         >
//         <div>
//         <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
//             {
//                 data.map( ({id, image, productName, brand, price}) => (
                    
//                     <SwiperSlide key={id}>
//                         <Link>
//                         </Link>
//                         <div className='hover:shadow-xl'>
//                             <div className='h-64'>
//                                 <img src={image} alt="" className='w-full h-full object-contain'/>
//                             </div>
//                             <div className='mt-5'>
//                                 <p>{productName}</p>
//                                 <p>{brand}</p>
//                                 <p>{price}</p>
//                                 <button className='bg-blue-400 w-full py-3 text-white'>Add to cart</button>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ) 
//                 )
//             }
//         </Swiper>
//         </div>
//         </Swiper>
//     </div>
//   )
// }

// export default Card
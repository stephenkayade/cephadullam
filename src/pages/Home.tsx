import React from 'react'
import Navbar from '../components/partials/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'

const Home = () => {
    return (
        <>
            <Navbar />

            <main className="pb-20">

                <section className='bg-cp-milk h-[80svh]'>

                    <Swiper
                        navigation
                        spaceBetween={-60}
                        slidesPerView={1}
                        className='h-full'
                        modules={[Navigation, Pagination]}
                    >

                        <SwiperSlide className='h-full'>

                            <div className='h-full w-[95%] bg-gradient-to-r from-cp-bright/20 to-cp-blue/5'>

                                <img src="../../../images/home-banner-1.jpg" alt="" />

                            </div>

                        </SwiperSlide>

                        <SwiperSlide className='h-full'>

                            <div className='h-full w-[95%] bg-gradient-to-r from-cp-bright/20 to-cp-blue/5'>

                                <img src="../../../images/home-banner-2.jpg" alt="" />

                            </div>

                        </SwiperSlide>

                        <SwiperSlide className='h-full'>

                            <div className='h-full w-full  bg-gradient-to-r from-cp-bright/20 to-cp-blue/5'>

                                <img src="../../../images/home-banner-3.jpg" alt="" />

                            </div>

                        </SwiperSlide>

                    </Swiper>

                </section>

                <section className='bg-cp-milk h-[80svh]'>

                    <div className="grid gap-4 grid-cols-2 items-center h-full px-6">

                        <div className='bg-cp-bright h-[450px]'>

                            <div className="h-100px"></div>
                            <div className="h-100px"></div>

                        </div>

                        <div className='bg-cp-bright h-[450px]'>

                        </div>

                    </div>

                </section>

            </main>
            
        </>
    )
}

export default Home
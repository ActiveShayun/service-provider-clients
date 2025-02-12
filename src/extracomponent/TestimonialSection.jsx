import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';
import SectionTitle from '../Shered/SectionTitle';
import AxiosSecure from '../usehooks/AxiosSecure';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';


const TestimonialSection = () => {
    const axiosSecure = AxiosSecure()
    const [reviews, setReview] = useState([])

    useEffect(() => {
        allReview()
    }, [])

    const allReview = async () => {
        const { data } = await axiosSecure.get('/all-review')
        console.log('review', data);
        setReview(data)
    }

    return (
        <div className='lg:w-[500px] h-[500px] mx-auto mt-16 pb-16 px-4'>
            <div className='mb-10'>
                <SectionTitle heading={'Testimonial'} />
            </div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {
                    reviews?.map(review => <SwiperSlide>
                        <div className=' flex justify-center items-center mx-auto p-6'>
                            <div className=''>
                                <h2 className='text-2xl font-semibold text-center mb-3'>{review?.title}</h2>
                                <p className='text-sm text-center'>{review.review}</p>
                                <div className='w-[100px] h-[100px] rounded-full mx-auto mt-3'>
                                    <img
                                        src={review?.reviewUserPhoto}
                                        className='w-full mx-auto rounded-full'
                                        alt="" />
                                </div>
                                <div className='mx-auto w-full mt-3 pl-8'>
                                    <Rating
                                        value={review.ratings}
                                        readOnly
                                        items={10}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default TestimonialSection;
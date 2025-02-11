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
        <div className='lg:w-[500px] h-[400px] mx-auto mt-16 pb-16 px-4'>
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
                        <div className='lg:w-[400px] h-[300px] flex items-center justify-center'>
                            <div className=''>
                                <h2 className='text-2xl font-semibold text-center mb-3'>{review?.title}</h2>
                                <p className='text-sm'>{review.review}</p>
                                <img
                                    src={review?.reviewUserPhoto}
                                    className='max-w-[100px] h-[100px] rounded-full mx-auto mt-3'
                                    alt="" />
                                <div className='mx-auto w-full mt-3 pl-8'>
                                    <Rating
                                        style={{ maxWidth: 480 }}
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
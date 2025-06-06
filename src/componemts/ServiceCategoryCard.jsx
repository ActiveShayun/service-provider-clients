import { Link } from "react-router-dom";


const ServiceCategoryCard = ({ item }) => {
    const { _id,  title, description, category, priceRange, buyerInfo } = item
    //  console.log('service card',service);
    console.log('price', priceRange);
    return (
        <div>
            <div className='h-[250px] w-[300px] mx-auto relative border border-gray-300 rounded-md shadow-lg overflow-hidden'>
                {/* Background Image */}
                <div className='absolute inset-0 z-10'>
                    <img
                        src={buyerInfo?.photo}
                        alt=""
                        className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70'></div>
                </div>

                {/* Card Content */}
                <div className='absolute inset-0 z-20 flex flex-col justify-end p-4 text-white'>
                    <h2 className='text-lg font-bold truncate'>{title}</h2>
                    <p className='text-sm font-light'>{category}</p>
                    <p className='text-sm truncate'>{description?.substring(0, 70)}...</p>
                    <p className='text-sm font-medium mb-2'>
                        Price Range: {priceRange?.min_price} - {priceRange?.max_price} $
                    </p>
                    <Link
                        to={`/serviceDetails/${_id}`}
                        className='block text-center bg-gradient-to-tr from-blue-500 to-yellow-400 text-gray-800 py-2 px-4 rounded-md font-semibold hover:shadow-lg transition-all duration-300'>
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategoryCard;
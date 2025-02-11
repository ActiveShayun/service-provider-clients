import ServiceCategoryCard from "./ServiceCategoryCard";

const ServiceCategory = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                {
                    items.map(item => <ServiceCategoryCard item={item} key={item._id} />)
                }
            </div>
        </div>
    );
};

export default ServiceCategory;
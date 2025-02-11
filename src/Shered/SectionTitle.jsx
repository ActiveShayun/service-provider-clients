
const SectionTitle = ({ heading }) => {
    return (
        <div>
            <h2 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="text-4xl font-bold text-center">{heading}</h2>
        </div>
    );
};

export default SectionTitle;
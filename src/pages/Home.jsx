import { Helmet } from "react-helmet-async";
import AllService from "../componemts/AllService";
import Banner from "../componemts/Banner";
import Clients from "../extracomponent/Clients";
import Latest from "../extracomponent/Latest";
import MeetOurTeam from "../extracomponent/MeetOurTeam";
import TestimonialSection from "../extracomponent/TestimonialSection";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner />
            <AllService />
            <MeetOurTeam />
            <Latest />
            <Clients />
            <TestimonialSection />
        </div>
    );
};

export default Home;
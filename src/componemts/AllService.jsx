import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// ..
AOS.init();
import { useEffect, useState } from "react";
import AxiosSecure from "../usehooks/AxiosSecure";
import SectionTitle from "../Shered/SectionTitle";
import ServiceCategory from "./ServiceCategory";

const AllService = () => {
    const [services, setService] = useState([])
    const [search, setSearch] = useState('')
    const useAxios = AxiosSecure()
    const cleanings = services?.filter(electrician => electrician?.category === 'cleaning')
    const electricians = services?.filter(electrician => electrician?.category === 'electrician')
    const carWash = services?.filter(electrician => electrician?.category === 'Car Wash')
    const digitalMarketing = services?.filter(electrician => electrician?.category === 'Digital Marketing')
    const graphicsDesign = services?.filter(electrician => electrician?.category === 'Graphics Design')
    const webDevelopment = services?.filter(electrician => electrician?.category === 'Web Development')


    useEffect(() => {
        fetchAllService()
    }, [search])

    const fetchAllService = async () => {
        try {
            const { data } = await useAxios.get(`/home-service`, {
                params: { search }
            });
            setService(data);
            //  console.log(data)
            //  console.error('Response error:', error.response.data);
        }
        catch (err) {
            console.log(err);
        }

    };



    console.log(services)

    return (
        <div className="mt-16">
            <div className="text-center md:w-4/5 mx-auto space-y-3 mb-5">
                <SectionTitle heading={'Service Category'} />
            </div>
            {/* <div className="mb-5">
                <label className="input md:w-2/5 mx-auto input-bordered flex items-center gap-2">
                    <input type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="grow"
                        placeholder="Search service" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div> */}

            <div className="flex justify-center">
                <Tabs>
                    <TabList>
                        <Tab>Electric</Tab>
                        <Tab>Cleaning</Tab>
                        <Tab>Wev Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Car Wash</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <ServiceCategory items={electricians} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <ServiceCategory items={cleanings} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <ServiceCategory items={webDevelopment} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <ServiceCategory items={graphicsDesign} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <ServiceCategory items={carWash} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <ServiceCategory items={digitalMarketing} />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default AllService;
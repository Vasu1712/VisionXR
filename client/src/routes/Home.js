import walmartLogo from '../assets/images/Walmart.png';
import logoBig from '../assets/images/logoBig.png';
import Name from '../assets/images/Name.png';
import VisionXR_Logo from '../assets/images/VisionXR_Logo.png';
import Sparkthon from '../assets/images/Sparkthon.png';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className="w-full h-full bg-royalblue flex flex-col md:flex-row">
            {/* left side */}
            <div className='bg-gradient-to-b from-lightblue to-deepblue w-full md:w-[46%] md:flex md:flex-col md:justify-center'>
                <div className='m-4 md:m-10 w-1/3'>
                    <Link to="">
                        <img src={walmartLogo} alt='logo' />
                    </Link>
                </div>
                <div className='mt-4 md:ml-12 md:mt-64 w-full md:w-1/4 flex justify-center items-center'>
                    <img src={logoBig} alt='logo' />
                </div>
            </div>
            {/* right side */}
            <div className='w-full md:w-[54%] p-4 md:p-8'>
                <div className='mt-4 md:m-10 flex flex-row-reverse w-1/2'>
                    <Link to="">
                        <img src={VisionXR_Logo} alt='logo' />
                    </Link>
                </div>
                <div className='mt-4 md:ml-16 md:mt-32 w-1/2'>
                    <img src={Sparkthon} alt='logo' />
                </div>
                <div className='mt-4 md:ml-16 md:mt-24 text-white font-extrabold text-4xl md:text-8xl tracking-wide font-sans'>
                    Team ApeXR
                </div>
                <div className='mt-2 md:ml-20 md:mt-12 text-gray-300 italic text-base md:text-2xl tracking-wide'>
                    Explore a Whole New World of opportunities with
                </div>
                <div className='mt-4 md:ml-20 md:mt-24 w-full'>
                    <img src={Name} alt='logo' />
                </div>
                <div className='mt-6 flex justify-center'>
                    <Link to="/formpage">
                        <div className='px-4 md:px-6 py-2 text-white font-medium text-base md:text-xl border-2 border-white rounded-2xl flex drop-shadow-lg hover:bg-blue-600'>
                            Get Started with 3D!
                            <Icon icon="eva:arrow-right-fill" color="white" className='ml-2 md:ml-4 mt-1' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

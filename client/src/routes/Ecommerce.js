import Logo_black from '../assets/images/Logo_black.png';
import VisionXR_Logo from '../assets/images/VisionXR_Logo.png';
import Drone from '../assets/images/drone.jpg';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Ecommerce = () => {

    const handleFormSubmit = () => {
        // Handle form submission logic here
        
        // Display a success alert
        alert('Loading AR Content...');
    };

    return (
        <div className="w-full h-full p-4 bg-gradient-to-b from-lightblue to-deepblue">
                <div className='ml-2 mt-4 font-mid flex justify-between'>
                    <img src={Logo_black} alt="logo" />
                <label className="relative block w-1/6 mr-28">
                        <span className="absolute ml-10 mt-2 text-xl flex items-center pl-2 ">
                        <Icon icon="teenyicons:search-outline" color="white" />
                        </span>
                        <input
                            className="placeholder-italic placeholder-white ml-8 placeholder-text-xl block bg-inherit w-full border border-white rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="   Search for any product..."
                            type="text"
                            name="search"
                        />
                    </label>
                    </div>
                <div className="mt-10 flex justify-center font-black text-6xl text-white tracking-wide	">
                    ShopXR
                </div>
            <div className='w-full ml-8 flex flex-row'>
                {/* left side */}
                <div className='w-1/2'>
                    <div className='mt-28 ml-20 w-2/3'>
                        <img src={Drone} alt="logoBig" className="rounded-xl"/>
                    </div>
                </div>
                {/* right side */}
                <div className=' w-1/2 flex flex-col'>
                    <div className='mt-10 w-5/6'>  
                    <div className='mt-16 font-black text-5xl text-yelloe'>BIR - The Experience Drone</div>
                    <ul> 
                    <li className='mt-16 font-light text-xl italic text-zinc-300'> Use BIR to learn the ins and outs of drone flying</li>
                    <li className='mt-4 font-light text-xl italic text-zinc-300'> A safe, stable and small drone</li>
                    <li className='mt-4 font-light text-xl italic text-zinc-300'> This micro drone is specifically designed for educational and learning purposes, making it the perfect choice for those who are new to the world of drones</li>
                    </ul>
                    </div>
                    <div className='mt-10'>
                        <h3 className="font-medium text-2xl text-white">More Information</h3>
                        <div className='mt-8 ml-2 font-thin text-xl text-zinc-300'>
                              <li><span className="font-semibold">Weight</span>: <span className="italic ml-20">500g</span></li>
                              <li><span className="font-semibold">Dimensions</span>: <span className="italic ml-8">20 × 18 × 6 cm</span></li>
                              <li><span className="font-semibold">Battery</span>: <span className="italic ml-20">5000 mAh</span></li>
                              <li><span className="font-semibold">Warranty</span>: <span className="italic ml-16">24 months</span></li>
                        </div>    
                    </div>
                    <div className='mt-10'>
                        <Link
                            to='/submit'
                            onClick={handleFormSubmit}
                            className='text-white w-60 mt-8 bg-gradient-to-r from-blue1 to-blue2 hover:border border-white w-2/3 flex items-center justify-center py-4 rounded-xl text-xl font-bold'>
                            <div className="flex">Buy Product
                            <Icon icon="icons8:buy" color="white" className='ml-4' width="30" height="30"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>    
        </div>
    )
};

export default Ecommerce;


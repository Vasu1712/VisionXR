import Logo_black from '../assets/images/Logo_black.png';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Drone3D from '../components/Drone';

const Ecommerce = () => {

    const handleFormSubmit = () => {
        // Handle form submission logic here
        
        // Display a success alert
        alert('Loading AR Content...');
    };

    return (
        <div className="w-full h-full p-4 bg-gradient-to-b from-lightblue to-deepblue">
                <div className='ml-1 mt-1 font-mid text-zinc-300 sm:flex justify-between'>
                    <img src={Logo_black} alt="logo"  className="w-36 sm:w-1/6 h-1/5"/>
                    <label className="relative block w-3/4 text-sm mt-4 sm:w-1/6 mr-28">
                            <span className="absolute ml-10 mt-2 text-lg flex items-center pl-2 ">
                            <Icon icon="teenyicons:search-outline" color="white" />
                            </span>
                            <input
                                className="placeholder-italic placeholder-white ml-8 placeholder-text-lg block bg-inherit w-full border border-white rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                placeholder="   Search for any product..."
                                type="text"
                                name="search"
                            />
                    </label>
                    </div>
                <div className="mt-6 flex justify-center font-black text-4xl sm:text-6xl text-white tracking-wide	">
                    ShopXR
                </div>
            <div className='w-full sm:h-1/2 ml-4 sm:ml-8 sm:flex flex-row justify-center '>
                {/* left side */}
                <div className='sm:w-1/2 sm:mt-32 sm:h-96 sm:mr-8 sm:px-6 mr-8 h-64 p-4'>
                    {/* <div className='mt-36 ml-20 w-3/4'> */}
                        {/* <img src={Drone} alt="logoBig" className="rounded-xl"/> */}
                        <Drone3D/>
                    {/* </div> */}
                </div>
                {/* right side */}
                <div className=' w-11/12 sm:w-1/2 flex flex-col'>
                    <div className='w-full sm:mt-10 sm:w-5/6'>  
                    <div className='mt-8 font-extrabold text-2xl sm:font-black sm:text-5xl text-yelloe'>BIR - The Experience Drone</div>
                    <ul> 
                    <li className='mt-4 sm:mt-16 sm:font-light sm:text-xl italic text-zinc-300'> Use BIR to learn the ins and outs of drone flying</li>
                    <li className='mt-1 sm:mt-16 sm:font-light sm:text-xl italic text-zinc-300'> A safe, stable and small drone</li>
                    <li className='mt-1 sm:mt-16 sm:font-light sm:text-xl italic text-zinc-300'> This micro drone is specifically designed for educational and learning purposes, making it the perfect choice for those who are new to the world of drones</li>
                    </ul>
                    </div>
                    <div className='mt-2 sm:mt-10'>
                        <h3 className="font-medium text-lg sm:text-2xl text-white">More Information</h3>
                        <div className='m-2 sm:mt-8 sm:ml-2 sm:font-thin sm:text-xl text-zinc-300'>
                              <li><span className="text:xs font-semibold">Weight</span>: <span className="italic ml-20">500g</span></li>
                              <li><span className="font-semibold">Dimensions</span>: <span className="italic ml-10">20 × 18 × 6 cm</span></li>
                              <li><span className="font-semibold">Battery</span>: <span className="italic ml-20">5000 mAh</span></li>
                              <li><span className="font-semibold">Warranty</span>: <span className="italic ml-16">24 months</span></li>
                        </div>    
                    </div>
                    <div className='sm:mt-10'>
                        <Link
                            to='/submit'
                            onClick={handleFormSubmit}
                            className='text-white h-12  sm:w-60 mt-8 bg-gradient-to-r from-blue1 to-blue2 hover:border border-white w-2/3 flex items-center justify-center py-4 rounded-xl text-xl font-light sm:font-bold'>
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


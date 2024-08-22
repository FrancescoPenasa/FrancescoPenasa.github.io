import { Outlet, Link } from "react-router-dom";
import React from 'react';

import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
    return (
        <footer className='w-full bg-slate-100 flex justify-center align-middle space-x-4 '>
            <p>Francesco Penasa © 2024</p> 
            
            {/* <p>View the code on GitHub.</p> */}
            <Link key={uuidv4()} className="text-xl font-base" to={"/cookies"}>Privacy Policy</Link>
        </footer>
    );
};

export default Footer;

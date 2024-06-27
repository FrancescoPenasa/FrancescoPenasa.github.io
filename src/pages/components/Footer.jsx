import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full bg-slate-100 flex justify-center align-middle space-x-4 '>
            <p>Francesco Penasa © 2024</p> 
            
            {/* <p>View the code on GitHub.</p> */}
            <a href='/cookies'> <p>Privacy Policy</p></a>
        </footer>
    );
};

export default Footer;
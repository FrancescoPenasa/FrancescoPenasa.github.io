import { Outlet, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Nav({ showNavColumn, setshowNavColumn}) {   
    const handleNavColumn = () => {
        setshowNavColumn(!showNavColumn)
    }

    function getPages() {
        return [
            {key:uuidv4(), name: "Home", path: "/" },
            {key:uuidv4(),  name: "About", path: "/about" },
            {key:uuidv4(),  name: "Resume / CV", path: "/resume" },
            {key:uuidv4(),  name: "Projects", path: "/projects" },
            {key:uuidv4(),  name: "Teaching", path: "/teaching" },
            {key:uuidv4(),  name: "Contact", path: "/contact" }
        ]
    }
    
    return <>
    <header>
        <nav className="fixed left-0 top-0 z-20 mx-auto h-[88px] flex w-full items-center border-b-4 border-black bg-white px-5">
            <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">
                {/* nav button */}
                <div className='block lg:hidden'>
                    <div className='sm:w-[92px] md:w-[160px]'>
                        <button 
                            className='flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
                            onClick={handleNavColumn}
                        >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6 m500:h-4 m500:w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                        </button>   
                    </div>
                </div>

                {/* title */}
                <div className="flex items-center pl-5 sm:pl-0">
                    <a href="/"
                        className="text-4xl font-heading m500:text-xl"
                    >
                        Francesco Penasa
                    </a>
                </div>

                {/* pages */}
                <div className='hidden lg:block'> {/* responsive */}
                    <div className=' flex items-center gap-10'>
                        {getPages().map(page => (
                            <Link key={page.key} className="text-xl font-base" to={page.path}>{page.name}</Link>
                        ))}
                    </div>
                </div>


                {/* socials */}
                <div className="flex w-[160px] items-center justify-end gap-5 ">
                    {/*  github */}
                    <a target="_blank" href="https://github.com/FrancescoPenasa" className="flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="h-6 w-6 m500:h-4 m500:w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                        </svg>
                    </a>
                    {/* linkedin */}
                    <a target="_blank" href="https://www.linkedin.com/in/francesco-penasa-920828151/" className="flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>
            </div>
        </nav>
        </header>


        {/* pages columns */}
        {showNavColumn ?   
        <aside className="lg:hidden">
            <div className='fixed left-0 w-[50%] sm:w-[45%] md:w-[40%] bg-slate-50 text-black h-full border-r border-r-gray-900'>
                <ul className='pt-12 uppercase m-5 bg'>
                    {getPages().map(page => (
                        <Link className="text-xl w-full font-base p-1" to={page.path}>
                            <li className='p-3 hover:bg-slate-600 hover:text-white hover:rounded '>
                                {page.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </aside>
        : null}
        </>
}
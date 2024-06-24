import { Link, Outlet } from 'react-router-dom';
import logo from "../imgs/logo.png";
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import translations from '../translations';

const Navbar = () => {

    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    return (
        <>
            <nav className="navbar">

                {/* Logo that redirects to the homepage */}
                <Link to="/" className="flex-none w-10">
                    <img src={logo} className="w-full" alt="Website Logo"/>
                </Link>

                {/* Search bar which can be hidden or shown based on the state */}
                <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto" + (searchBoxVisibility ? " show" : " hide")}>
                    <input 
                        type="text" 
                        placeholder={t.searchPlaceholder} 
                        className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12" 
                    />
                    <i className='fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey'></i>
                </div>

                <div className='flex items-center gap-3 md:gap-6 ml-auto'>

                    {/* Button to toggle search bar visibility on mobile devices */}
                    <button className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center' onClick={() => setSearchBoxVisibility(currentVal => !currentVal)}>
                        <i className='fi fi-rr-search text-2xl'></i>
                    </button>

                    {/* Link to the editor page, visible only on medium and larger screens */}
                    <Link to="/editor" className='hidden md:flex gap-2 link'>
                        <i className='fi fi-rr-file-edit'></i>
                        <p>{t.writeButton}</p>
                    </Link>

                    {/* Link to the sign-in page */}
                    <Link className='btn-dark py-2' to="/signin">
                        {t.signIn}
                    </Link>

                    {/* Link to the sign-up page, visible only on medium and larger screens */}
                    <Link className='btn-light py-2 hidden md:block' to="/signup">
                        {t.signUp}
                    </Link>

                    {/* Button to toggle language between English and Vietnamese */}
                    {/* <button onClick={toggleLanguage} className="py-2">
                        {language === 'en' ? 'Tiếng Việt' : 'English'}
                    </button> */}

                </div>

            </nav>

        {/* Outlet to render nested routes */}
        <Outlet/>
        </>
    );
}

export default Navbar;

import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navigationbar = () => {
    return (
        <nav className="bg-slate-700 sticky z-50 top-0 h-14">
            <div className="flex relative justify-center mt-2 ml-5">
                <MenuIcon className="block md:hidden h-10 w-10 absolute left-0" />
                <div className="md:absolute md:left-0 text-4xl font-semibold uppercase">
                Web Toolkit
                </div>
            </div>
        </nav>
    );
};
export default Navigationbar

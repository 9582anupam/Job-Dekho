import React from "react";
import Logo from "../../../utils/icons/logo.svg";
import LoginButton from "../../common/LoginButton";
import SignupButton from "../../common/SignupButton";
import Nav from "./Nav";


const Header = () => {
    return (
        <div className="min-h-[80px] bg-[#eef1fa] px-4 flex items-center justify-between">
            {/* Header */}
            <div className="h-[75px] w-[170px]">
                <img alt="logo" className="object-contain" src={Logo}></img>
            </div>
            <div>
                <Nav />
            </div>
            <div className="flex gap-4">
                <LoginButton />
                <SignupButton />
            </div>
        </div>
    );
};

export default Header;

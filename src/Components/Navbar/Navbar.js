import React from "react";
import './Navbar.css';

const Navbar = ()=>{
    return (
        <div>
            <button className="connect-wallet">
                Connect Wallet
            </button>
            <abbr title="Create Notes">
                <button className="create-task">
                    <img src="./img/create.png"></img>
                </button>
            </abbr>
        </div>
    );
}

export default Navbar;
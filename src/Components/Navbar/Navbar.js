import React from "react";
import './Navbar.css';

const Navbar = ({web3Handler,account})=>{

    const trim = (address) =>{
        return address.substr(0,3) + "..." + address.substr(address.length - 3,3);
    }

    return (
        <div>
            <>
                {   account ?
                    <div className="connect-wallet">{trim(account)}</div>:
                    <button onClick={web3Handler} className="connect-wallet">
                        Connect Wallet
                    </button>
                }
            </>
            <abbr title="Create Notes">
                <button className="create-task" onClick={() => alert('Create Note Clicked')}>
                    <img src="./img/create.png"></img>
                </button>
            </abbr>
        </div>
    );
}

export default Navbar;
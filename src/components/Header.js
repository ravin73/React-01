import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    const onlineStatus=useOnlineStatus();
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg rounded-xl'>
            <div className='logo-container'>
                <Link to={"/"}><img className='w-56' src={LOGO_URL} alt='Food image' /></Link>

            </div>
            <div className='flex items-center justify-center '>
                <ul className="flex p-6 m-5 space-x-4 text-xl">
                    <li className="text-indigo-400">
                        Online Status: {onlineStatus?"✔️":"❗"}
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link> </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="p-3 bg-blue-400 rounded-lg flex justify-center -mt-3 items-center" onClick={() => { btnName == 'Login' ? setBtnName('Logout') : setBtnName('Login') }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header
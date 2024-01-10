import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = {_id:"fhd" , role:"admin"} 

const Header = () => {
    const [isOpen , setIsOpen] = useState<boolean>(false);
    const x = ()=>{
        isOpen?setIsOpen(false):setIsOpen(true);
    }

const lougOutHandler = ()=>{
    setIsOpen(false);
}
  return (
    <nav className="header">
        <Link to={"/"} onClick={()=>setIsOpen(false)}>Home</Link>
        <Link to={"/search"} onClick={()=>setIsOpen(false)}><FaSearch/> </Link>
        <Link to={"/cart"} onClick={()=>setIsOpen(false)}><FaShoppingBag/></Link>

        {user._id ? (
            <>
           <button onClick={()=>setIsOpen((pre)=>!pre)}><FaUser/></button>   {/* uderstant */}
            <dialog open={isOpen}>
                <div>
                    {user.role === "admin"  && (
                        <Link to="/admin/dashboard" onClick={()=>setIsOpen(false)}>Admin</Link>
                    )}

                    <Link to="/orders" onClick={()=>setIsOpen(false)}>Orders</Link>
                    <button onClick={()=>setIsOpen(false)}><FaSignOutAlt/></button>
                </div>
            </dialog>
            </>
        ):null}
    </nav>
  )
}

export default Header
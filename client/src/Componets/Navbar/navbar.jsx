import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar=()=>{

    return(

        <>
        <nav className="navbar">
    <div className="containere">
        <a href="jdjd" className="logo">Santosh Kirana Store</a>
        <ul className="nav-links">
            <li><Link to={'/'}>Home</Link></li>
         <li id="trans"><Link to={'/trans'}>Transactions</Link> </li> 
            <li><Link >Customers</Link></li>
            <li><Link>Settings</Link></li>
        </ul>
    </div>
</nav>

        
        </>
    )
}

export default Navbar;
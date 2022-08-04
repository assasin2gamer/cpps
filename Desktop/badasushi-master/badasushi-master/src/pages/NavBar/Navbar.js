import React, {useState} from 'react'
import {Button} from './Button'
import { Link , useNavigate} from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import {BrowserView, MobileView} from 'react-device-detect';
import { InsertEmoticon } from '@mui/icons-material'
import "@fontsource/dosis"


function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false);
        }
    };

    var getUrl = window.location;
    var base_url = window.location.origin;
    

    return (
        <>
        <BrowserView>
        
        <nav style={{backgroundColor:'white', borderBottomStyle:'solid', borderBottomColor:'red', borderBottomWidth:'10px', height:'10vh', width:'100%'}}>
            <div></div>
                <ul style={{width:'100vw', justifyContent:'center', display:'flex'}}>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <a href={base_url + '/'} className='nav-links' onClick={closeMobileMenu} style={{paddingTop:'5vh',fontSize:'20px', fontFamily:'dosis', color:'black', fontWeight:'bold', paddingRight:'5w'}}>
                            Home
                        </a>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu} style={{paddingTop:'5vh',fontSize:'20px', fontFamily:'dosis', color:'black', fontWeight:'bold', paddingLeft:'5vw'}}>
                            About us
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <a href={base_url + '/menu?product=all'} className='nav-links' onClick={closeMobileMenu} style={{paddingTop:'5vh',fontSize:'20px', fontFamily:'dosis', color:'black', fontWeight:'bold', paddingLeft:'5vw', paddingRight:'5w'}}>
                            Menu
                        </a>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu} style={{paddingTop:'5vh', fontSize:'20px', fontFamily:'dosis', color:'black', fontWeight:'bold', paddingLeft:'5vw', paddingRight:'5w'}}>
                            Contact Us
                        </Link>
                    </li>
                    
                    
                </ul>
                
        </nav>
        </BrowserView>
        <MobileView>
            
        </MobileView>

        </>
    )
}
export default Navbar;
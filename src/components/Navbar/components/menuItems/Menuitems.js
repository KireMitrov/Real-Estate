import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'

function Menuitems({ items, depthLevel }) {

    const [dropDown, setDropDown] = useState(false);
    depthLevel = depthLevel + 1;


    return (

        <li className='main-nav-li' onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
            {items.submenu ? (
                <>
                    <Link className='main-nav-li-a ' to={items.path}>{items.title}{ depthLevel > 0 ? <span className='arrow down'></span> : "" }</Link>
                    <Dropdown submenus={items.submenu} dropdown={dropDown} depthLevel={depthLevel}></Dropdown>
                </>
            ) :
                <Link className='main-nav-li-a' to={items.path} >{items.title}</Link>
            }
        </li>
    )
}

export default Menuitems
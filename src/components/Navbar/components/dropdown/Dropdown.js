import React from 'react'
import "./dropdown.css"
import Menuitems from '../menuItems/Menuitems'



function Dropdown({ submenus, dropdown, depthLevel }) {

    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
        <ul className={`${dropdown ? "dropdown" : "hide"} ${dropdownClass}`}>
            {submenus.map((submenu, index) =>
                <Menuitems items={submenu} depthLevel={depthLevel}></Menuitems>
            )}
        </ul>
    )
}

export default Dropdown
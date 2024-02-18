import React from 'react'
import { Link } from 'react-router-dom'

function NavbarList({linkUrl,linkName}) {
  return (
    <li className='nav-item'>
        <Link className='nav-link js-trigger' to ={linkUrl}>
            {linkName}
        </Link>
    </li>
  )
}

export default NavbarList
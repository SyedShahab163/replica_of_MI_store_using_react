import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotaccessoriesMenu.css"

const HotaccessoriesMenu = () => {
  return (
    <div className='HotaccessoriesMenu'>
        <Link className='Hotaccessorieslink' to="/music"> Music Store</Link>
        <Link className='Hotaccessorieslink' to="/smartDivice">smart Divice </Link>
        <Link className='Hotaccessorieslink' to="/home">Home</Link>
        <Link className='Hotaccessorieslink' to="/lifestyle">lifestyle</Link>
        {/* <Link className='Hotaccessorieslink' to="/mobile accessories"> Mobile accessories</Link> */}
    </div>
  )
}

export default HotaccessoriesMenu

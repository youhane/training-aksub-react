import React from 'react'
import './Navbar.css'
const LINKS = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Edit",
        link: "/edit",
    }
]

function Navbar() {
  return (
    <nav>
        <ul>
            {LINKS.map((item) => {
                return (
                    <li key={item.label}>
                        <a href={item.link}>{item.label}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar
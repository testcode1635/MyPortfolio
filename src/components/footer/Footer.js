import React from 'react'
import "./footer.style.css";

function Footer() {
    return (
        <div>
             <div className="py-2 text-center footer-style">© SUJON PRAMANIK &nbsp; {new Date().getFullYear()}</div>
        </div>
    )
}

export default Footer

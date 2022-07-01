import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/hostels">Hostels</Link>
                    </li>
                    <li>
                        <Link to ="/itineraries">Itineraries</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
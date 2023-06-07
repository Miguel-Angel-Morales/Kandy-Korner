import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const KandyUserObject = JSON.parse(localKandyUser)

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
            <li className="navbar__item navbar__locations">
                < Link className="navbar__link" to="/locations " > Locations</Link>
            </li>
            {KandyUserObject.staff &&
                <li className="navbar__item navbar__products">
                    < Link className="navbar__link" to="/products " > Products</Link>
                </li>
            } 
        </ul>
    )
}




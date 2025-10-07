import logo from "../assets/RecipesLogo.png"
import { logo as logoClass } from "./Banner.module.css"

const Banner = () => {
    return (

        <header className="row m-0 bg-success bg-gradient">
            <div className="col-3">
                <img src={logo} className={logoClass} alt="logo" />
            </div>
            <div className="col-7 py-3 fs-1 text-white">All your recipies in a single place</div>

        </header>
    );
}

export default Banner;
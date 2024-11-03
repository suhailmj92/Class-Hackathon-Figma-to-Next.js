
import Image from "next/image";
import icon1 from "../../../public/Images/Header-Icons/Favorites.png"
import icon2 from "../../../public/Images/Header-Icons/Cart.png"
import icon3 from "../../../public/Images/Header-Icons/User.png"
import srchIcon from "../../../public/Images/Header-Icons/srchIcon.png"
import logo from "../../../public/Images/Header-Icons/logo.png"
import Link from "next/link";

export default function Header() {
    return (
      
  <div className="Header" >

    <ul className="Header-Buttons">

      <li>
        <div className="logo" >
        <Image src={logo} alt="favorities" height={23} width={66}/>
        </div>
      </li>

      <li>
        <div >
          <ul className="searchArea">
            <li className="searchIcon">
            <Image src={srchIcon} alt="favorities" height={24} width={24}/>

            </li>
            <li className="searchText">
              Search

            </li>
          </ul>
        </div>
      </li>

        <li>Home</li>

        <Link href={"/shopNow"}>  

        <li>About</li>

        </Link>

        <li>Contact Us</li>
        <li>Blog</li>

        <li className="HeaderIcons">
        
        <Image src={icon1} alt="favorities" height={32} width={32}/>
        
        </li>
        <li className="HeaderIcons">
        <Image src={icon3} alt="cart" height={32} width={32}/>
        
        </li >
        <li className="HeaderIcons">
        <Image src={icon2} alt="user" height={32} width={32}/>
        </li>

        
    </ul>
    

</div>

       
    );
  }
  
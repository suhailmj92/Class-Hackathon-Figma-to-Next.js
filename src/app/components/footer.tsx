import Image from "next/image"
import fticon1 from "../../../public/Images/footerIcons/Twitter.png"
import fticon2 from "../../../public/Images/footerIcons/Facebook.png"
import fticon3 from "../../../public/Images/footerIcons/Tiktok.png"
import fticon4 from "../../../public/Images/footerIcons/Instagram.png"

export default function Footer (){
    return(
        <div className="footer">
            <ul>
                <li className="li1">
                
                    <div className="Info">
                        <ul>
                            <li>LOGO</li>
                            <li>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</li>
                        </ul>
                        
                    </div>
                    <div>
                        <ul className="ul1">
                            <li>Services</li>
                            <li>Bonus Program</li>
                            <li>Gift cards</li>
                            <li>Credit and Payments</li>
                            <li>Service Contracts</li>
                            <li>Non-cash Account</li>
                            <li>Payment</li>
                        </ul>

                    </div>
                    <div>Assistance to the buyer
                        <ul className="ul2">
                            <li>Find an order</li>
                            <li>Terms of delevery</li>
                            <li>Exchange and returns of goods</li>
                            <li>Gaurantee</li>
                            <li>FAQs</li>
                            <li>Terms & Conditions</li>
                        </ul>

                    </div>
                    
                </li>

                <li>
                    
                    <div className="SocialMedia">
                        <ul>
                            <li>
                            <Image src={fticon1} alt="twitter" height={16} width={16}/>
                            </li>
                            <li>
                            <Image src={fticon2} alt="facebook" height={16} width={16}/>
                            </li>
                            <li>
                            <Image src={fticon3} alt="tiktok" height={16} width={16}/>
                            </li>
                            <li>
                            <Image src={fticon4} alt="instagram" height={16} width={16}/>
                            </li>

                        </ul>
                    </div>
                </li>
            </ul>

        </div>
    )
}
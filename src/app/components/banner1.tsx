import Image from "next/image";
import iphone1 from "../../../public/Images/Header-Icons/Iphone Image (1).png"

export default function Banner1() {
  return (
    <div >
      <ul className="banner1">
        
          <li>
            <div>
              <ul className="textCont1">
                
              <li className="w1">Pro.Beyond.
              </li>
              <li className="w2">IPhone 14 Pro</li>
              <li className="w3">Created to change everything for the better. For everyone</li>
              <li>
                <div className="banner-button1">
                  <ul>
                    <li>Shop Now</li>
                  </ul>
                </div>
              </li>

              </ul>
            </div>
          </li>
            
              
              <li>
              <Image src={iphone1} alt="bannerPhone" height={631} width={406}/>
             </li>
            </ul>
          </div>
        
    

     
  );
}

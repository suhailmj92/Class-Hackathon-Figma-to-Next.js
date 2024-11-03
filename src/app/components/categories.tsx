 import React from "react"
 import Image from "next/image"
 import styles from "../categories.module.css"
 import img1 from "../../../public/Images/category/Arrow.png"
import img2 from "../../../public/Images/category/Arrow (2).png"
import img3 from "../../../public/Images/category/Phones.png"
import img4 from "../../../public/Images/category/Smart Watches.png"
import img5 from "../../../public/Images/category/Cameras.png"
import img6 from "../../../public/Images/category/Headphones.png"
import img7 from "../../../public/Images/category/Computers.png"
import img8 from "../../../public/Images/category/Gaming.png"

export default function Categories() {
    return (
        <div >
            <ul className={styles.BC1}>
                <li>
                    <div>
                        <ul className={styles.sc1}>
                            <li className={styles.sc11}>Browse By Category</li>
                            <li>
                            <Image src={img1} alt="leftarrow" height={32} width={32}/>
                            </li>
                            <li>
                            <Image src={img2} alt="rightarrow" height={32} width={32}/>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div >
                        <ul className={styles.sc2}>
                           
                            <li>
                                <div >
                                    <ul className={styles.sc3}>
                                        <li>
                                        <Image src={img3} alt="" height={48} width={48}/>
                                        Phones
                                        </li>
                                    </ul>
                               
                                </div>
                            </li>
                            <li>
                                <div >
                                <ul className={styles.sc3}>
                                <li>
                                <Image src={img4} alt="" height={48} width={48}/>
                                Smart Waches
                                </li>
                                </ul>
                                
                                </div>
                            </li>
                            <li>
                                <div >
                                <ul className={styles.sc3}>
                                <li>
                                <Image src={img5} alt="" height={48} width={48}/> 
                                Cameras
                                </li>
                                </ul>
                                             
                                </div>
                            </li>
                            <li>
                                <div >
                                <ul className={styles.sc3}>
                                <li>
                                <Image src={img6} alt="" height={48} width={48}/> 
                                HeadPhones
                                </li>
                                </ul>
                                
                                </div>
                            </li>
                            <li>
                                <div >
                                <ul className={styles.sc3}>
                                <li>
                                <Image src={img7} alt="" height={48} width={48}/>
                                Computers
                                </li>
                                </ul>
                                
                                </div>
                            </li>
                            <li>
                                <div >
                                <ul className={styles.sc3}>
                                <li>
                                <Image src={img8} alt="" height={48} width={48}/>
                                Gamings
                                </li>
                                </ul>
                                
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

    )
}
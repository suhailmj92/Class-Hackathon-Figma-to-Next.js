import React from "react";
import Image from "next/image";
import img1 from "../../../public/Images/banner2/PlayStation.png"
import img2 from "../../../public/Images/banner2/hero__gnfk5g59t0qe_xlarge_2x 1.png"
import img3 from "../../../public/Images/banner2/image 36.png"
import img4 from "../../../public/Images/banner2/MacBook Pro 14.png"

import styles from "../banner2.module.css"

export default function Banner2(){
    return(
        <div >
            <ul className={styles.bigcont}>
                <li>
                    
                    <div >
                        <ul className={styles.cont1}>
                             <li>
                            <Image src={img1} alt="playstation" height={550} width={550}/>
                            </li>

                            <li>
                            <h1 className={styles.T1}>Playstation 5</h1>
                            <h2 className={styles.T2}>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</h2>
                   
                            </li>
                           
                        </ul>
                    </div>

                    <div >
                        <ul className={styles.cont23} >
                            <li >
                                <div>
                                    <ul className={styles.cont2}>
                                        <li><Image src={img2} alt="airpods" height={200} width={200}/></li>
                                        <li>

                                        <h1 className={styles.T1}>Apple AirPods Max</h1>
                                        <h2 className={styles.T2}>Computational audio. Listen, it's powerful</h2>
                                        </li>
                                    </ul>
                                </div>
                            
                            </li>
                            <li >
                            <div>
                                    <ul className={styles.cont3}>
                                        <li><Image src={img3} alt="vrstation" height={190} width={136}/></li>
                                        <li>
                                        <h1 className={styles.T3}>Apple 
                                        Vision Pro</h1>
                                         <h2 className={styles.T4}>An immersive way to experience entertainment</h2>
                                        </li>
                                    </ul>
                            </div>
                            
                            </li>
                        </ul>
                    
                    </div>
                 
                </li>
               
                <li>
                    <div >
                        <ul className={styles.cont4}>
                            
                            <li><h1 className={styles.T1}>Macbook Air</h1>
                        <h2 className={styles.T2}>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</h2>
                        </li>
                        <li>
                            <Image src={img4} alt="mcbook" height={600} width={350} />
                            </li>
                        </ul>
                        
                    
                        
                    </div>
                </li>
                
            </ul>

        </div>
    );
}
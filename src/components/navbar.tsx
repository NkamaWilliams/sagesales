'use client'
import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import Icon from "./icon";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const path = usePathname();
    return(
        <nav className={styles.nav}>
            <div className={styles.home}>
                <Icon src="/menu.svg" mobileOnly={true}/>
                <Link href="/">
                    <Logo small={false}/>
                </Link>
            </div>

            <Link className={`${styles.cart} ${path == "/cart" && styles.selectedMobile}`} href="/cart">
                {path == "/cart" ?<Icon src="/cart_white.svg" mobileOnly={true}/>:<Icon src="/cart.svg" mobileOnly={true}/>}
            </Link>

            {/* <InputText/> */}
            <div className={`${styles.menu}  ${styles.hide}`}>
                <div className={`${styles.menuitems}`}>
                    <Link className={`${styles.link} ${path == "/" ? styles.selected:""}`} href="./">Shop</Link>
                    <Link className={styles.link} href="./">Contact us</Link>
                    <Link className={`${styles.link} ${path == "/cart" && styles.selected} `} href="./cart">{path == "/cart"?<Icon src="/cart_white.svg"/>: <Icon src="/cart.svg"/>} Cart</Link>
                </div>
            </div>
        </nav>
    );
}
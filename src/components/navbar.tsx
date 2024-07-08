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
            <Link className={styles.home} href="./"><Logo small={false}/></Link>

            {/* <InputText/> */}
            <div className={styles.menu}>
                <div className={styles.image}>
                    <Image alt="menu" src="/menu.svg" fill/>
                </div>
                <div className={`${styles.menuitems} ${styles.hide}`}>
                    <Link className={`${styles.link} ${path == "/" ? styles.selected:""}`} href="./">Shop</Link>
                    <Link className={styles.link} href="./">Contact us</Link>
                    <Link className={`${styles.link} ${path == "/cart" && styles.selected}`} href="./cart">{path == "/cart"?<Icon src="/cart_white.svg"/>: <Icon src="/cart.svg"/>} Cart</Link>
                </div>
            </div>
        </nav>
    );
}
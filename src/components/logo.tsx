import styles from "@/styles/logo.module.css";
import Image from "next/image";

interface props{
    small?: boolean
}

export default function Logo({small = true}:props){
    return(
        <div className={`${small? styles.logo : styles.logoLarge}`}>
            <Image alt="logo" src="/logo.svg" fill/>
        </div>
    )
}
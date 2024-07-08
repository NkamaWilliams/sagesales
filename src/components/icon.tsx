import Image from "next/image";
import styles from "@/styles/icon.module.css"

interface props{
    src: string,
    large?: boolean,
    small?: boolean,
    mobileOnly?: boolean,
}

export default function Icon({src, large = false, small = false, mobileOnly = false}: props){
    return(
        <div className={`${styles.icon} ${large && styles.large} ${small && styles.small} ${mobileOnly && styles.mobileOnly}`}>
            <Image alt="icon" src={src} fill />
        </div>
    )
}
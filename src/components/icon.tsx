import Image from "next/image";
import styles from "@/styles/icon.module.css"

interface props{
    src: string,
    large?: boolean,
    small?: boolean,
}

export default function Icon({src, large = false, small = false}: props){
    return(
        <div className={`${styles.icon} ${large && styles.large} ${small && styles.small}`}>
            <Image alt="icon" src={src} fill />
        </div>
    )
}
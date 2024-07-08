import styles from "@/styles/text_input.module.css";
import Image from "next/image";

interface props{
    tag: string,
  }

export default function InputText({tag}: props){
    return(
        <div className={styles.holder}>
            <input className={styles.input} placeholder={tag} title="search" type="text" autoComplete="on"/>
            <div className={styles.image}>
                <Image alt="search" src="/search.svg" fill/>
            </div>
        </div>
    );
}
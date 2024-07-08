import styles from "@/styles/form_input.module.css"
import Image from "next/image"
import Icon from "./icon"

interface props{
    label: string,
    dropdown?: boolean,
    card?: boolean,
}

export default function FormInput({label, dropdown=false, card=false}: props){
    return(
        <div className={styles.input}>
            <label htmlFor="firstname" className={styles.label}>{label}*</label>
            <input id="firstname" type="text" placeholder=""/>

            {dropdown && <div className={styles.dropdown}>
                <Icon src="/arrow-down.svg" />
            </div>}

            {card && <div className={styles.card}>
                <Image src="/visa.svg" alt="visa" fill />
            </div>}
        </div>
    )
}
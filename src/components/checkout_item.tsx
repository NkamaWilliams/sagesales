import styles from "@/styles/checkout_item.module.css"
import Image from "next/image"
import Icon from "./icon"

interface props{
    src: string,
    name: string,
    price: number,
    quantity?: number
}

export default function CheckoutItem({src, name, price, quantity = 1}:props){
    return(
        <div className={styles.checkoutItem}>
            <div>
                <div className={styles.image}>
                    <Image alt={name} src={src} fill/>
                </div>

                <div className={styles.details}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.quantity}>Quantity {quantity}</p>
                </div>
            </div>

            <p className={styles.price}>₤{Math.round(price * quantity * 100) / 100}</p>
        </div>
    );
}
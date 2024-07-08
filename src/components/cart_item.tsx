'use client'
import styles from "@/styles/cart_item.module.css"
import Image from "next/image"
import Icon from "./icon"
import { useState } from "react"

interface props{
    src: string,
    name: string,
    description: string,
    brand: string,
    price: number,
    quantity?: number,
}

export default function CartItem({src, name, description, brand, price, quantity=0}:props){
    const [amount, setAmount] = useState(quantity);

    const handleIncrement = () => {
        setAmount(amount + 1);
    }

    const handleDecrement = () => {
        if (amount > 0){
            setAmount(amount - 1);
        }
    }
    return(
        <section className={styles.container}>
            <div className={styles.cartitem}>
                <div className={styles.image}>
                    <Image alt={name} src={src} fill style={{objectFit: "cover"}}/>
                </div>

                <div className={styles.details}>
                    <div>
                        <article>
                            <p className={styles.brand}>{brand}</p>
                            <h3 className={styles.name}>{name}</h3>
                            <p className={styles.about}>{description}</p>

                        </article>

                        <div className={styles.price}>
                            <p>₤{price} {amount > 0 && amount != undefined?`* ${amount}`:""}</p>
                            <h3>₤{Math.round(price * amount * 100) / 100}</h3>

                            <span className={styles.trashMobile}><Icon src="/trash_white.svg"/></span>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        <div className={styles.amount}>
                            <button onClick={handleDecrement} className={styles.button}>-</button>
                            {amount}
                            <button onClick={handleIncrement} className={styles.button}>+</button>
                        </div>
                        
                        <button className={styles.trash}>
                            <div> <Icon src="/trash_red.svg"/> Remove</div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
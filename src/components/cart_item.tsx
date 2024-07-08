import styles from "@/styles/cart_item.module.css"
import Image from "next/image"
import Icon from "./icon"

interface props{
    src: string,
    name: string,
    description: string,
    brand: string,
    price: number,
    quantity?: number,
}

export default function CartItem({src, name, description, brand, price, quantity=0}:props){
    return(
        <section>
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
                            <p>₤{price} {quantity > 0 && quantity != undefined?`* ${quantity}`:""}</p>
                            <h3>₤{Math.round(price * quantity * 100) / 100}</h3>

                            <span className={styles.trashMobile}><Icon src="/trash_white.svg"/></span>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        <div className={styles.amount}>
                            <button className={styles.button}>-</button>
                            1
                            <button className={styles.button}>+</button>
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
import Icon from "./icon";
import Image from "next/image";
import styles from "@/styles/item.module.css";

interface props{
    src: string,
    brand: string,
    name: string,
    price: number,
    colors?: boolean
}

export default function Item({src, brand, name, price, colors = false}: props){
    return(
        <div className={styles.item}>
            <div className={styles.holder}>
                <Image alt={name} src={src} fill style={{objectFit: "cover"}} />
            </div>

            <div className={styles.info}>
                <div>
                    <p className={styles.brand}>{brand}</p>
                    <h3 className={styles.itemName}>{name}</h3>

                    <p className={styles.price}>₤ {price}</p>
                </div>

                <div>
                    {colors && <div className={styles.colors}>
                        <div className={`${styles.color}`}><Icon src="black.svg" small={true}/></div>
                        <div className={`${styles.color}`}><Icon src="green.svg" small={true}/></div>
                        <div className={`${styles.color}`}><Icon src="brown.svg" small={true}/></div>
                    </div>}

                    <button className={styles.button}>
                        <p>Add to cart</p>
                        <span><Icon src="/shop.svg" large/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
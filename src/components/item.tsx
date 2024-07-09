'use client'
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
    const handleAdd = () => {
        let cart:string[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
        if (cart.includes(src)){
            return;
        }
        cart.push(src);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(`Cart: ${cart}`);
    }
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
                    <button className={styles.button}>
                        <p onClick={handleAdd}>Add to cart</p>
                        <span onClick={handleAdd}><Icon src="/shop.svg" large/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
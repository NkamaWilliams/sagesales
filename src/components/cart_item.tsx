'use client'
import styles from "@/styles/cart_item.module.css"
import Image from "next/image"
import Icon from "./icon"
import { useState, useEffect } from "react"

interface props{
    src: string,
    name: string,
    description: string,
    brand: string,
    price: number,
    quantity?: number,
    update: boolean,
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

interface item{
    src: string,
    name: string,
    price: number,
    quantity: number,
    description?: string
}

export default function CartItem({src, name, description, brand, price, quantity=0, update, setUpdate}:props){
    const [amount, setAmount] = useState(quantity);

    const handleUpdate = (offset: number) => {
        let checkout:item[] = JSON.parse(localStorage.getItem("checkout") ?? "[]");
        let item:item|undefined = checkout.find(item => item.src == src);
        if (item){
            item.quantity = amount + offset;
        }
        else{
            checkout.push({src, name, price, quantity:amount+offset});
        }
        localStorage.setItem("checkout", JSON.stringify(checkout));
        setUpdate(!update);
    }

    const handleIncrement = () => {
        setAmount(amount + 1);
        handleUpdate(1);
    }

    const handleDecrement = () => {
        if (amount > 1){
            setAmount(amount - 1);
            handleUpdate(-1);
        }
    }

    const handleDelete = () => {
        const checkout:item[] = JSON.parse(localStorage.getItem("checkout") ?? "[]");
        const cart: string[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
        let item:item|undefined = checkout.find(item => item.src == src);
        let updatedCheckout: item[] = [];
        let updatedCart: string[] = [];
        if (item){
            updatedCheckout = checkout.filter(old => old.src != item.src);
            updatedCart = cart.filter(old => old != item.src);
        }
        localStorage.setItem("checkout", JSON.stringify(updatedCheckout));
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setUpdate(!update);
    }

    useEffect(() => {
        handleUpdate(0);
    }, [])
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

                            <span onClick={handleDelete} className={styles.trashMobile}><Icon src="/trash_white.svg"/></span>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        <div className={styles.amount}>
                            <button onClick={handleDecrement} className={styles.button}>-</button>
                            {amount}
                            <button onClick={handleIncrement} className={styles.button}>+</button>
                        </div>
                        
                        <button className={styles.trash}>
                            <div onClick={handleDelete}> <Icon src="/trash_red.svg"/> Remove</div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
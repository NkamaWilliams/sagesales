'use client'
import styles from "@/styles/cart.module.css"
import CartItem from "@/components/cart_item"
import Icon from "@/components/icon"
import Link from "next/link"
import { useEffect, useState } from "react"
import list from "@/resources/items.json"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"


interface item{
    name: string,
    src: string,
    price: number,
    brand: string,
    description: string
}

interface itemCheckout{
    name: string,
    src: string,
    price: number,
    quantity: number
}

export default function Cart(){
    const [items, setItems] = useState<item[]>([]);
    const [update, setUpdate] = useState<boolean>(false);
    const [checkout, setCheckout] = useState<itemCheckout[]>([])
    const router: AppRouterInstance = useRouter();

    const handleReceed = () => {
        router.push("/");
    }

    useEffect(() => {
        setCheckout(JSON.parse(localStorage.getItem("checkout") ?? "[]"));
    }, [update])

    useEffect(() => {
        const temp: item[] = []
        const cart: string[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
        list.forEach(item => {
            if (cart.includes(item.src)){
                temp.push(item);
            }
        });
        setItems(temp);
    }, [update])
    return(
        <main className={styles.main}>
            <button onClick={handleReceed} className={styles.back}><Icon src="/arrow_left.svg"/>Continue to shopping</button> <br/>
            <section>
                <div className={styles.items}>
                    {
                        items.map(item => 
                            <CartItem key={item.src} src={item.src} name={item.name} brand={item.brand} description={item.description} price={item.price} quantity={1} update={update} setUpdate={setUpdate}/>
                        )
                    }
                </div>

                <div className={styles.breakdown}>
                    <div>
                        <h3>Order Summary</h3>

                        {
                            checkout.map(item => 
                                <div key={item.src} className={styles.orderedItem}>
                                    <p className={styles.item}>x{item.quantity} {item.name}</p>
                                    <p className={styles.price}>₤ {Math.round(item.price * item.quantity * 100) / 100}</p>
                                </div>
                            )
                        }

                        <hr />

                        <div className={styles.total}>
                            <p className={styles.item}>Order Total</p>
                            <p>₤ {checkout.reduce((prev, item) => {
                                return prev + (item.price * item.quantity);
                            }, 0).toFixed(2)}</p>
                        </div>

                    </div>
                    
                    <div className={styles.proceed}>
                        <div>
                            <p className={styles.item}>Items ({items.length})</p>
                            <p className={styles.item}>Total <span className={styles.price}> ₤{checkout.reduce((prev, item) => {
                                return prev + (item.price * item.quantity);
                            }, 0).toFixed(2)}</span></p>
                        </div>
                        <Link href="./checkout"><button className={styles.button}>Proceed to checkout</button></Link>
                    </div>
                </div>

            </section>
        </main>
    )
}
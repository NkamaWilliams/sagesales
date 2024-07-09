'use client'
import styles from "@/styles/checkout.module.css"
import CheckoutItem from "@/components/checkout_item"
import FormInput from "@/components/form_input"
import Icon from "@/components/icon"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

interface item{
    name: string,
    quantity: number,
    price: number,
    src: string
}

export default function Checkout(){
    const [selected, setSelected] = useState<number>(0);
    const [items, setItems] = useState<item[]>([])
    const [total, setTotal] = useState<number>(0)
    const router: AppRouterInstance = useRouter();

    const handleProceed = () => {
        if (selected < 2){
            setSelected(selected + 1)
            router.push(`/checkout#page${selected+1}`)
        }
    }

    const handleReceed = () => {
        if (selected > 0){
            setSelected(selected - 1);
            router.push(`/checkout`)
        }
        else{
            router.push("/cart");
        }
    }

    useEffect(() => {
        const selectedItems:item[] = JSON.parse(localStorage.getItem("checkout") ?? "[]")
        setItems(selectedItems)
        setTotal(selectedItems.reduce((prev, current) => {
            return prev + (current.price * current.quantity)
        }, 0))
    }, [])
    return(
        <div>
            <button onClick={handleReceed} className={styles.back}><Icon src="/arrow_left.svg"/>Checkout</button>

            <div className={styles.progress}>
                <Icon src="/truck_black.svg"/>
                <div className={`${styles.connector} ${selected > 0 && styles.black}`}></div>
                {selected > 0? <Icon src="/box_black.svg"/>: <Icon src="/box.svg"/>}
                <div className={`${styles.connector} ${selected > 1 && styles.black}`}></div>
                {selected > 1? <Icon src="/card_black.svg"/>:<Icon src="/card.svg"/>}
            </div>

            <div className={styles.main}>
                <div id="page1" className={`${styles.page2} ${styles.page} ${selected == 1 && styles.reveal}`}>
                    <h3>Order details ({items.length})</h3>
                    {
                        items.map(item => 
                            <CheckoutItem key={item.src} src={item.src} name={item.name} price={item.price} quantity={item.quantity} />
                        )
                    }

                    <div className={styles.overview}>
                        <div>
                            <p className={styles.subtotal}>Subtotal</p>
                            <p className={styles.price}>₤ {total.toFixed(2)}</p>
                        </div>

                        <div>
                            <p className={styles.subtotal}>Delivery</p>
                            <p className={styles.price}>₤ {9.92}</p>
                        </div>

                        <hr/>

                        <div>
                            <p className={styles.total}>Total</p>
                            <p className={styles.price}>₤ {(total + 9.92).toFixed(2)}</p>
                        </div>

                        <button onClick={handleProceed}>Proceed to Payment</button>
                    </div>
                </div>

                <div>
                    <div id="page0" className={`${styles.page1} ${styles.page} ${selected == 0 && styles.reveal}`}>
                        <h3>Delivery Information </h3>
                        <button className={styles.edit}>Edit</button>

                        <div className={styles.form}>
                            <div className={styles.double}>
                                <FormInput label="First Name"/>
                                <FormInput label="Last Name"/>
                            </div>
                            <FormInput label="Address"/>
                            <div className={styles.double}>
                                <FormInput label="State" dropdown={true}/>
                                <FormInput label="City" dropdown={true}/>
                            </div>
                            <div className={styles.double}>
                                <FormInput label="Zip" dropdown={true}/>
                                <FormInput label="Phone Number" dropdown={true}/>
                            </div>
                        </div>

                        <button onClick={handleProceed}>Proceed</button>
                    </div>

                    <div id="page2" className={`${styles.page3} ${styles.page} ${selected == 2 && styles.reveal}`}>
                        <h3>Payment </h3>

                        <div className={styles.form}>
                            <FormInput label="Card Number" card={true}/>
                            <div className={styles.double}>
                                <FormInput label="Expiry Date"/>
                                <FormInput label="CVC"/>
                            </div>
                        </div>

                        <button className={styles.payButton}>Pay Now ₤{(total + 9.92).toFixed(2)}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
'use client'
import styles from "@/styles/checkout.module.css"
import CheckoutItem from "@/components/checkout_item"
import FormInput from "@/components/form_input"
import Icon from "@/components/icon"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export default function Checkout(){
    const [selected, setSelected] = useState(0);
    const router: AppRouterInstance = useRouter();

    const handleProceed = () => {
        if (selected < 2){
            setSelected(selected + 1)
        }
    }

    const handleReceed = () => {
        if (selected > 0){
            setSelected(selected - 1);
        }
        else{
            router.push("/cart");
        }
    }
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
                <div className={`${styles.page2} ${styles.page} ${selected == 1 && styles.reveal}`}>
                    <h3>Order details (4)</h3>
                    <CheckoutItem src="/air_jordan.jpeg" name="Air Jordan One" price={199.99} />
                    <CheckoutItem src="/cosmograph.jpeg" name="Cosmograph Daytona" price={499.99} quantity={2}/>
                    <CheckoutItem src="/baseball.jpeg" name="Baseball Hat" price={9.98} quantity={2}/>
                    <CheckoutItem src="/glasses.jpeg" name="Sunglasses" price={39.99} quantity={2}/>

                    <div className={styles.overview}>
                        <div>
                            <p className={styles.subtotal}>Subtotal</p>
                            <p className={styles.price}>₤ 1479.93</p>
                        </div>

                        <div>
                            <p className={styles.subtotal}>Delivery</p>
                            <p className={styles.price}>₤ 9.92</p>
                        </div>

                        <hr/>

                        <div>
                            <p className={styles.total}>Total</p>
                            <p className={styles.price}>₤ 9.92</p>
                        </div>

                        <button onClick={handleProceed}>Proceed to Payment</button>
                    </div>
                </div>

                <div>
                    <div className={`${styles.page1} ${styles.page} ${selected == 0 && styles.reveal}`}>
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

                    <div className={`${styles.page3} ${styles.page} ${selected == 2 && styles.reveal}`}>
                        <h3>Payment </h3>

                        <div className={styles.form}>
                            <FormInput label="Card Number" card={true}/>
                            <div className={styles.double}>
                                <FormInput label="Expiry Date"/>
                                <FormInput label="CVC"/>
                            </div>
                        </div>

                        <button className={styles.payButton}>Pay Now ₤1388</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
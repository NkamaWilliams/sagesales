import styles from "@/styles/cart.module.css"
import CartItem from "@/components/cart_item"
import Link from "next/link"

export default function Cart(){
    return(
        <main className={styles.main}>
            <h1>Cart (5)</h1> <br/>
            <section>
                <div className={styles.items}>
                    <CartItem src="/air_jordan.jpeg" name="Air Jordan One" brand="NIKE" description="Celebrates Air Force parachutists with a premium leather upper, tactical accents, and a Swoosh reimagined as parachute cord. Take flight in iconic comfort." price={199.99} quantity={1}/>

                    <CartItem src="/cosmograph.jpeg" name="Cosmograph Daytona" brand="Rolex" description="Celebrates Air Force parachutists with a premium leather upper, tactical accents, and a Swoosh reimagined as parachute cord. Take flight in iconic comfort." price={499.99} quantity={2}/>

                    <CartItem src="/baseball.jpeg" name="Baseball Hat" brand="Polo" description="Celebrates Air Force parachutists with a premium leather upper, tactical accents, and a Swoosh reimagined as parachute cord. Take flight in iconic comfort." price={9.99} quantity={2}/>

                    <CartItem src="/glasses.jpeg" name="Sunglasses" brand="Ray Bam" description="Celebrates Air Force parachutists with a premium leather upper, tactical accents, and a Swoosh reimagined as parachute cord. Take flight in iconic comfort." price={39.99} quantity={2}/>
                </div>

                <div className={styles.breakdown}>
                    <div>
                        <h3>Order Summary</h3>
                        <div className={styles.orderedItem}>
                            <p className={styles.item}>x2 Airforce Jordan Lows 1</p>

                            <p className={styles.price}>₤ 199.99</p>
                        </div>

                        <div className={styles.orderedItem}>
                            <p className={styles.item}>x2 Cosmograph Daytona</p>

                            <p className={styles.price}>₤ 999.98</p>
                        </div>

                        <div className={styles.orderedItem}>
                            <p className={styles.item}>x2 Baseball Hat</p>

                            <p className={styles.price}>₤ 19.98</p>
                        </div>

                        <div className={styles.orderedItem}>
                            <p className={styles.item}>x2 Sunglasses</p>

                            <p className={styles.price}>₤ 79.98</p>
                        </div>

                        <hr />

                        <div className={styles.total}>
                            <p className={styles.item}>Order Total</p>
                            <p>₤ 1479.93</p>
                        </div>

                    </div>
                    
                    <div className={styles.proceed}>
                        <div>
                            <p className={styles.item}>Items (4)</p>
                            <p className={styles.item}>Total <span className={styles.price}> ₤1479.93</span></p>
                        </div>
                        <Link href="./checkout"><button className={styles.button}>Proceed to checkout</button></Link>
                    </div>
                </div>

            </section>
        </main>
    )
}
import Logo from "./logo";
import Icon from "./icon";
import Link from "next/link";
import styles from "@/styles/footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <Logo small={false} />
                <p className={styles.text}>Complete your style with awesome fashion accessories from us</p>
                <div className={styles.socials}>
                    <Link href="./">
                     <Icon src="/facebook.svg" />
                    </Link>

                    <Link href="./">
                    <Icon src="/instagram.svg" />
                    </Link>

                    <Link href="./">
                        <Icon src="/x.svg" />
                    </Link>
                </div>

                <p className={styles.copyright}>©Sage_Sales 2024</p>
            </div>

            <div>
                <p className={styles.text}>Get inside scoop on our latest offers and Stockists!</p>

                <form className={styles.form}>
                    <label htmlFor="email">Email</label>
                    <div className={styles.input}>
                        <input type="text" id="email" placeholder="John_Doe@gmail.com" />
                        <button type="submit">Submit</button>
                    </div>
                </form>

                <p className={styles.text}>Quick Links</p>
                <div className={styles.links}>
                    <Link className={styles.link} href="./">Men</Link>
                    <Link className={styles.link} href="./">Women</Link>
                    <Link className={styles.link} href="./">Babies</Link>
                    <Link className={styles.link} href="./">Nike</Link>
                    <Link className={styles.link} href="./">Adidas</Link>
                    <Link className={styles.link} href="./">Rolex</Link>
                </div>

                <p className={styles.text}>Contact Us</p>
                <div className={styles.links}>
                    <Link className={styles.link} href="./">0813 456 7892</Link>
                    <Link className={styles.link} href="./">0813 456 7892</Link>
                    <Link className={styles.link} href="./">Sage_Sales@yahoo.com</Link>
                </div>
            </div>
        </footer>
    );
}
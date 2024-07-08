import InputText from "@/components/text_input";
import DropdownFilter from "@/components/dropdown-filter";
import Item from "@/components/item";
import styles from "@/styles/page.module.css";
import items from "@/resources/items.json"

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.tagline}>
          <h2>Express Yourself. Own Your Style.</h2>
          <p>Discover the latest trends and hottest pieces to elevate your look. Shop Now!</p>
        </div>
        <InputText tag="Search Category, brand ...."/>
      </header>

      <div className={styles.banner}>
        <h1>FASHION FOR EVERY YOU</h1>
        <p>Unleash your style</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.category}>
          <p className={styles.filterName}>Categories</p>
          <div>
            <button className={styles.selectable}>Men</button>
            <button>Women</button>
            <button>Babies</button>
          </div>
        </div>

        <div className={styles.otherFilter}>
          <DropdownFilter filterType="Categories" name="Men" mobileOnly={true}/>
          <DropdownFilter filterType="Type" name="All" />
          <DropdownFilter filterType="Brand" name="All" />
          <DropdownFilter filterType="Price Filter" name="₤0.00 - ₤500.00" />
        </div>
      </div>

      <div className={styles.products}>
        {
          items.map(item => 
            <Item key={item.src} src={item.src} name={item.name} brand={item.brand} price={item.price} />
          )
        }
      </div>
    </main>
  );
}

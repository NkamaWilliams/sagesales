'use client'
import InputText from "@/components/text_input";
import DropdownFilter from "@/components/dropdown-filter";
import Item from "@/components/item";
import Icon from "@/components/icon";
import styles from "@/styles/page.module.css";
import items from "@/resources/items.json"

export default function Home() {
  const triggerAdded = () => {
    const added = document.getElementById("added");

    if (added){
      added.classList.add(styles.active);
      setTimeout(() => {
        added.classList.remove(styles.active);
      }, 1500);
    }
  }
  return (
    <main className={styles.main}>
      
      <div id="added" className={styles.added}>
        <div><Icon src="/tick.svg"/></div>
        <p>Product Added to Cart</p>
      </div>

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
            <button>All</button>
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
            <Item key={item.src} src={item.src} name={item.name} brand={item.brand} price={item.price} trigger={triggerAdded} />
          )
        }
      </div>
    </main>
  );
}

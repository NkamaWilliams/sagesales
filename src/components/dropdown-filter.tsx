import Icon from "./icon"
import styles from "@/styles/dropdown-filter.module.css"
import styles2 from "@/styles/page.module.css"

interface props{
    filterType: string,
    name: string,
    mobileOnly?: boolean|undefined
}

export default function DropdownFilter({filterType, name, mobileOnly}: props){
    return(
        <div className={`${styles.container} ${mobileOnly == true? styles.mobile:""}`}>
            <p className={styles2.filterName}>{filterType}</p>
            <button className={styles.dropdown}>
                <p className={styles.selected}>{name}</p>

                <Icon src="/arrow-down.svg" />
            </button>
        </div>
    )
}
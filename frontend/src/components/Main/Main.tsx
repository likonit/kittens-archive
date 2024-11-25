import styles from "../../styles/main/main.module.css"
import PageSwitcher from "./page-switcher"
import PhotoPreview from "./photo-preview"
import PhotoFilters from "./photo-filters"

// functions

export default function Main({page_id, filter}: {page_id: number, filter: string}) {
    return (
        <div className={styles.main_block}>
            
            <PhotoFilters curr_filter={filter}></PhotoFilters>
            <PageSwitcher page={page_id} filter={filter}></PageSwitcher>
            <PhotoPreview page={page_id} filter={filter}></PhotoPreview>
        </div>
    )
}
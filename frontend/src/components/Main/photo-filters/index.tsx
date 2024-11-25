import Filter from "./filter-elm"

import { FaList } from "react-icons/fa";

import styles from "@/styles/main/main.module.css"

export default function PhotoFilters({curr_filter}: {curr_filter: string}) {
    
    return(
        <div className={styles.filter_block}>
            <span className={styles.filter_container}>
                <a>
                    <FaList></FaList>
                </a>
                <Filter filter={1} isActive={curr_filter == "1"}>Old</Filter>
                <Filter filter={2} isActive={curr_filter == "2"}>New</Filter>
                <Filter filter={3} isActive={curr_filter == "3"}>Popular</Filter>
                <Filter filter={4} isActive={curr_filter == "4"}>Most liked</Filter>
            </span>
        </div>
    )

}
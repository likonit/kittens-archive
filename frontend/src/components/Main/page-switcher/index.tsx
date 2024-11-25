import getPageCount from "./functions/get-page-count"
import PageButton from "./page-button"

import styles from "@/styles/main/main.module.css"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PageSwitcher({page, filter}: {page: number, filter: string}) {

    const pageList: React.ReactElement[] = []
    const pagesToList = 4
    const totalPages = getPageCount()+1

    function create_link(jump: number): string {

        return `/?page=${jump}` + (filter != "no" ? `&filter=${filter}` : "" )

    }
    
    for (let i = page-pagesToList > 1 ? page-pagesToList : 1; i < page+pagesToList+1 && i < totalPages; i++) {

        pageList.push(<PageButton pageNumber={i} key={i} curr_page={page} filter={filter}></PageButton>)

    }

    return (
        <div className={styles.page_switcher}>
            <div>
                <span><a className={styles.page_number} href={create_link(1)}><FaChevronLeft></FaChevronLeft></a></span>{pageList}<span><a className={styles.page_number} href={create_link(totalPages-1)}> <FaChevronRight></FaChevronRight> </a></span>
            </div>
        </div>
    )

}
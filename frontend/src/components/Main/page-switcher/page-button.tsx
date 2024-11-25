import styles from "@/styles/main/main.module.css"

export default function PageButton({pageNumber, curr_page, filter}: {pageNumber: number, curr_page: number, filter: string}) {
    
    function generate_link(num: number) {

        return `/?page=${num}` + (filter == "no" ? "" : `&filter=${filter}`)
        
    }

    return (
        <a className={styles.page_number} style={curr_page == pageNumber ? {textDecoration: "underline"} : {}} href={generate_link(pageNumber)}>{pageNumber}</a>
    )

}
import styles from "@/styles/main/main.module.css"

export default function Filter({filter, children, isActive}: {filter: number, children: string, isActive: boolean}) {

    function generate_link(): string {

        return `/?page=1&filter=${filter}`

    }

    return (
        <a href={generate_link()} className={isActive ? styles.active_filter : "standart"}>
            {children}
        </a>
    )

}
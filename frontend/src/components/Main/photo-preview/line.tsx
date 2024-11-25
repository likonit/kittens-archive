import PhotoPreview from "../../../types/photo-preview.type"
import Photo from "./Photo"

import styles from "../../../styles/main/main.module.css"
import PhotoStata from "@/types/photo-stata.type"

export default function Line(
    {list, filter, page, stata_list}:
    {list: PhotoPreview[], filter: string, page: number, stata_list: PhotoStata[]}
) {

    const Photos: React.ReactElement[] = []
    for (let i = 0; i < list.length; i++) {

        const stata = stata_list.find(item => item.id == list[i].id)
        const src = list.find(item => item.id == list[i].id)

        Photos.push(<Photo src={src ? src : {id: 1, src: ""}} stata={stata} id={list[i].id} filter={filter} page={page} key={i}></Photo>)

    }

    return (
        <div className={styles.line}>
            {Photos}
        </div>
    )

}
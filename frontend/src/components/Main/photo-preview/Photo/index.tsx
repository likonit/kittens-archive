import Image from "next/image"
import BottomPanel from "./bottom-panel"

import PhotoPreview from "@/types/photo-preview.type"
import styles from "../../../../styles/main/main.module.css"

import { useState } from "react"
import PhotoStata from "@/types/photo-stata.type"

export default function Photo({src, id, filter, page, stata}: {src: PhotoPreview, id: number, filter: string, page: number, stata: PhotoStata | undefined}) {

    const [backgroundClr, setBackgroundClr] = useState<string>("#F9E8EA")
    
    function get_link(id: number): string {

        return `/photo/${id}` + `?page=${page}` + (filter != "no" ? "&filter="+filter : "")

    }

    function image_hover_in() {

        setBackgroundClr("#F9DCDA")

    }

    function image_hover_out() {

        setBackgroundClr("#F9E8EA")
        
    }

    return (

        <div className={styles.photo_block}>
            <div className={styles.container} style={{transition: ".3s", background: backgroundClr}}>
                <div className={styles.photo_ident}>
                    <span className={styles.id_text}>#{id}</span> <BottomPanel image={src} stata={stata}></BottomPanel>
                </div>
                <a href={get_link(id)}>
                    <Image priority={false} loading="lazy" fill={false} width={100} height={100} src={src.src} alt="not found" onMouseOver={image_hover_in} onMouseOut={image_hover_out}></Image>
                </a>
            </div>
        </div>

    )

}
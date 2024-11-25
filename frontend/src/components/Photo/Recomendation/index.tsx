import getPhotoList from "@/components/Main/photo-preview/functions/get-photo-list"

import Photo from "@/components/Main/photo-preview/Photo"
import PhotoPreview from "@/types/photo-preview.type"

import styles from "@/styles/main/main.module.css"
import styles_page from "@/styles/page/page.module.css"

import getStataList from "@/components/Main/photo-preview/functions/get-stata-list"

import { useEffect, useState } from "react"

export default function Recomendation({filter, page}: {filter: string, page: number}) {

    const allImages = getPhotoList()

    const [RecomendationLine, setRecomendationLine] = useState<React.ReactElement[]>([])

    function getRandomImage(): PhotoPreview {

        return allImages[Math.round(Math.random() * (allImages.length-1))]

    }

    useEffect(() => {

        (async function() {

            const tempLine: React.ReactElement[] = []
            const indexses: number[] = []
            
            for (let i = 0; i < 6; i++) {
                
                let randomImg: PhotoPreview
        
                do {
                    randomImg = getRandomImage()
                } while (indexses.includes(randomImg.id))
                    
                const stata = await getStataList(randomImg.id-1, 1)

                tempLine.push(<Photo stata={stata.array[0]} page={page} src={randomImg} id={randomImg.id} filter={filter} key={randomImg.id}></Photo>)
                indexses.push(randomImg.id)
        
            }

            setRecomendationLine(tempLine)

        }())

    }, [])


    return (
        <div className={styles_page.recomendation}>

            <h1>Recommended posts for You:</h1>
            <div className={styles.line}>{RecomendationLine}</div>

        </div>
    )
    
}
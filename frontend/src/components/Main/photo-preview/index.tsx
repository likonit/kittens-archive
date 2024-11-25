import React from "react"
import Line from "./line"

import getPhotoList from "./functions/get-photo-list"
import getStataList from "./functions/get-stata-list"
import getPhotosPerPage from "../page-switcher/functions/photos-per-page"

import { useEffect, useState } from "react"
// import PhotoStata from "@/types/photo-stata.type"

export default function PhotoPreview({page, filter}: {page: number, filter: string}) {
        
    const [linesElm, setLinesElm] = useState<React.ReactElement[]>([])
    const [renderedLines, setRenderedLines] = useState(0)
    const photosPerPage = getPhotosPerPage()

    useEffect(() => {

        (async function () {
            
            if (renderedLines == 8) return
            
            if (renderedLines >= 1) {

                const Lines: React.ReactElement[] = linesElm
                const all_photos = getPhotoList()

                console.log(renderedLines)
                
                const t1 = Date.now()
                const stata_arr = await getStataList(photosPerPage * (page-1) + ((renderedLines-1)*6), 6, Number(filter))
                console.log("request time: ", Date.now() - t1)
                const photo_arr = stata_arr.array.map(item => {
                    return {
                        src: all_photos[item.id-1].src,
                        id: all_photos[item.id-1].id
                    }
                })

                console.log(stata_arr, photo_arr)

                Lines.push(<Line filter={filter} key={Lines.length} list={photo_arr} stata_list={stata_arr.array} page={page}></Line>)
                
                setLinesElm(Lines)

            }
            
            setRenderedLines(renderedLines+1)

        } ())
        
    }, [renderedLines])

    // const Error_elm: React.ReactElement = <div></div>

    return (
        <div>{linesElm.length > 0 ? linesElm : <center>Loading...</center>}</div>
    )

}
import styles from "@/styles/page/page.module.css"

import PhotoInfo from "@/types/photo-info.type"

import getPhotoInfo from "./function/get-photo-info"

import Image from "next/image"
import Recomendation from "./Recomendation"

import React, { useEffect, useState } from "react"

import { FaDownload, FaArrowLeft, FaHeart, FaEye } from "react-icons/fa"
import parseCookie from "../Main/photo-preview/Photo/functions/cookie-check"
import setNeedCookie from "../Main/photo-preview/Photo/functions/set-cookie"
import likeIncrease from "../Main/photo-preview/Photo/functions/like-increase.request"

import getStataList from "@/components/Main/photo-preview/functions/get-stata-list"

export default function PageBlock({photo_id, filter, page}: {photo_id: string, filter: string, page: number}) {

    const image_info: PhotoInfo = getPhotoInfo(photo_id)

    const [heartElm, setHeartElm] = useState<React.ReactElement>()
    const [isLiked, setIsLiked] = useState(parseCookie(image_info, "likes"))
    const [likes, setLikes] = useState(0)
    const [views, setViews] = useState(0)

    function generate_link(): string {

        return `/?filter=${filter}` + `&page=${page}`

    }

    async function increaseLikes() {

        const needIncrease: boolean = setNeedCookie("likes", image_info)
        
        if (needIncrease) {

            const requestedLiked = await likeIncrease(image_info.id)
            setLikes(requestedLiked)

        }
        
        setIsLiked(parseCookie(image_info, "likes"))

    }

    useEffect(() => {

        (async function() {

            const stata = (await getStataList(Number(photo_id)-1, 1)).array[0]
            setLikes(stata.likes)
            setViews(stata.views)

            setHeartElm(
                <span>
                    
                    <span className={styles.stata_elm}>
                        <span><FaEye className={styles.icons} style={{color: "#6C75B3"}}></FaEye></span> <span className={styles.stata_text}>{views}</span>
                    </span>

                    <span className={styles.stata_elm} style={{cursor: "pointer"}} onClick={increaseLikes}>
                        <span><FaHeart className={styles.icons} style={isLiked ? {color: "red"} : {color: "#FF6F61"}}></FaHeart></span> <span className={styles.stata_text}>{likes}</span>
                    </span>

                </span>
            )

        } ())

    }, [views, likes])

    return (
        <div className={styles.page_block}>

            <div className={styles.home_button}>
                <a href={generate_link()}><FaArrowLeft></FaArrowLeft> <span>Go back</span></a>
            </div>

            <div className={styles.id_span}>
                <span>#{photo_id}</span>
            </div>

            <Image priority={true} loading="eager" src={image_info.src} width={100} height={100} alt="not found" className={styles.main_image}></Image>

            <div className={styles.stata_block}>
                {heartElm}

                <span className={styles.download_btn}>
                    <a download href={image_info.src}>Download <FaDownload className={styles.download_icon}></FaDownload></a>
                </span>
            </div>

            <Recomendation filter={filter} page={page}></Recomendation>
            
        </div>
    )

}
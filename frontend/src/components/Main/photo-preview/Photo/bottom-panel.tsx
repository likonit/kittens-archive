import PhotoPreview from "@/types/photo-preview.type"
import { useState, useEffect } from "react"

import likeIncrease from "./functions/like-increase.request";
import viewIncrease from "./functions/view-increase.request";
import setNeedCookie from "./functions/set-cookie"
import parseCookie from "./functions/cookie-check"

import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import styles from "@/styles/main/main.module.css"
import PhotoStata from "@/types/photo-stata.type";

export default function BottomPanel({image, stata}: {image: PhotoPreview, stata: PhotoStata | undefined}) {

    const [likes, setLikes] = useState(stata?.likes ? stata.likes : 0)
    const [views] = useState(stata?.views ? stata.views : 0)
    
    const [bottomElm, setBottomElm] = useState<React.ReactElement>()
    const [isLiked, setIsLiked] = useState<boolean>(false)
    
    // получить запрос от 
    async function increaseLikes(): Promise<number> {

        const needIncrease: boolean = setNeedCookie("likes", image)
        
        if (needIncrease) {

            const requestedLiked = await likeIncrease(image.id)
            setLikes(requestedLiked)
            return requestedLiked

        }
        
        setIsLiked(parseCookie(image, "likes"))
        return likes

    }

    async function increaseViews() {

        const needIncrease: boolean = setNeedCookie("views", image)
        
        if (needIncrease) {

            await viewIncrease(image.id)

        }

    }

    useEffect(() => {

        (async function() {

            await increaseViews()

            setIsLiked(parseCookie(image, "likes"))

            setBottomElm(
                <div className={styles.bottom_panel}>
                    <span className={styles.eye_img}><FaEye></FaEye><span className={styles.stata_text}>{views}</span></span>
                    <span className={styles.heart_img} onClick={increaseLikes}><FaHeart className={isLiked ? styles.active : styles.no_active}></FaHeart><span className={styles.stata_text}>{likes}</span></span>
                </div>
            )

        }) ()

    }, [isLiked, likes, views])

    return bottomElm

}
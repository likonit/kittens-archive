import PhotoPreview from "@/types/photo-preview.type"
import PhotoInfo from "@/types/photo-info.type"
import { getCookie } from "cookies-next"

export default function parseCookie(image: PhotoPreview | PhotoInfo, cookie_name: string) {

    const parsed: string[] | undefined = getCookie(cookie_name)?.split("|")
    if (!parsed) return false
    return parsed?.includes(image.id.toString())

}
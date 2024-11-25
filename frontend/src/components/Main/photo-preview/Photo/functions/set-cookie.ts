import PhotoPreview from '@/types/photo-preview.type';
import { getCookie, setCookie } from 'cookies-next';

export default function setNeedCookie(cookie_name: string, image: PhotoPreview): boolean {

    if (!getCookie(cookie_name)) {

        setCookie(cookie_name, image.id.toString())
        return true

    } else {

        const parsed: string[] | undefined = getCookie(cookie_name)?.split("|")

        if (!parsed?.includes(image.id.toString())) {

            setCookie(cookie_name, getCookie(cookie_name) + "|" + image.id.toString())
            return true

        }

        return false

    }

}
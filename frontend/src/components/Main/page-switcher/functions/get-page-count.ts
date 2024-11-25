import getPhotoCount from "../../photo-preview/functions/get-photo-count"
import getPhotosPerPage from "./photos-per-page"

export default function getPageCount() {
    
    return Math.ceil(getPhotoCount() / getPhotosPerPage())
    
}
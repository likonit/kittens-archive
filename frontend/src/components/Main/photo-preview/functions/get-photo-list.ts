// types
import PhotoPreview from "../../../../types/photo-preview.type"

export default function getPhotoList(): PhotoPreview[] {

    const obj: PhotoPreview[] = []

    for (let i = 0; i < 370; i++) {
        
        obj.push({
            id: i+1,
            src: `https://kittens-archive.site/assets/preview-photos/${i+1}.jpg`
        })

    }

    return obj

}
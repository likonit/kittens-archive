import PhotoInfo from "@/types/photo-info.type"


export default function getPhotoList(): PhotoInfo[] {
    const obj: PhotoInfo[] = []

    for (let i = 0; i < 370; i++) {
        
        obj.push({
            id: i+1,
            src: `https://kittens-archive.site/assets/preview-photos/${i+1}.jpg`
        })

    }

    return obj

}
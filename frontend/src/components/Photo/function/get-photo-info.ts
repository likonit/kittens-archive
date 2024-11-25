import PhotoInfo from "@/types/photo-info.type";
import getPhotoList from "./get-photo-list";

export default function getPhotoInfo(id: string): PhotoInfo {

    const list = getPhotoList()
    const elm = list.find(item => item.id == +id)

    return elm ? elm : list[0]

}
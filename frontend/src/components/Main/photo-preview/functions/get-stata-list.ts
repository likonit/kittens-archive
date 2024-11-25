import PhotoStata from "@/types/photo-stata.type";

export default async function getStataList(start: number, count: number, filter: number = 1): Promise<{
    status: string,
    array: PhotoStata[]
}> {

    try {

        const body = {
            action: "get-stata",
            data: {
                start: start,
                count: count,
                filter: filter
            }
        }

        const result = await ((await fetch("https://kittens-archive.site:3002/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })).text())

        return {
            status: "ok",
            array: JSON.parse(result)
        }

    } catch(e) {
        
        console.log("catched err: ", e)

        return {
            status: "error",
            array: []
        }

    }

}
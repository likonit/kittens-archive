export default async function likeIncrease(id: number): Promise<number> {

    const body = {
        action: "like-increase",
        data: {
            id: id
        }
    }

    const res = await (await fetch("https://kittens-archive.site:3002/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })).text()

    return Number(res)

}
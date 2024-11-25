export default async function viewIncrease(id: number): Promise<number> {

    const body = {
        action: "view-increase",
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
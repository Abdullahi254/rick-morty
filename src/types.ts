
// created custom Location info type found in the results property of Location
export type LInfo = {
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
}

//custom type for the Location results
export type Location<LInfo> = {
    info:{
        count: number
        pages: number
        next: string | null
        prev: string | null
    },
    results:LInfo[]
}
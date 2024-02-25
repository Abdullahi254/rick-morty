
//custom Location info type found in the results property of Location
export type LInfo = {
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
}

//custom character type 
export type CHInfo = {
    id: string
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: string[]
    url: string
    created: string
}

//custom type for the Location results
export type Location<LInfo> = {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    },
    results: LInfo[]
}

export type CombinedList = {
    location: string
    residentsData: {
        image: string
        name: string
        status: string
        id: number
    }[]
}
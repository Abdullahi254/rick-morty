import { LInfo, Location } from "@/types"

const getLocationList = async (page?:number):Promise<Location<LInfo>> => {
  // function to get a list of locations from the rick and morty api
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
    return res.json()

  } catch (er) {
    throw new Error('Failed to fetch data')
  }
}

export default async function Home() {
  const locationNames = await getLocationList(2)
  locationNames.results.forEach(res=>console.log(res.name))
  return (
    <main className="flex flex-col items-center min-h-screen py-20 px-6 max-w-7xl mx-auto">

    </main>
  );
}

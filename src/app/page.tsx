import Search from "@/components/Search"
import { LInfo, Location } from "@/types"

const getLocationList = async (page?: number): Promise<Location<LInfo>> => {
  // function to get a list of locations from the rick and morty api
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
    return res.json()

  } catch (er) {
    throw new Error('Failed to fetch data')
  }
}

export default async function Home() {
  const locationList = await getLocationList()
  return (
    <main className="flex flex-col items-center min-h-screen mt-[200px] p-6 max-w-7xl mx-auto">
      <Search locationList={locationList}/>
    </main>
  );
}

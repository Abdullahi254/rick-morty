import LocationCard from "@/components/LocationCard"
import LocationList from "@/components/LocationList"
import Search from "@/components/Search"
import { CHInfo, CombinedList, LInfo } from "@/types"

const getLocationList = async (): Promise<LInfo[]> => {
  // function to get a list of locations from the rick and morty api
  try {
    let locationResList: LInfo[][] = []
    for (let i = 1; i <= 7; i++) {
      //looping through all the pages in the api to get the total location data
      const res = await fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
      const result = await res.json()
      locationResList.push(result.results)
    }
    const mergedArray: LInfo[] = ([] as LInfo[]).concat(...locationResList);
    //returns a list of the merged Location data
    return mergedArray
  }
  catch (er) {
    throw new Error('Failed to fetch data')
  }
}


const getCharList = async (): Promise<CHInfo[]> => {
  // function to get a list of characters from the rick and morty api
  try {
    let charResList: CHInfo[][] = []
    for (let i = 1; i <= 7; i++) {
      //looping through all the pages in the api to get the total character data
      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
      const result = await res.json()
      charResList.push(result.results)
    }
    const mergedArray: CHInfo[] = ([] as CHInfo[]).concat(...charResList);
    //returns a list of the merged char data
    return mergedArray
  }
  catch (er) {
    throw new Error('Failed to fetch data')
  }
}


const getLocationsByCharName = async (residentUrl: string): Promise<LInfo> => {
  //getting a characters location from their url
  try {
    const locationList = await getLocationList()
    return locationList.filter((loc => loc.residents.includes(residentUrl)))[0]
  } catch {
    throw new Error('Failed to fetch data')
  }
}

// a list of the custom data that gets listed in the home page ( type = CombinedList)
const CombinedList = async (locationList: LInfo[]):Promise<CombinedList[]>=> {
  //looping through all the location data to get location name
  const data = await Promise.all(locationList.map(async (location) => {
    // looping throug all the residents in a location to get the img, name and status of character
    const residentsData = await Promise.all(location.residents.map(async (url) => {
      try {
        const res = await fetch(url);
        const resident: CHInfo = await res.json();
        return {
          image: resident.image,
          name: resident.name,
          status: resident.status
        };
      } catch (error) {
        return {
          image: "",
          name: "",
          status: ""
        };
      }
    }));
    return {
      location: location.name,
      residentsData
    };
  }));
  return data;
};


export default async function Home() {
  const locationList = await getLocationList()
  const charList = await getCharList()
  const combined = await CombinedList(locationList)
  return (
    <main className="flex flex-col items-center min-h-screen mt-[200px] p-6 max-w-7xl mx-auto">
      <Search locationList={locationList} charList={charList} combinedList={combined}/>
    </main>
  );
}

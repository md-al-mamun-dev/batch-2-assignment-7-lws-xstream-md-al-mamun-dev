import Link from "next/link";
import Image from "next/image";


async function getVideos() {
    const videos = ()=>import("../../../../../../data/videos.json").then(module => module.default)
    return await videos()
  }


export default async function RecommendedVideos({ dict, lang }) {
    function getRandomRecommendation(array, count) {
        if (array.length <= count) return array;
        const shuffled = array.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
      }
    const videos = await getVideos()
    const recommendations = getRandomRecommendation(videos, 3);
      return (<div class="w-full px-4">
        <h2 class="text-xl font-semibold mb-4 ">{dict?.you_may_like}</h2>
        <div class="space-x-4 flex flex-wrap w-[920px] mx-auto">
          {
            recommendations.map((remonmd) => (
              <Link key={remonmd.videoId} href={`/${lang}/videos/${remonmd.videoId}`} class="flex items-start space-x-2 w-1/3 max-w-[295px]">
                 <Image alt="" src={remonmd?.thumbnail} width={120} height={80} className="object-cover rounded"/>
                <div>
                    <h3 class="font-semibold line-clamp-video-item">{remonmd?.title}</h3>
                    <p class="text-sm text-gray-400">{remonmd?.channelTitle}</p>
                    <p class="text-sm text-gray-400">16,426M View now</p>
                </div>
            </Link>))
          }
        
            {/* { 
              recommendations.map(remonmd => <RecomItem data={remonmd} lang={lang}/>)
            } */}

            {/* <div class="flex items-start space-x-4 ">
            <img src="https://i.ytimg.com/vi/9kjwMTj8ZD0/hqdefault.jpg" alt="Fallout Shelter PC Thumbnail"
                class="w-30 h-20 rounded object-cover" />
            <div>
                <h3 class="font-semibold">Fallout Shelter PC - Ep. 1</h3>
                <p class="text-sm text-gray-400">Blitz</p>
                <p class="text-sm text-gray-400">26,389M</p>
            </div>
            </div>

            <div class="flex items-start space-x-4">
            <img src="https://i.ytimg.com/vi/Ij7FWQJR0e8/hqdefault.jpg" alt="Resident Evil Remastered Thumbnail"
                class="w-30 h-20 rounded object-cover" />
            <div>
                <h3 class="font-semibold">Resident Evil Remastered Walkthrough</h3>
                <p class="text-sm text-gray-400">theRadBrad</p>
                <p class="text-sm text-gray-400">16,426M View now</p>
            </div>
            </div>

            <div class="flex items-start space-x-4">
            <img src="https://i.ytimg.com/vi/F8BactAXOH4/hqdefault.jpg" alt="Open World Games Thumbnail"
                class="w-30 h-20 rounded object-cover" />
            <div>
                <h3 class="font-semibold">Top 10 BIGGEST OPEN WORLD Games</h3>
                <p class="text-sm text-gray-400">Lazy Assassin</p>
                <p class="text-sm text-gray-400">7,694M View now</p>
            </div>
            </div> */}
        </div>
      </div>)
  
}

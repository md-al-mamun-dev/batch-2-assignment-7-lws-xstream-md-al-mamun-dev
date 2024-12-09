
import Modal from "@/components/Modal"
import Image from "next/image"
import { getDictionary } from "@/dictionaries/dictionaries"
import RecommendedVideos from "./RecommendedVideos"

async function getVideo(id) {
  const videos = ()=>import("../../../../../data/videos.json").then(module => module.default)
  const data = await videos()
  const videoData =  data.find(vdo=>vdo.videoId === id)
  return videoData
}
export default async function page({params: { videoId, lang }}) {
    const video = await getVideo(videoId)
    const dict = await getDictionary(lang)

    console.log(video)
    console.log(dict)
    return <Modal>
                <main class=" grid gap-6">
                    <div class="">
                    <div class="relative">
                        <iframe src="https://www.youtube.com/embed/hecODa5ZgZM" title="YouTube video player" frameborder="0"
                        class="w-full aspect-video h-[500px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <div class="flex items-center space-x-4">
                                <button class="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                </button>
                                <div class="bg-color-purple text-white px-2 py-1 rounded text-sm">{dict?.live}</div>
                                <span class="text-sm">46:02</span>
                                <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                                {dict?.donate}
                                </button>
                            </div>
                        </div>
                    </div>
                    <h1 class="text-2xl font-bold mt-4 px-4">
                        {video?.title}
                    </h1>
                    <div class="flex items-center space-x-4 my-2 px-4">
                        {/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
                        <Image src="/assets/avatar.png" alt="Avatar" height={40} width={40} className="w-10 h-10 rounded-full" />
                        <div>
                        <p class="font-semibold">{video?.channelTitle}</p>
                        </div>
                        <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
                        {dict?.subscribe}
                        </button>
                    </div>
                    </div>
                    <RecommendedVideos dict={dict} lang={lang}/>
                    {/* <div class="w-full px-4">
                    <h2 class="text-xl font-semibold mb-4 ">{dict?.you_may_like}</h2>
                    <div class="space-x-4 flex flex-wrap ">
                        <div class="flex items-start space-x-4 ">
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
                        </div>
                    </div>
                    </div> */}
                </main>
    </Modal> 
    

  return (
    <Modal>
        {/* flex flex-col lg:flex-row */}
        <main class="grid gap-6 pb-6 rounded-lg overflow-hidden w-[950px]">
            <div class="">
                <div class="relative">
                <iframe src="https://www.youtube.com/embed/hecODa5ZgZM" title="YouTube video player" frameborder="0"
                    class="w-full aspect-video h-[500px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <div class="flex items-center space-x-4">
                    <button class="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </button>
                    <div class="bg-color-purple text-white px-2 py-1 rounded text-sm">{dict?.live}</div>
                    <span class="text-sm">46:02</span>
                    <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                        {dict?.donate}
                    </button>
                    </div>
                </div>
                </div>
                <h1 class="text-2xl font-bold mt-4 px-10 ">
                {video?.title}
                </h1>
                <div class="flex items-center space-x-4 mt-2 px-10 ">
                {/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
                <img src="/assets/avatar.png" alt="Avatar" class="w-10 h-10 rounded-full" />
                <div>
                    <p class="font-semibold">{video?.channelTitle}</p>
                </div>
                <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
                    {dict?.subscribe}
                </button>
                </div>
            </div>
            <RecommendedVideos dict={dict} lang={lang}/>
        </main>
    </Modal>
    
  )
}
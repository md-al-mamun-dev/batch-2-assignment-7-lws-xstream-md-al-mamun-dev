import VideoPlayer from "@/components/VideoPlayer"
import { getDictionary } from "@/dictionaries/dictionaries"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

async function getVideo(id) {
  const videos = ()=>import("../../../../data/videos.json").then(module => module.default)
  const data = await videos()
  const videoData =  data.find(vdo=>vdo.videoId === id)
  if(videoData){
    return videoData
  }else{
    notFound()
  }
}

async function getRecommendations() {
    const videos = ()=>import("../../../../data/videos.json").then(module => module.default)
    const allVideos = await videos()
    const count = 3
    if (allVideos.length <= count) return allVideos;
    const shuffled = allVideos.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }


export default async function page({params: { videoId, lang }}) {
    const video = await getVideo(videoId)
    const dict = await getDictionary(lang)

    const recommendations = await getRecommendations()
    console.log(recommendations)

  return (
        <main class="flex flex-col lg:flex-row gap-6">
          <div class="lg:w-3/4">
                  <div class="relative">
                    <VideoPlayer  url="https://www.youtube.com/embed/hecODa5ZgZM"/>
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
                            {dict.donate}
                        </button>
                        </div>
                    </div>
                  </div>
                  <h1 class="text-2xl font-bold mt-4">
                    {video?.title}
                  </h1>
                  <div class="flex items-center space-x-4 mt-2">
                  <Image src="/assets/avatar.png" alt="Avatar" height={40} width={40} class="w-10 h-10 rounded-full" />
                  <div>
                      <p class="font-semibold">{video?.channelTitle}</p>
                  </div>
                  <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
                      {dict?.subscribe}
                  </button>
                  </div>
            </div>
            <div class="lg:w-1/4">
              <h2 class="text-xl font-semibold mb-4">{dict?.you_may_like}</h2>
              <div class="space-y-4">
                {
                    recommendations.map(recomendItem =>
                        <Link key={recomendItem?.videoId} href={`/${lang}/videos/${recomendItem?.videoId}`} class="flex items-start space-x-4">
                            <Image src={recomendItem.thumbnail} width={120} height={80} class="w-30 h-20 rounded object-cover" alt="" /> 
                            <div>
                                <h3 class="font-semibold">{recomendItem?.title}</h3>
                                <p class="text-sm text-gray-400">{recomendItem?.channelTitle}</p>
                                <p class="text-sm text-gray-400">26,389M</p>
                            </div>
                        </Link>
                    )
                }
              </div>
          </div>
        </main>

    
  )
}

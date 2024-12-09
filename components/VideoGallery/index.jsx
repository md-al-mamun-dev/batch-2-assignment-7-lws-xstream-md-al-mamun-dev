import GalleryItem from "./GalleryItem"

async function getVideos() {
    const videos = ()=>import("../../data/videos.json").then(module => module.default)
    return await videos()
  }
export default async function VideoGallery({lang, dictionary}) {
    const videos = await getVideos()



  return (
    <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{dictionary.streams_of_the_day}</h2>
          <a href="#" className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full">{dictionary.view_all}</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {
            videos.map(video=> <GalleryItem key={video?.videoId} data={video} lang={lang}/>)
          }
        </div>
      </section>
  )
}

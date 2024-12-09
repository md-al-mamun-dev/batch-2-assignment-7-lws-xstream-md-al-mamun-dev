import Image from "next/image"
import Link from "next/link"


export default function GalleryItem({data, lang}) {

  return (
    <Link href={`${lang}/videos/${data?.videoId}`} className="rounded-lg overflow-hidden bg-color-gray">
        <div className="relative w-full h-40 object-cover">
            <Image src={data?.thumbnail} fill alt="" className="object-cover"/>
        </div>
        <div className="p-2">
            <p className="font-semibold">{data?.title}</p>
            <p className="text-sm text-gray-400">{data?.channelTitle}</p>
        </div>
    </Link>
  )
}

import Image from "next/image"
import Link from "next/link"

export default function RecommendationItem({data, lang}) {
    console.log(data)
  return (
      <Link href={`/${lang}/videos/${data?.videoId}`} class="flex items-start space-x-4">
        <Image src={data?.thumbnail} width={120} height={80} alt="" className="object-cover rounded"/>
        <div>
            <h3 class="font-semibold truncate ">{data?.title}</h3>
            <p class="text-sm text-gray-400">{data?.channelTitle}</p>
            <p class="text-sm text-gray-400">26,389M</p>
        </div>
      </Link>
  )
}

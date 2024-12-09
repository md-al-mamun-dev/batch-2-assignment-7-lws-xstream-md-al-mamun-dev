
export default function VideoPlayer({url}) {
  return (
    <iframe src={url} title="YouTube video player" frameborder="0"
        class="w-full aspect-video h-[500px]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
  )
}

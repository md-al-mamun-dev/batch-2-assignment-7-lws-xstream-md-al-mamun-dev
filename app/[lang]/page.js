// import { getDictionary } from "./dictionaries/dictionaries";
import DictionaryDataInject from "@/components/DictionaryDataInject";
import VideoGallery from "@/components/VideoGallery";
import Hero from "@/components/Hero";
import { getDictionary } from "@/dictionaries/dictionaries";

export default async function Home({params: { lang }}) {
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero                 dictionary={dict} lang={lang}/>
      <VideoGallery         dictionary={dict} lang={lang}/>
      {/* <DictionaryDataInject dictionary={dictionary}/> */}
    </>
  );
}

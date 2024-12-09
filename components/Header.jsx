"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import useDictionaryData from "@/context/dictionary/useDataContext"

export default function Header() {
  const {data: { dict, lang }} = useDictionaryData()
  // const {lang, dict } = data
  const pathname = usePathname()
  const router = useRouter()

  function handleLanguageSelect(e) {
    if(e.target.value != lang){
      const targetRoute = '/'+ [e.target.value, ...pathname.split('/').slice(2)].join('/')
      window.location.href = targetRoute
    }
  }

  return (
    <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-8">
            <Link href={`/${lang}`} className="h-6 w-48 relative">
                <Image src="/assets/logo.svg" alt="LWS Xstream Logo" className="h-6" fill />
            </Link>
          <nav className=" hidden md:flex space-x-6">
            {/* <a href="#" className="text-color-purple font-semibold">{dictionary.top_streaming}</a> */}
            <a href="#" className="text-gray-400 hover:text-white">{dict.games}</a>
            <a href="#" className="text-gray-400 hover:text-white">{dict.teams}</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex gap-4 items-center">
            <label for="language">{dict?.language}</label>
            <select onChange={handleLanguageSelect} value={lang} className="text-dark bg-gray-500 px-2 py-1 rounded-lg" id="language" name="language">
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>
          </div>
          
          <div className="relative">
            <input type="text" placeholder={dict.search}
              className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple" />
            <svg className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <Image src="/assets/avatar.png" alt="User Avatar" height={32} width={32} className="w-8 h-8 rounded-full" />
        </div>
      </header>
  )
}

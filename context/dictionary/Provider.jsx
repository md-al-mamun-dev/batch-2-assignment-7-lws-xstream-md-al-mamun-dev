"use client"
import { createContext, useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

export const Context = createContext();

const defaultData = {
                            "top_streaming": "TOP STREAMING",
                                    "games": "GAMES",
                                    "teams": "TEAMS",
                                "search": "search",
                        "streams_of_the_day": "Streams of the day",
                            "coming_soon": "coming soon",
                                "view_all": "view all",
                                "hero_text": "PLAY, COMPETE, FOLLOW POPULAR STREAMERS",
                            "hero_sub_text": "The best streamers gather here to have a good time, be among us, join us!"
                        }

export default function Provider({children}){
    const pathname = usePathname();
    const lang = pathname.split('/').filter(item => item.trim() !== '')[0] || '';
    const [data, setData] = useState({
                                        lang:'en',
                                        dict: defaultData
                                    })


    useEffect(() => {
        let ignore = false; 
        const loadDictionary = async () => {
            
            const dictionaries = {
                en: () => import("../../dictionaries/en.json").then(module => module.default),
                bn: () => import("../../dictionaries/bn.json").then(module => module.default)
            };
    
            if (!ignore && lang.length > 0) {
                if (lang.length > 0 && dictionaries[lang]) {
                    try {
                        const dictionary = await dictionaries[lang]();
                        setData(prevData => ({ ...prevData, lang: lang, dict: dictionary }));
                    } catch (error) {
                        console.error("Error loading dictionary:", error);
                    }
                }
            }
        };
        if(!ignore){
            loadDictionary();
        }
        return () => {
            ignore = true;
        };
    }, [lang]);

    
    return  (<Context.Provider value={{ data, setData }}>
                {children}
            </Context.Provider>)
}



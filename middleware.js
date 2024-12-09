import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let defaultLocal = "en"
let locales = ["en", "bn"];

function getLocale(request){
        const acceptedLanguage = request.headers.get("accept-language") ?? undefined
        const headers = { "accept-language": acceptedLanguage }
        const languages  = new Negotiator({ headers}).languages()
        return match(languages, locales, defaultLocal)
    }

export function middleware(request){
    // Get the pathname from request url 
    const pathname = request.nextUrl.pathname
    const pathNameIsMissingLocale = locales.every(locale => 
                                                    !pathname.startsWith(`/${locale}`) 
                                                &&  !pathname.startsWith(`/${locale}/`)); 
    if(pathNameIsMissingLocale){
        // Detect users preference & redirect with a local with a path eg: /en/
        const locale = getLocale(request)
        request.nextUrl.pathname = `/${locale}${pathname}`
        return NextResponse.redirect(request.nextUrl, request.url)
    }
    return NextResponse.next()
}
export const config = {
    matcher: [
      '/((?!api|data|context|assets|dictionaries|.*\\..*|_next).*)',
    ],
  }

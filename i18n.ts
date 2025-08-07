
import { getRequestConfig } from 'next-intl/server'
import { messages } from './app/util';

export const COOKIE_LOCALE_KEY = "NEXT_LOCALE"

export const LOCALES = ["en", "es"];        export const DEFAULT_LOCALE = "en"
 
export default getRequestConfig( async ({ locale }) => {
    
    locale = locale || DEFAULT_LOCALE;          return { locale, messages: await messages(locale) }

} )
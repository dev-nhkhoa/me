import { INFO } from '~/components/Infomation'

const quotes = INFO.quotes

export const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

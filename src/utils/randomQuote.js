import { INFO } from '~/app/info'

const quotes = INFO.quotes

export const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

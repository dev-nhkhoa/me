import { PROFILE_CONFIG } from '~/config/profile.jsx'

const { quotes } = PROFILE_CONFIG

export const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

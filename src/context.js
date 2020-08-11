import React from "react"

export const LocaleContext = React.createContext("en-gb")
export const useLocale = () => React.useContext(LocaleContext)

const { localeToCountryCode } = require("./localeToCountryCode")

exports.linkResolver = doc => {
  switch (doc.type) {
    case "page_2": {
      return `/${localeToCountryCode(doc.lang)}/page-2`
    }

    default: {
      return `/${localeToCountryCode(doc.lang)}`
    }
  }
}

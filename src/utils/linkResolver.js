const { localeToCountryCode } = require("./localeToCountryCode")

exports.linkResolver = doc => {
  // This seems to work but I don't know why... 🤔
  // const localize = path =>
  // `/${!doc.last_publication_date ? doc.lang : localeToCountryCode(doc.lang)}${
  //   path === "/" ? "" : path
  // }`

  const localize = path =>
    `/${localeToCountryCode(doc.lang)}${path === "/" ? "" : path}`

  switch (doc.type) {
    case "page_2": {
      return localize(`/page-2`)
    }

    case "post": {
      return localize(`/posts/${doc.uid}`)
    }

    default: {
      return localize(`/`)
    }
  }
}

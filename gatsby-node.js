const { linkResolver } = require("./src/utils/linkResolver")
const { localeToCountryCode } = require("./src/utils/localeToCountryCode")

const removeTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``)

const modifiedPages = []

exports.onCreatePage = ({ page, actions }) => {
  if (modifiedPages.includes(page.path)) {
    return
  }

  console.log("onCreatePage")

  if (page.path === "/preview") {
    const oldPage = { ...page }

    page.context = {
      ...oldPage.context,
      prismicAllPagePaths: oldPage.context.prismicAllPagePaths.map(path =>
        removeTrailingSlash(
          // Replace loacle code in /preview page context paths so Prismic can redirect to the right page
          // e.g. `/en-gb/foo` → `/gb/foo`
          path.replace(
            /^\/([a-z]{2}-[a-z]{2})(?:\/|$)/,
            (match, p1) => `/${localeToCountryCode(p1)}/`
          )
        )
      ),
    }

    actions.deletePage(oldPage)
    actions.createPage(page)
  } else {
    if (["preview", "404"].some(path => page.path.includes(path))) {
      return
    }

    const oldPage = { ...page }
    const newPath = linkResolver(page.context)

    page.path = newPath

    if (page.path !== oldPage.path) {
      actions.deletePage(oldPage)
      actions.createPage(page)
    }
  }

  modifiedPages.push(page.path)
}

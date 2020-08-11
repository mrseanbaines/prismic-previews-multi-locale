const React = require("react")
const {
  registerLinkResolver,
} = require("@prismicio/gatsby-source-prismic-graphql")

const { linkResolver } = require("./src/utils/linkResolver")
const { LocaleContext } = require("./src/context")

registerLinkResolver(linkResolver)

exports.wrapPageElement = ({ element, props }) => {
  return (
    <LocaleContext.Provider value={props.pageContext.lang}>
      {element}
    </LocaleContext.Provider>
  )
}

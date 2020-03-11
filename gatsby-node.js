/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

//Using onCreateNode to create the path or "slug" to our page
//This onCreateNode function will be called by Gatsby whenever a new node is created (or updated)
//To see changes, you must stop and restart the server

//The below function handles finding the parent file node along with creating the slug
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if(node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({node, getNode, basePath: "data"})

        //Now we can add new slugs directly onto the MarkdownRemark nodes.
        //The below function allow us to create additonal fields on nodes created by other plugins
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

//Added an implementation of the createpages API which Gatsby calls so plugins can add pages
//You need one additional thing beyond a slug to create pages: a page template component.  
//Like everyting in Gatsby, programmatic pages are powered by React components.
//When creating a page, you need to specify which component to use.

//The "createPages" method will create our pages on the fly as long as we provide the React component
exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function "createPages" returns a Promise
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise from more info on Promises

    const { createPage } = actions

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.allMarkdownRemark.edges.forEach((item) => {
        createPage({
            path: item.node.fields.slug,
            component: path.resolve("./src/templates/post.js"),
            context: {
                slug: item.node.fields.slug
            }
        })
    })
}

import React from "react"

//Adding the "Link" component from the "gatsby" library will allow you 
//to link internal pages
//uses react-router underneath
import { Link } from "gatsby"

//Adding the "Layout" component will allow you to keep consistent layouts throughtout
//your app
//To make adjustments to the "Layout" component, go to the layout.js file
import Layout from "../components/layout"
import SEO from "../components/seo"

//Replacing the previous content with our "People" component.  I can now reuse the
//component with my custom styles only applied to that component using CSS Modules
import People from "../components/people"

//Adding a component inside the 'pages' directory will automatically create
//that page for you with the path "/bio"
const Bio = () => {
    return (
        <Layout>
            <SEO title="Bio" />
            <People 
                avatar="https://source.unsplash.com/random/"
                title="Chris"
                excerpt="This is some text."
            />
            <People 
                avatar="https://source.unsplash.com/random/"
                title="Sue"
                excerpt="This is some text."
            />
            <People 
                avatar="https://source.unsplash.com/random/"
                title="Matt"
                excerpt="This is some text."
            />
            <Link to="/">&larr; Back to Home</Link>
        </Layout>
    )
}

export default Bio
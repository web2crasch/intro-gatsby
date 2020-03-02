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

//Adding a component inside the 'pages' directory will automatically create
//that page for you with the path "/bio"
const Bio = () => {
    return (
        <Layout>
            <SEO title="Bio" />
            <img src="https://source.unsplash.com/random/400x200" alt=""/>
            <h1>Hi, My name is Chris.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam qui, a expedita animi libero? Amet sint blanditiis alias soluta iure accusamus illum cupiditate odio consequuntur ipsa esse vitae corrupti nesciunt, voluptatibus fugiat nulla quia cum sapiente! Molestias sapiente pariatur velit praesentium unde mollitia. Eos voluptatibus dolorem nemo, nulla nam eligendi eaque delectus labore optio, reprehenderit minus consectetur illum sapiente. Ab iure incidunt recusandae dolor, eos, aspernatur quod soluta repellat magnam quas error in eum delectus, eligendi nisi. Doloribus quidem dolorum inventore cumque quisquam nihil accusamus officia quibusdam qui nisi. Eum quidem et doloribus perspiciatis sed vero officia nam nesciunt?
            </p>
            <Link to="/">&larr; Back to Home</Link>
        </Layout>
    )
}

export default Bio
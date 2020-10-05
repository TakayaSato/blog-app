import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Button, Container } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Style from './blogDetail.module.scss'

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}){
        title
        createdDate
        body {
            json
        }
        }
    }
`
function blogDetail(props) {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                return(<img className={Style.image}
                src={node.data.target.fields.file['en-US'].url} 
                alt={node.data.target.fields.file['en-US'].title} />)
            }
        }
    }
    return (
        <Layout className={Style.blogDetailWrap}>
            <Container className={Style.containTop}>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <p>{props.data.contentfulBlogPost.createdDate}</p>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </Container>
            <Container className={Style.containBottom}>
                <Button href="/" variant="outline-dark">一覧へ戻る</Button>
            </Container>
        </Layout>
    )
}

export default blogDetail
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import { Container, Row, Col } from "react-bootstrap"
import BlogItem from "../components/blogitem"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: {
      fields: createdDate,
      order: ASC
    }) {
      edges {
        node {
          title
          slug
          createdDate(formatString: "YYYY/MM/DD")
          thumbnail {
            fluid {
              src
            }
          }
        }
      }
    }
  }
  `)
  console.log('data',data)
  return (
    <Layout>
      <Header />
      <Container>
        <Row>
          {
            data.allContentfulBlogPost.edges.map((edge, index) => (
              <Col sm={4} key={index}>
                <BlogItem
                    title={edge.node.title}
                    date={edge.node.createdDate}
                    src={edge.node.thumbnail.fluid.src}
                    link={`/blog/${edge.node.slug}`}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Layout>
  )
}
export default IndexPage

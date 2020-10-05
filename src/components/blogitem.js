import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "gatsby"
import Style from "./blogitem.module.scss"

function BlogItem({title, date, src, link}) {
    return (
       <Card className={Style.blogitemWrap}>
           <Card.Img variant="top" src={src} />
           <Card.Body>
                <Link className={Style.links} to={`${link}`}>
                    <Card.Title>{title}</Card.Title>
                </Link>
               <Card.Text className={Style.subTitle}>
                   {date}
               </Card.Text>
           </Card.Body>
       </Card>
    )
}
export default BlogItem
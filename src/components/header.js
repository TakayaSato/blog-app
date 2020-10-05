import React from "react"
import {Container, Col, Row} from 'react-bootstrap'
import Style from './header.module.scss'

function Header(){
    return(
        <div className={Style.wrap}>
            <div className={Style.overlay}></div>
            <Container className={Style.content}>
                <Row>
                    <Col sm={12} className="mx-auto">
                        <div className={Style.siteHeading}>
                            <h1>Blog</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header

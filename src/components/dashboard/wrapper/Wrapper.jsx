//TopBar
//MainMenu
//RightMenu

import {Row, Col, Container } from "react-bootstrap"

import TopBar from "./TopBar"
import RightSideMenu from "./RightSideMenu/RightSideMenu"
import MainMenu from "./MainMenu/MainMenu"
import Content from "./Content"

import style from './css/Wrapper.module.css'

const Wrapper = ({children}) => {
    return ( 
        <Container className={style.Main_Container} fluid>
            <TopBar />
            <Row className={style.Main_Content}>
                <Col className={style.LeftSide}  xl={10}>
                    <MainMenu />
                    <Content>
                        {children}
                    </Content>
                </Col>
                <RightSideMenu />
            </Row>
        </Container>
    )
}

export default Wrapper
import style from '../../css/RightSideMenu.module.css'

import {Row,Col} from 'react-bootstrap'

import NotyficationElement from './NotyficationElement'

const Notyfications = ({notyficationList}) => {
    return (
        <Row className='d-flex justify-content-center pt-2'>
            <Col xs={11} className={style.NotyficationsList}>
                {notyficationList.map((notyficationDetails,index) => {
                    return <NotyficationElement key={index} notyficationDetails={notyficationDetails} />
                })}
            </Col>
        </Row>
    )
}

export default Notyfications
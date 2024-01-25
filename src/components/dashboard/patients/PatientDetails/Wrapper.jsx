import {Row,Col} from 'react-bootstrap'

import style from './css/PatientDetails.module.css'

const Wrapper = ({children}) => {
    return (
        <Row className={style.Container}>
            <Col lg={11} className={style.Positioner}>
                {children}
            </Col>
        </Row>
    )
}
export default Wrapper
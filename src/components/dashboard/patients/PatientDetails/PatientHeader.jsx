import { Row,Col } from "react-bootstrap"

import ActionButton from "../../../utility/ActionButton"

import style from './css/PatientDetails.module.css'

const PatientHeader = () => {
    return (
        <Row className={`${style.Patient_Header} pt-1`}>
            <Col xs={9} className='text-light pt-1 ps-5'>
                <h6>Barbara Kret</h6>
            </Col>
            <Col xs={3}>
                <ActionButton className='btn-bg-pink px-4' >
                    Wyświetl
                </ActionButton>
            </Col>
        </Row>
    )
}

export default PatientHeader
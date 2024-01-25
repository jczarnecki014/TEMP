import {Col, Form, Row} from 'react-bootstrap'

import PatientHeader from './PatientHeader'
import Wrapper from './Wrapper';

import { FaUser } from "react-icons/fa";

import LabelInput from '../../../utility/LabelInput';

import style from './css/PatientDetails.module.css'
import AvatarSection from './sections/AvatarSection';
import ContactSection from './sections/ContactSection';
import ChildrenSection from './sections/ChildrenSection';

const PatientDetails = () => {
    return (
        <Col className={style.Patient_Details} xl={7}>
            <PatientHeader />
            <Wrapper>
                <AvatarSection />
                <ContactSection />
                <ChildrenSection />
            </Wrapper>
        </Col>
    )
}

export default PatientDetails
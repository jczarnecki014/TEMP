import {Col, Form} from 'react-bootstrap'
import style from '../css/PatientDetails.module.css'

import { FaUser } from "react-icons/fa";
import LabelInput from '../../../../utility/LabelInput';

const AvatarSection = () => {
    return (
        <Col className={style.Avatar_Section}>
            <div className={style.Avatar}>
                <FaUser size={70} color="#fff"/>
            </div>
            <div className={style.Main_Details}>
                <Form>
                    <LabelInput id='name' type='text' readonly={true} boxShadow={true} label='Imie' value='Barbara' className='mb-2'  />
                    <LabelInput id='lastName' type='text' readonly={true} boxShadow={true} label='Nazwisko' value='Kret'  />
                </Form>
            </div>
        </Col>
    )
}
export default AvatarSection;
import {Col, Form} from 'react-bootstrap'

import style from '../css/PatientDetails.module.css'

import LabelInput from '../../../../utility/LabelInput';

const ContactSection = () => {
    return (
        <Col className={style.Contact_Details_Section}>
            <h4>Dane kontaktowe</h4>
            <Form className={style.Details}>
                <div className={style.inlineBlock}>
                    <LabelInput id='city' type='text' readonly={true} boxShadow={true} label='Miejscowość' value='Jelenia Góra' className='mb-2'  />
                </div>
                <div className={style.inlineBlock}>
                    <LabelInput id='street' type='text' readonly={true} boxShadow={true} label='Ulica' value='Wolności' className='mb-2'  />
                </div>
                <div id={style.Zip_Code} className={style.inlineBlock}>
                    <LabelInput id='zipCode' type='text' readonly={true} boxShadow={true} label='Kod Pocztowy' value='58-560' className='mb-2'  />
                </div>
                <div id={style.Province} className={style.inlineBlock}>
                    <LabelInput id='province' type='text' readonly={true} boxShadow={true} label='Województwo' value='Dolnośląskie' className='mb-2'  />
                </div>
                <div className={style.inlineBlock}>
                    <LabelInput id='phone' type='text' readonly={true} boxShadow={true} label='Telefon' value='603 457 231' className='mb-2'  />
                </div>
                <div className={style.inlineBlock}>
                    <LabelInput id='email' type='text' readonly={true} boxShadow={true} label='Email' value='kretbarbarbara311@wp.pl' className='mb-2'  />
                </div>
            </Form>
        </Col>
    )
}
export default ContactSection;
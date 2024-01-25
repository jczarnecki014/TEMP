import {Col} from 'react-bootstrap'

import { FaUser } from "react-icons/fa";

import style from '../css/PatientDetails.module.css'


const ChildrenSection = () => {
    return (
        <Col className={style.Children_Section}>
            <h4>Dzieci</h4>
            <div id={style.children} className={style.Details}>
                <div className={style.Children_Element}>
                    <div className={style.Icon}>
                        <FaUser size={30} color="#fff"/>
                    </div>
                    Alicja Kret
                </div>
                <div className={style.Children_Element}>
                    <div className={style.Icon}>
                        <FaUser size={30} color="#fff"/>
                    </div>
                    Alicja Kret
                </div>
            </div>
        </Col>
    )
}
export default ChildrenSection;
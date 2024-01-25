import {Col} from 'react-bootstrap'

import {motion} from 'framer-motion'

import { FaUser } from "react-icons/fa";

import style from './css/PatientSearch.module.css'

const PatientsItem = ({patientDetails}) =>{
    return (
        <Col xl={4} className='mb-3'>
            <motion.div key={patientDetails.id} initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}} end={{opacity:0,scale:0}} transition={{duration:0.3}} 
                        whileHover={{scale:0.9,border:'3px solid #CB60C8',cursor:'pointer', transition:{type:'spring',duration:'0.3'}}} className={style.Patient_Block} 
            >
                <div className={style.Icon}>
                    <FaUser size={50} />
                </div>
                <div className={style.Details}>
                    <h6>{patientDetails.name}</h6>
                    <small>{patientDetails.city}</small>
                    <small>ul.{patientDetails.addres}</small>
                </div>
            </motion.div>
        </Col>
    )
}

export default PatientsItem
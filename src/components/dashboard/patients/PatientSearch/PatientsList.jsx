
import PatientsItem from './PatientsItem';

import style from './css/PatientSearch.module.css'

import {AnimatePresence} from 'framer-motion'

import { GetPatientsListFilteredByTerm } from '../../../../assets/main/GetPatientsListFilteredByTerm';

const RenderPatients = (patientsList,searchTerm) => {
    if(searchTerm.trim().length > 0) {
        patientsList = GetPatientsListFilteredByTerm(patientsList,searchTerm)
    }

    const patientsToRender = patientsList.map((patientDetails,index)=>{
        return (
                <PatientsItem key={index} patientDetails={patientDetails} />
        )
    })

    return patientsToRender;
}



const PatientsList = ({patientsList,searchTerm}) => {
    return (
            <div className={`${style.Search_Result} row px-5 mt-3`}>
                <AnimatePresence>
                    {RenderPatients(patientsList,searchTerm)}
                </AnimatePresence>
            </div>
    )
}

export default PatientsList;
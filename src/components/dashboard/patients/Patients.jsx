import React,{ Fragment} from 'react';

import {Col} from 'react-bootstrap'

import { DUMMY_PATIENTS } from '../../../assets/DUMMY_DATA/DUMMY_PATIENTS';

import PatientSearch from './PatientSearch/PatientSearch';
import PatientDetails from './PatientDetails/PatientDetails';




const Patients = () => {

    return (
        <Fragment>
             <PatientSearch />
             <PatientDetails /> 
        </Fragment>
    )
}

export default Patients
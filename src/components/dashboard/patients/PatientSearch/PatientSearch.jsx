import {useState} from 'react'

import {Col} from 'react-bootstrap'

import PatientSearchHeader from './PatientsSearchHeader';
import PatientsList from './PatientsList';

import style from './css/PatientSearch.module.css'

import { DUMMY_PATIENTS } from '../../../../assets/DUMMY_DATA/DUMMY_PATIENTS';

const PatientSearch = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const SearchTermChangeHandler = (serachInputValue) => {
        setSearchTerm(serachInputValue)
    }

    return (
        <Col className={style.Serach_User} xs={12} xl={5}>
            <PatientSearchHeader whenSearchTermChange={SearchTermChangeHandler} searchTerm={searchTerm} />
            <PatientsList patientsList={DUMMY_PATIENTS} searchTerm={searchTerm} />    
        </Col>
    )
}

export default PatientSearch;

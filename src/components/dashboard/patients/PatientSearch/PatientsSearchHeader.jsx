import {Row,Col} from 'react-bootstrap'

import IconInput from '../../../utility/IconInput'
import ActionButton from '../../../utility/ActionButton';

import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import style from './css/PatientSearch.module.css'

const PatientSearchHeader = ({whenSearchTermChange,searchTerm}) => {

    const SerachInputTypingHandler = (event) => {
        whenSearchTermChange(event.target.value)
    }

    const SearchInputClearHandler = () => {
        whenSearchTermChange('')
    }


    return (
        <Row className={style.Search_Header}>
            <Col md={12} className='d-flex justify-content-between ps-5'>
                <ActionButton className='btn-bg-green'>
                    Dodaj
                </ActionButton>

                <Col xs={8} lg={6} xl={4} className='me-3'>
                    <IconInput inputValue={searchTerm} inputTyping={SerachInputTypingHandler}>
                        {searchTerm.length > 0 ? <IoClose onClick={SearchInputClearHandler} /> : <CiSearch /> }
                    </IconInput>
                </Col>
            </Col>
        </Row>
    )
}
export default PatientSearchHeader;
import {Row} from 'react-bootstrap'

import style from './css/Content.module.css'

const Content = ({children}) => {
    return (
        <Row className={style.Pages_Content}>
            {children}
        </Row>
    )
}

export default Content
import React from 'react';

import style from './css/IconInput.module.css'

import { Row,Col } from 'react-bootstrap';

const IconInput = (props) => {
    return (
            <Row className={style.IconInput_Box}>
                <Col xs={10}>
                    <input placeholder='Imie i nazwisko' value={props.inputValue} onInput={props.inputTyping} />
                </Col>
                <Col xs={2}>
                    {props.children}
                </Col>
            </Row>
    );
  };

export default IconInput
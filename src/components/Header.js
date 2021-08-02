import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { GET_DETAILS } from './../constants/actionTypes';


function Header() {

    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => dispatch({ type: GET_DETAILS, payLoad: data })
    const resetValues = () => {
        reset({ country: '', state: '', city: '' });
    }

    return (
        <Row className="g-4">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Country">
                    <Form.Control {...register("country", { required: true })} type="text" placeholder="Type Country Code" />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="State">
                    <Form.Control {...register("state", { required: true })} type="text" placeholder="State Name" />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="City">
                    <Form.Control {...register("city", { required: true })} type="text" placeholder="City Name" />
                </FloatingLabel>
            </Col>
            <Col md>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>Submit</Button>
                <Button type="submit" className="reset-Btn" onClick={resetValues}>Reset</Button>
            </Col>
        </Row>
    )
}

export default Header

import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useForm } from 'react-hook-form'

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data:any) => {
        alert('Fetching...')
    }


  return (
        <Container className="d-flex flex-column justify-content-center">
            <h2 className="text-center p-5">React hook form</h2>
            <Form className="loginForm shadow p-3 ms-auto me-auto border rounded" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="usernameForm">
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control isInvalid={!!errors.username} type="text" placeholder="Введите имя пользователя..." {...register("username", {
                        required: 'Обязательное поле',
                        minLength: 5,
                        maxLength: 20
                    })}/>
                    {errors.username && errors.username.type === "required" && <Form.Text className="error">Обязательное поле</Form.Text>}
                    {errors.username && errors.username.type === "minLength" && <Form.Text className="error">Не менее 5 символов</Form.Text>}
                    {errors.username && errors.username.type === "maxLength" && <Form.Text className="error">Не более 20 символов</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="passwordForm">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control isInvalid={!!errors.password}  type="password" placeholder="Укажите пароль для входа..." {...register("password", {
                        required: 'Обязательное поле',
                        pattern: /^[a-z0-9_\-*]+$/
                    })}/>
                    {errors.password && errors.password.type === "required" && <Form.Text className="error">Обязательное поле</Form.Text>}
                    {errors.password && errors.password.type === "pattern" && <Form.Text className="error">Только цифры и малые английские символы + спец символы (_,-,*) </Form.Text>}
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Вход
                </Button>
            </Form>

        </Container>
  );
}

export default App;

import React, { useState } from 'react';
import register from 'services/register'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const validateFields = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required username';
    }
    if (!values.password) {
        errors.password = 'Required password';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    return errors;
}


const initialValues = {
    username: '',
    password: '',
}

export default function Register() {

    const [registered, setRegistered] = useState(false);

    if (registered) {
        return <h4>You have been successfully registered</h4>
    }

    return (
        <div className="form-container">

            {/* <h1>Formulario de Registro</h1> */}
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={(values, { setFieldError }) => {
                    return register(values)
                        .then(() => {
                            setRegistered(true);
                        })
                        .catch(() => {
                            setFieldError('username', 'El usuario no es válido')
                        })
                }}
            >
                {
                    ({ errors, isSubmitting, values }) => (
                        <Form className="form" >
                            <label for="username">
                                Nombre de usuario:
                            </label>
                            <Field type="text" className={errors.password ? 'error' : ''} placeholder='Username' name="username" value={values.username} />
                            <ErrorMessage name="username" component="small" className="form-errors" />

                            <label for="password">
                                Contraseña:
                            </label>
                            <Field type="password" className={errors.password ? 'error' : ''} placeholder='Password' name="password" value={values.password} />
                            <ErrorMessage name="password" component="small" className="form-errors" />

                            <button type="submit" className="submit-btn" disabled={isSubmitting}>Registrar</button>

                        </Form>
                    )

                }
            </Formik>

        </div>
    )
}
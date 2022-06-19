import React, { useState } from 'react';
import registerService from 'services/register'
import { useForm } from 'react-hook-form'

export default function Register() {
    const { handleSubmit, register, formState:{errors} } = useForm()
    const [registered, setRegistered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (data) => {
        setIsSubmitting(true)
        registerService(data)
            .then(() => {
                setRegistered(true)
                setIsSubmitting(false)
            })
    }

    console.log(errors)

    if (registered) {
        return <h4>You have been successfully registered</h4>
    }

    return (
        <div className="form-container">

            {/* <h1>Formulario de Registro</h1> */}
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">
                    Nombre de usuario:
                </label>
                <input
                    type="text"
                    {...register('username', { required: 'This is required' })}
                    className={errors.username ? 'error' : ''}
                    placeholder='Username' />
                {
                    errors.username && <small className="form-errors">{errors.username.message}</small>
                }

                <label htmlFor="password">
                    Contraseña:
                </label>
                <input
                    type="password"
                    {...register('password', { required: 'This is required', minLength:{ value: 6, message: 'Password is too short'} })}
                    className={errors.password ? 'error' : ''}
                    placeholder='Password' />
                {
                    errors.password && <small className="form-errors">{errors.password.message}</small>
                }

                <button type="submit" className="submit-btn" disabled={isSubmitting}>Registrar</button>
            </form>
        </div>
    )
}
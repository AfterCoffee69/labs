import { Container, Button } from 'react-bootstrap';
import './../styles/card.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../index';
import { useNavigate }from 'react-router-dom'
import { HOME_ROUTE } from '../utils/consts';

const Card = observer((props) => {
    const { user } = useContext(Context);
    const {title, isRegistration, buttonText} = props
    const { register, reset, handleSubmit, formState: {errors, isValid}, watch } = useForm({mode: 'onBlur'});
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
        try {
            let response
            if (!isRegistration){
                response = await login(data.email, data.password);
            }
            else{
                response = await registration(data.email, data.password);
                reset()
            }
            user.setUser(response)
            user.setIsAuth(true)
            localStorage.setItem("userRole", response.role);
            localStorage.setItem("userId", response.id);
            navigate(HOME_ROUTE)

        } catch (e) {
            console.log({isRegistration});
            alert(e.response.data.message);

        }

    };
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container className='card-container'>
                    <div className="card-box">
                        <h3 className="card-title">{title}</h3>

                        <div className="card_inputbox">
                            <input className='card-input' type="text" placeholder='EMAIL' 
                            {...register('email',
                                {   
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                                })}
                            />
                            {errors.email && 
                                <span style={{color:'rgb(141, 23, 23)'}}>{errors?.email?.message || '*Некорректное заполнение поля "Email"'}</span>
                            }

                            <input className='card-input'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='PASSWORD'
                                {...register('password',
                                    {required: true,
                                        minLength:{
                                            value:8,
                                            message:'Длинна пароля должна быть не менее 8 символов'
                                        }
                                    })
                                }
                            />
                            {errors.password && (
                                <span style={{ color: 'rgb(141, 23, 23)' }}>
                                    *{isRegistration ?
                                        (errors?.password?.message || 'Поле обязательно к заполнению') : 'Поле обязательно к заполнению'}
                                </span>
                            )}

                            {isRegistration && (
                                <>
                                <input
                                    className='card-input'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='CONFIRM PASSWORD' 
                                    {...register('confirmPassword', { required: true })}
                                />
                                {errors.confirmPassword && (
                                    <span style={{ color: 'rgb(141, 23, 23)' }}>
                                    *Подтвердите пароль
                                    </span>
                                )}
                                {password && (password !== confirmPassword && confirmPassword !== '') && (
                                    <span>Пароль и подтверждение не совпадают</span>
                                )}
                                </>
                            )}

                        </div>
                        <Button 
                            variant='submit'
                            type='submit'
                            disabled={!isValid || (isRegistration && password !== watch('confirmPassword'))}
                        >   
                            {buttonText}
                        </Button>

                        {isRegistration && (
                            <div className="card_under-textbox">
                                <p>Есть аккаунт? <a href="/login">Войти</a></p>
                            </div>
                        )}
                    </div>
                </Container>
            </form>

        </>
     );
})

export default Card;
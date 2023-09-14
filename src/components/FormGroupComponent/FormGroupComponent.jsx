import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import UtilsService from '../../services/UtilsService'
import AppButton from '../AppButton/AppButton'
import SectionHook from '../SectionHook/SectionHook'
import HttpService from '../../services/HttpService';
import './FormGroupComponent.scss'
import AppInput from '../AppInput/AppInput'
import { TailSpin } from 'react-loader-spinner'
import ApplicationConstants from '../../ApplicationConstants'
import { toast } from 'react-toastify';
import { finalize } from 'rxjs'

export default function FormGroupComponent({type, hasId}) {
    const ourEmail = 'youforukraine@gmail.com';

    const [isValidCheckbox, setIsValidCheckbox] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isMessageValid, setIsMessageValid] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const [isSendingEmail, setIsSendingEmail] = useState(false);


    const types = {
        'design':  {
            header: `DIDN\`t FIND THE RIGHT DESIGN?`,
            text: `We can create a custom design for you or your company!
                Briefly describe your idea and leave your contact information, our designers
                will get in touch with you soon!`,
            placeholder: 'Describe your idea'
        },
        'email': {
            header: `have MORE questions?`,
            text: `Or fill in the form and we will reach out to you within a few days!`,
            placeholder: 'Your message'
        }
    };

    function submitButtonHandler() {
        let isFormValid = true;

        if (!termsChecked) {
            setIsValidCheckbox(false);
            isFormValid = false;
        }

        if (name.length < 2 || name.length > 40 || !UtilsService.onlyLatinCharacters(name)) {
            setIsNameValid(false);
            isFormValid = false;
        }

        if (email.length < 3 || !UtilsService.validateEmail(email)) {
            setIsEmailValid(false);
            isFormValid = false;
        }

        if (message.length < 5 || message.length > 150) {
            setIsMessageValid(false);
            isFormValid = false;
        }


        if (isFormValid) {
            setIsSendingEmail(true);
            const sub = HttpService.sendOfferEmail(name, email, message)
            .pipe(
                finalize(() => sub.unsubscribe())
            )
            .subscribe(resp => {
                setIsSendingEmail(false);
                toast(`Thank you, ${name}! \n We recieved your email. We will answer as soon as possible.`)
            });
        }
    }

  return (
      <section className='form-group-section'>
          {hasId ? <SectionHook idName={'contacts'}></SectionHook> : ''}
        <Container className='form-group-container-w'>
            <div className="form-group-container">
                <h3>{types[type].header}</h3>
                {
                    type === 'email' ?
                    <div className="email-wrapper"><a href={'mailTo:' + ourEmail}> <img src="/resources/letter.svg" alt="" />{ourEmail}</a></div>
                        : ''
                }

                <p>{types[type].text}</p>

                <AppInput
                    type="name"
                    isValid={isNameValid}
                    onFocus={() => setIsNameValid(true)}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    name={"name"}
                    id={"nameInput" + type}
                    placeholder='Name'
                    error={'name should be from 2 to 40 latin characters long'}
                />

                <AppInput
                    type="text"
                    onFocus={() => setIsEmailValid(true)}
                    name={"email"}
                    id={"emailInput" + type}
                    isValid={isEmailValid}
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    error={'invalid email'}
                />

                <AppInput
                    as='textarea'
                    type="text"
                    isValid={isMessageValid}
                    name={"describeInput" + type}
                    rows="3"
                    id={"describeInput" + type}
                    placeholder={types[type].placeholder}
                    onChange={e => setMessage(e.target.value)}
                    onFocus={() => setIsMessageValid(true)}
                    error={'message should be from 5 to 150 characters long'}
                />

                <div className="input-form-error-wrap">
                    <div className="terms-cons-wrap">
                        <div className="terms-cons">
                            <input
                                className={isValidCheckbox ? '' : 'input-error'}
                                type="checkbox"
                                name={"terms-" + type}
                                id={"terms-" + type}
                                onFocus={() => setIsValidCheckbox(true)}
                                onChange={() => setTermsChecked(!termsChecked)}
                                value={termsChecked}
                            />
                            <label htmlFor={"terms-" + type}>
                                I read and accept Terms & Conditions
                                </label>
                        </div>
                        <div
                            style={{display: isValidCheckbox ? 'none' : 'flex'}}
                            className="error-text"
                        >
                            *required
                        </div>
                    </div>
                </div>
                {
                    isSendingEmail
                    ? <TailSpin color={ApplicationConstants.COLORS.PRIMARY} height={56} width={56} />
                    : <AppButton text={"Send"} type={'blue'} action={submitButtonHandler}></AppButton>
                }
            </div>
        </Container>
      </section>
  )
}

"use client";

import {useState} from 'react';
import Link from 'next/link';
import AuthCode from 'react-auth-code-input';
import { createUser } from '@lib/register';
import { useDatabaseVerification, useEmailVerification } from '@lib/verification';
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Register',
  url: '/register'
});

export default function Register() {
    const [isVisible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const [verifying, setVerifying] = useState(false);
    const [auth, setAuth] = useState('');
    const [registerBody, setRegisterBody] = useState({});
    const [verificationLoading, setVerificationLoading] = useState(false);
    const [code, setCode] = useState(Math.random().toString().substring(2, 6));

    const Register = async () => {
        if (auth == code) {
            await createUser(registerBody);
            window.location.href = '/';
        }
    }

    const VerificationStart = async (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value,
            confirm: e.target.confirm.value,
        }

        const databaseVerification = await useDatabaseVerification(data);

        if (databaseVerification.error) {
            setError(databaseVerification.error);
            return;
        }

        setVerificationLoading(true);
        await useEmailVerification(data.email, code);
        setVerificationLoading(false);
        setVerifying(true);
        setRegisterBody(data);

    }

    const onAuthChange = (res) => {
        setAuth(res);
    }

    return(
        <div className="full_background">
                <form className="register_section" onSubmit={VerificationStart}>
                    <Link href='/'><div className='register_back'>Go Back</div></Link>
                    <img className="register_img" src="/img/main/logo.png"/>
                    <div className="register_title">Register an Account</div>
                    <div className="register_subtitle">Or <Link className="register_link" href="/login">login</Link> if you have one already</div>
                    {error !== '' && <div className='register_error'>{error}</div>}
                    <div className="register_inputs">
                        <div>
                            <label className="register_label">Username</label>
                            <input type="text" required maxLength="35" name='username' />
                        </div>
                        <div>
                            <label className="register_label">Email</label>
                            <input type="email" required maxLength="100" name='email' />
                        </div>
                        <div>
                            <label className="register_label">Password</label>
                            <input type={isVisible ? "text" : "password"} required maxLength="30" name='password' />
                        </div>
                        <div>
                            <label className="register_label">Confirm Password</label>
                            <input type={isVisible ? "text" : "password"} required maxLength="30" name='confirm'/>
                        </div>
                    </div>
                    <div className="forgotten_right">
                        <div className="register_eye" onClick={() => setVisible(!isVisible)}>
                            {isVisible ? <img src="/img/main/seen.png" className='register_eye-visible'/> : <img src='/img/main/hide.png'/>}
                        </div>
                    </div>
                    {verificationLoading ? (
                        <div class="lds-ellipsis small_loader"><div></div><div></div><div></div><div></div></div>
                    ) : (
                        <>
                            {verifying && (
                                <>
                                    <div className='account_verify'>Verification</div>
                                    <div className='account_verify-desc'>An email was sent with the code provided</div>
                                    <AuthCode onChange={onAuthChange} allowedCharacters='numeric' inputClassName='authcode_inputs' length={4} />
                            </>
                            )} 
                        </>
                    )}
                    {!verifying ? <button type="submit" className="register_btn">Continue</button> : <button type="button" className={`register_btn ${auth != code && 'register_unverified'}`} onClick={Register}>Create Account</button> }
                </form>
        </div>
    )
}
"use client";

import {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import AuthCode from 'react-auth-code-input';
import { createUser, createUserEmail } from '@lib/register';
import { useDatabaseVerification, useEmailVerification } from '@lib/verification';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { useRouter, useSearchParams } from 'next/navigation';
import { getDiscordAuth } from '@lib/discord';

const randomCode = () => Math.random().toString().substring(2, 6);

export default function Register() {
    const [isVisible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const [verifying, setVerifying] = useState(false);
    const [auth, setAuth] = useState('');
    const [registerBody, setRegisterBody] = useState({});
    const [verificationLoading, setVerificationLoading] = useState(false);
    const [code, setCode] = useState(randomCode());
    const params = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (params.get('error')) {
            setError(params.get('error'));
        }
    }, [params]);

    const googleRegister = useGoogleLogin({
        onSuccess: async res => {
            const googleResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers:{
                'Authorization': 'Bearer ' + res.access_token
            }});
            const googleData = await googleResponse.json();
            const { name, email } = googleData;
            const { error } = await createUserEmail({
                username: name, email,
                provider: 'google'
            });
            googleLogout();
            if (error) {
                setError(error);
            } else {
                window.location.href = params.get('callback') || '/';
            }
        }
    })

    const discordRegister = async () => {
        const { error, url } = await getDiscordAuth('register', (params.get('callback') || ''));
        if (error) {
            setError(error)
        } else {
            router.push(url);
        }
    }

    const Register = async (e) => {
        e.target.innerHTML = 'Creating...';
        if (auth == code) {
            await createUser(registerBody);
            window.location.href = params.get('callback') || '/';
        }
        e.target.innerHTML = 'Create Account';
    }

    const resendCode = async (e) => {
        e.target.innerHTML = 'Sending...';
        const newCode = randomCode();
        setCode(newCode);
        const emailVerified = await useEmailVerification(registerBody.email, newCode);
        if (emailVerified) {
            e.target.innerHTML = 'New code sent!';
            await new Promise(resolve => setTimeout(resolve, 2000));
            e.target.innerHTML = 'Resend Code'
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

        setRegisterBody(data);

        const databaseVerification = await useDatabaseVerification(data);
        const dbError = !!databaseVerification.error;
        if (dbError) {
            setError(databaseVerification.error);
        }
        
        setVerificationLoading(true);
        const emailVerification = await useEmailVerification(data.email, code, dbError);
        setVerificationLoading(false);

        if (emailVerification) {
            setVerifying(true);
        }

    }

    const onAuthChange = (res) => {
        setAuth(res);
    }

    return(
        <div className="full_background">
                <form className="register_section" onSubmit={VerificationStart}>
                    <Link href='/'><div className='register_back'>Go Home</div></Link>
                    <img className="register_img" src="/img/main/logo.png"/>
                    <div className="register_title">Register an Account</div>
                    <div className="register_subtitle">Or <Link className="register_link" href={`/login?` + new URLSearchParams({callback: params.get('callback') || ''})}>login</Link> if you have one already</div>
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
                                    <button type="button" className="register_btn" onClick={resendCode}>Resend Code</button>
                                </>
                            )} 
                        </>
                    )}
                    {!verifying ? <button type="submit" className="register_btn">Continue</button> : <button type="button" className={`register_btn ${auth != code && 'register_unverified'}`} onClick={Register}>Create Account</button> }
                    <div className='register_line'><span>or</span></div>
                    <div className='register_providers'>
                        <div onClick={() => googleRegister()}>
                            <img src="/img/main/google_logo.svg" style={{padding: 1}} />
                        </div>
                        <div onClick={discordRegister}>
                            <img src="/img/main/discord_logo.svg" style={{width: 24}}/>
                        </div>
                    </div>
                </form>
        </div>
    )
}
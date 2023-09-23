'use client';

import { useState } from 'react';
import Link from 'next/link';
import { resetPassword, checkEmailExists } from '@lib/user';
import { useRouter } from 'next/navigation';
import { sendPasswordEmail } from '@lib/verification';
import AuthCode from 'react-auth-code-input';

const randomCode = () => Math.random().toString().substring(2, 6);

export default function Login() {
    const [isVisible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const [code, setCode] = useState(randomCode());
    const [loading, setLoading] = useState(false);
    const [sentToEmail, setSentToEmail] = useState(false);
    const [resettingPassword, setResettingPassword] = useState(false);
    const [email, setEmail] = useState('');
    const router = useRouter();

    const onAuthChange = (res) => {
        if (res === code) {
            setResettingPassword(true);
        }
    }

    const resendCode = async (e) => {
        e.target.innerHTML = 'Sending...';
        const newCode = randomCode();
        setCode(newCode);
        await sendPasswordEmail(email, newCode);
        e.target.innerHTML = 'New code sent!';
        await new Promise(resolve => setTimeout(resolve, 2000));
        e.target.innerHTML = 'Resend Code';
    }

    const sendCode = async (e) => {
        e.target.innerHTML = 'Sending...';
        const emailExists = await checkEmailExists(email);
        if (!emailExists) {
            setError('This email has no account');
            e.target.innerHTML = 'Send Code';
        }
        setLoading(true);
        await sendPasswordEmail(email, code);
        setLoading(false);
        setSentToEmail(true);
    }

    const Reset = async (e) => {
        e.preventDefault();

        if (e.target.password.value !== e.target.confirm.value) {
            setError('Your passwords do not match.');
            return;
        }

        await resetPassword(e.target.email.value, e.target.password.value);
        router.push('/login');
    }

    return(
        <div className="full_background">
            <form className="register_section" onSubmit={Reset}>
                <Link href='/'><div className='register_back'>Go Home</div></Link>
                <img className="register_img" src="/img/main/logo.png"/>
                <div className="register_title">Reset Password</div>
                <div className="register_subtitle">You will be sent a code to your email.</div>
                {error !== '' && <div className='register_error'>{error}</div>}
                <div className="register_inputs">
                    <div>
                        <label className="register_label">Email</label>
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required maxLength='100' />
                    </div> 
                </div>
                { loading && <div class="lds-ellipsis small_loader"><div></div><div></div><div></div><div></div></div> }
                { sentToEmail && !resettingPassword &&  (
                    <>
                        <div className='account_verify' style={{marginTop: 15}} >Verification</div>
                        <div className='account_verify-desc'>An email was sent with the code provided</div>
                        <AuthCode onChange={onAuthChange} allowedCharacters='numeric' inputClassName='authcode_inputs' length={4} />
                        <button type="button" className="register_btn" onClick={resendCode}>Resend Code</button>
                    </>
                )}
                { resettingPassword && (
                    <>
                        <div className="register_inputs">
                            <div>
                                <label className="register_label">New Password</label>
                                <input type={isVisible ? "text" : "password"} name='password' required maxLength='30' />
                            </div>
                            <div>
                                <label className="register_label">Confirm New Password</label>
                                <input type={isVisible ? "text" : "password"} name='confirm' required maxLength='30' />
                            </div>
                        </div>
                        <div className="forgotten_right">
                            <div className="register_eye" onClick={() => setVisible(!isVisible)}>
                                {isVisible ? <img src="/img/main/seen.png" className='register_eye-visible'/> : <img src='/img/main/hide.png'/>}
                            </div>
                        </div>
                        <button type="submit" className="register_btn">Reset</button>
                    </>
                )}
                { !sentToEmail && <button className="register_btn" type="button" onClick={sendCode}>Send Code</button> }
            </form>
        </div>
    )
}
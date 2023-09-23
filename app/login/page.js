'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import { useLogin } from '@lib/login';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { loginUserEmail } from '@lib/login';
import { getDiscordAuth } from '@lib/discord';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
    const [isVisible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const params = useSearchParams();

    useEffect(() => {
        if (params.get('error')) {
            setError(params.get('error'));
        }
    }, [params]);

    const googleLogin = useGoogleLogin({
        onSuccess: async res => {
            const googleResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers:{
                'Authorization': 'Bearer ' + res.access_token
            }});
            const googleData = await googleResponse.json();
            const { email } = googleData;
            const { error } = await loginUserEmail(email);
            googleLogout();
            if (error) {
                setError(error);
            } else {
                window.location.href = params.get('callback') || '/';
            }
        }
    })

    const discordLogin = async () => {
        const { error, url } = await getDiscordAuth('login', (params.get('callback') || ''));
        if (error) {
            setError(error)
        } else {
            router.push(url);
        }
    }

    const Login = async (e) => {
        e.preventDefault();
        const res = await useLogin(e.target.email.value, e.target.password.value);
        if (res) {
            setError(res.error);
        } else {
            window.location.href = params.get('callback') || '/';
        }
    }

    return(
        <div className="full_background">
            <form className="register_section" onSubmit={Login}>
                <Link href='/'><div className='register_back'>Go Home</div></Link>
                <img className="register_img" src="/img/main/logo.png"/>
                <div className="register_title">Log into an Account</div>
                <div className="register_subtitle">Or <Link className="register_link" href={`/register?` + new URLSearchParams({callback: params.get('callback') || ''})}>register</Link> if you don't have one</div>
                {error !== '' && <div className='register_error'>{error}</div>}
                <div className="register_inputs">
                    <div>
                        <label className="register_label">Email</label>
                        <input type="email" name='email' required maxLength='100' />
                    </div>
                    <div>
                        <label className="register_label">Password</label>
                        <input type={isVisible ? "text" : "password"} name='password' required maxLength='30' />
                    </div>
                </div>
                <div className="forgotten_sides">
                    <div className="register_eye" onClick={() => setVisible(!isVisible)}>
                        {isVisible ? <img src="/img/main/seen.png" className='register_eye-visible'/> : <img src='/img/main/hide.png'/>}
                    </div>
                    <Link className='register_forgotten' href='/reset'><div>forgot password?</div></Link>
                </div>
                <button type="submit" className="register_btn">Login</button>
                <div className='register_line'><span>or</span></div>
                <div className='register_providers'>
                    <div onClick={() => googleLogin()}>
                        <img src="/img/main/google_logo.svg" style={{padding: 1}} />
                    </div>
                    <div onClick={discordLogin}>
                        <img src="/img/main/discord_logo.svg" style={{width: 24}}/>
                    </div>
                </div>
            </form>
        </div>
    )
}
import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import { cookieOptions } from '../components/cookie_options';

export default function Login({ getUser }) {
    const [isVisible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    

    const Login = async (e) => {
        let prev_hash = getCookie('hash', cookieOptions);
        e.preventDefault();
        let res = await fetch(`/api/login?email=${e.target.email.value}&password=${e.target.password.value}&hash=${prev_hash}`);
        let data = await res.json();
        if (res.ok) {
            setCookie('hash', data.hash, cookieOptions);
            console.log(data.hash);
            getUser();
            router.back();
        } else {
            setError(data.error);
        }
    }

    return(
        <div className="full_background">
            <form className="register_section" onSubmit={Login}>
                <Link href='/'><div className='register_back'>Go Back</div></Link>
                <img className="register_img" src="/img/main/logo.png"/>
                <div className="register_title">Log into an Account</div>
                <div className="register_subtitle">Or <Link className="register_link" href="/register">register</Link> if you don't have one</div>
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
                    <div className='register_forgotten'><div>forgot password?</div></div>
                </div>
                <button type="submit" className="register_btn">Login</button>
            </form>
        </div>
    )
}
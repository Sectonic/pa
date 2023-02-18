import {useState} from 'react';
import Link from 'next/link';

export default function Login() {
    const [isVisible, setVisible] = useState(false);
    const [error, setError] = useState('');

    const Login = async (e) => {
        e.preventDefault();
        fetch(`api/login?email=${e.target.email.value}&password=${e.target.password.value}`)
        .then(res => {
            if (res.ok) {
                window.location.href = '/';
            } else {
                res.json().then(data => {
                    setError(data.error);
                })
            }
        });
    }

    return(
        <div className="full_background">
            <div>
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
        </div>
    )
}
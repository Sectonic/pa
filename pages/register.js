import {useState} from 'react';
import Link from 'next/link';

export default function Register() {
    const [isVisible, setVisible] = useState(false);
    const [error, setError] = useState('');

    const Register = async (e) => {
        e.preventDefault();
        let requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: e.target.email.value,
                username: e.target.username.value,
                password: e.target.password.value,
                confirm: e.target.confirm.value
            })
        }
        fetch(`${process.env.NEXT_PUBLIC_API}/create/user`, requestOptions)
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
                <form className="register_section" onSubmit={Register}>
                    <Link href='/'><div className='register_back'>Go Home</div></Link>
                    <img className="register_img" src="/img/main/logo.png"/>
                    <div className="register_title">Register an Account</div>
                    <div className="register_subtitle">Or <Link className="register_link" href="/login">login</Link> if you have one already</div>
                    {error !== '' && <div className='register_error'>{error}</div>}
                    <div className="register_inputs">
                        <div>
                            <label className="register_label">Username:</label>
                            <input type="text" required maxLength="35" name='username' />
                        </div>
                        <div>
                            <label className="register_label">Email:</label>
                            <input type="email" required maxLength="100" name='email' />
                        </div>
                        <div>
                            <label className="register_label">Password:</label>
                            <input type={isVisible ? "text" : "password"} required maxLength="30" name='password' />
                        </div>
                        <div>
                            <label className="register_label">Confirm Password:</label>
                            <input type={isVisible ? "text" : "password"} required maxLength="30" name='confirm'/>
                        </div>
                    </div>
                    <div className="forgotten_right">
                        <div className="register_eye" onClick={() => setVisible(!isVisible)}>
                            {isVisible ? <img src="/img/main/seen.png" className='register_eye-visible'/> : <img src='/img/main/hide.png'/>}
                        </div>
                    </div>
                    <button type="submit" className="register_btn">Register</button>
                </form>
            </div>
        </div>
    )
}
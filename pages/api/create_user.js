import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);    
    const {email, username, password, confirm} = req.body;
    if (session.user) {
        res.status(500).json({error: 'Already Logged In'});
    }
    let requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email, username, password, confirm
        })
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/create/user`, requestOptions);
    const data = await response.json();
    var userObj = {id: data.user_id, email: data.email, username: data.username};
    session.user = JSON.stringify(userObj);
    await session.commit();
    console.log(session.user);
    res.send({ ok: true });
}
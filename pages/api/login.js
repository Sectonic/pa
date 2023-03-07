import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    const {email, password} = req.query;
    if (session.user) {
        res.status(404).send({error: 'Already Logged In'});
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login?email=${email}&password=${password}`, {credentials: 'include'});
    const data = await response.json();
    if (response.ok) {
        var userObj = {id: data.user_id, email: data.email, username: data.username};
        session.user = JSON.stringify(userObj);
        await session.commit();
        console.log(session.user);
        res.status(200).send({'success': 'Successfully Logged In'});
    } else {
        res.status(response.status).send({ error: data.error });
    }
}
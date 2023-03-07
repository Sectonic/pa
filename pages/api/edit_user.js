import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    const user = session.user ? JSON.parse(session.user) : undefined;
    const {username} = req.query;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/edit/user?user_id=${user.id}&username=${username}`, {credentials: 'include'});
    if (response.ok) {
        var userObj = {id: user.id, email: user.email, username: username};
        session.user = JSON.stringify(userObj);
        await session.commit();
        res.status(200).send({'success': 'Successfully Edited Account'});
    } else {
        res.status(500).send({'error': 'Could not edit user'});
    }
}
import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    const user = session.user ? JSON.parse(session.user) : undefined;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/delete/user?user_id=${user.id}`, {credentials: 'include'});
    if (response.ok) {
        await session.destroy();
        await session.commit();
        res.status(200).send({'success': 'Successfully Deleted Account'});
    } else {
        res.status(500).send({'error': 'Could not delete user'});
    }
}
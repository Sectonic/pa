import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    await session.destroy();
    await session.commit();
    console.log(session.user);
    res.status(200).send({success: 'Successfully logged Out'});
}
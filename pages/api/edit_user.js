import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(editUser, ironOptions);

async function editUser(req, res) {
    const {username} = req.query;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/edit/user?user_id=${req.session.user.id}&username=${username}`, {credentials: 'include'});
    if (response.ok) {
        req.session.user.username = username;
        await req.session.save();
        res.status(200).json({'success': 'Successfully Edited Account'});
    } else {
        res.status(500).json({'error': 'Could not edit user'});
    }
}
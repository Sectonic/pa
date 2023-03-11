import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(deleteUser, ironOptions);

async function deleteUser(req, res) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/delete/user?hash=${req.session.hash}`, {credentials: 'include'});
    if (response.ok) {
        req.session.destroy();
        res.status(200).json({'success': 'Successfully Deleted Account'});
    } else {
        res.status(500).json({'error': 'Could not delete user'});
    }
}
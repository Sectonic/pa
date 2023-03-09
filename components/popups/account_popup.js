import {useState, useEffect} from 'react';
import { getCookie, deleteCookie } from 'cookies-next';
import { cookieOptions } from '../cookie_options';

function AccountPopup({data}) {
    const [userdata, setUserData] = useState(data);
    const [userName, setUserName] = useState(data.username);
    const [error, setError] = useState('');
    const [deleteStart, setDeleteStart] = useState(false);
    const [renameUser, setRenameUser] = useState('');
    const hash = getCookie('hash', cookieOptions);

    const saveUser = () => {
      if (userName.length > 35) {
        setError('Username has to be shorter than 35 characters');
      } else {
        fetch(`api/edit_user?username=${userName}&hash=${hash}`).then(res => {
          if (res.ok) {
            window.location.reload();
          }
        });
      }
    }

    const deleteUser = () => {
      if (renameUser != userdata.username) {
        setError('Input does not match your username');
      } else {
        fetch(`api/delete_user?hash=${hash}`).then(res => {
          if (res.ok) {
            deleteCookie('hash', cookieOptions);
            window.location.reload();
          }
        });
      }
    }
    return (
      <div>
        <h2 className="popup_title">Account Settings</h2>
        {error != '' && <div className='register_error account_error'>{error}</div>}
        {deleteStart && (
          <>
            <div className='delete_warning'>To Confirm the deletion of this account, please type in your username</div>
            <div className='delete_input'>
              <input type='text' onChange={(e) => setRenameUser(e.target.value)} />
              <button onClick={deleteUser}>Confirm</button>
            </div>
          </>
        )}
        <div className="account_box">
          <div className="account_info">
            <div className="account_detail">
              <label>Username</label>
              <input type='text' defaultValue={userdata ? userdata.username : ''} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="account_detail">
              <label className="disabled_label">Email</label>
              <input disabled type='email' value={userdata ? userdata.email : ''}/>
            </div>
            <div className="account_detail">
              <label className="disabled_label">Password</label>
              <input disabled type='password' value='11111111'/>
            </div>
            <div className="account_btns">
            <button className="account_save-btn" onClick={saveUser}>
              <img src="/img/main/save.png"/>
              <div>Save Info</div>
            </button>
            <button className="account_save-btn delete_button" onClick={() => setDeleteStart(true)}>
              <img src="/img/main/delete.png"/>
              <div>Delete Acc</div>
            </button>
            </div>
          </div>
          <div className="account_image-box">
            <div className="account_image">{userdata ? userdata.username[0] : ''}</div>
            <div className="account_image-edit">Edit Unavaliable</div>
          </div>
        </div>
      </div>
    );
}
  
  export default AccountPopup;
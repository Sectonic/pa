import { useState } from 'react';
import Popup from '@components/popup';
import { editUser, deleteUser } from '@lib/user';
import { deleteCookie } from 'cookies-next';
import { cookieOptions } from '@components/config';

function AccountPopup({ onClose, user }) {
    const [userName, setUserName] = useState(user.username);
    const [error, setError] = useState('');
    const [deleteStart, setDeleteStart] = useState(false);
    const [renameUser, setRenameUser] = useState('');

    const editHandler = async () => {
      if (userName.length > 35) {
        setError('Username has to be shorter than 35 characters');
      } else {
        await editUser(userName);
        window.location.href = '/';
      }
    }

    const deleteHandler = async () => {
      if (renameUser != userName) {
        setError('Input does not match your username');
      } else {
        await deleteUser();
        deleteCookie('PAsession', cookieOptions);
        window.location.href = '/';
      }
    }

    return (
      <Popup onClose={onClose}>
        <h2 className="popup_title">Account Settings</h2>
        {error != '' && <div className='register_error account_error'>{error}</div>}
        {deleteStart && (
          <>
            <div className='delete_warning'>To Confirm the deletion of this account, please type in your username</div>
            <div className='delete_input'>
              <input type='text' onChange={(e) => setRenameUser(e.target.value)} />
              <button onClick={deleteHandler}>Confirm</button>
            </div>
          </>
        )}
        <div className="account_box">
          <div className="account_info">
            <div className="account_detail">
              <label>Username</label>
              <input type='text' defaultValue={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="account_detail">
              <label className="disabled_label">Email</label>
              <input disabled type='email' value={user.email}/>
            </div>
            <div className="account_detail">
              <label className="disabled_label">Password</label>
              <input disabled type='password' value='11111111'/>
            </div>
            <div className="account_btns">
            <button className="account_save-btn" onClick={editHandler}>
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
            <div className="account_image">{userName[0]}</div>
            <div className="account_image-edit">Edit Unavaliable</div>
          </div>
        </div>
      </Popup>
    );
}
  
export default AccountPopup;
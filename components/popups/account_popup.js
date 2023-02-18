import {useState, useEffect} from 'react';

function AccountPopup() {
    const [userdata, setUserData] = useState(null);
    const [userName, setUserName] = useState(null);
    const [error, setError] = useState('');
    const [deleteStart, setDeleteStart] = useState(false);
    const [renameUser, setRenameUser] = useState('');

    useEffect(() => {
      fetch(`api/get_user`).then(res => res.json()
      .then(data => {
        setUserData(data);
        setUserName(data.username);
      }));
    }, [])

    const saveUser = () => {
      if (userName.length > 35) {
        setError('Username has to be shorter than 35 characters');
      } else {
        fetch(`api/edit_user?username=${userName}`).then(window.location.reload());
      }
    }

    const deleteUser = () => {
      if (renameUser != userdata.username) {
        setError('Input does not match your username');
      } else {
        fetch(`api/delete_user`).then(window.location.reload());
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
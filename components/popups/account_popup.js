

function AccountPopup() {
    return (
      <div>
        <h2 className="popup_title">Account Settings</h2>
        <div className="account_box">
          <div className="account_info">
            <div className="account_detail">
              <label>Username</label>
              <input/>
            </div>
            <div className="account_detail">
              <label>Email</label>
              <input/>
            </div>
            <div className="account_detail">
              <label>Password</label>
              <input/>
            </div>
          </div>
          <div className="account_image-box">
            <div className="account_image">S</div>
          </div>
        </div>
      </div>
    );
}
  
  export default AccountPopup;
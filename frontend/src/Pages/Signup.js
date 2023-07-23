import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../App.css";

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState('');
  const [isSitter, setIsSitter] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("환영합니다");
    history.push('/');
  };

  const handleSitterChange = (e) => {
    setIsSitter(e.target.checked);
    setIsCustomer(false); // SITTER 체크 시 CUSTOMER 체크 해제
  };
  
  const handleCustomerChange = (e) => {
    setIsCustomer(e.target.checked);
    setIsSitter(false); // CUSTOMER 체크 시 SITTER 체크 해제
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>회원가입</h1> 
      </div>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="signup-label">아이디</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="signup-input" /> {/* style.css의 .signup-input 스타일 적용 */}
          </div>

          <div>
            <label className="signup-label">패스워드</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="signup-input" /> {/* style.css의 .signup-input 스타일 적용 */}
          </div>

          <div>
            <label className="signup-label">주소</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="signup-input" /> {/* style.css의 .signup-input 스타일 적용 */}
          </div>

          <div>
            <label className="signup-label">휴대폰</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="signup-input" /> {/* style.css의 .signup-input 스타일 적용 */}
          </div>

          <div>
            <label className="signup-label">사진</label>
            <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} className="signup-input" /> {/* style.css의 .signup-input 스타일 적용 */}
          </div>

          <div>
            <label className="signup-label">선택</label>
            <label>
              SITTER{' '}
              <input
                type="checkbox"
                checked={isSitter}
                onChange={handleSitterChange}
              />
            </label>
            <label>
              CUSTOMER{' '}
              <input
                type="checkbox"
                checked={isCustomer}
                onChange={handleCustomerChange}
              />
            </label>
          </div>

          <button type="submit" className="sign-button">가입하기</button> {/* style.css의 .signup-button 스타일 적용 */}
        </form>
      </div>
    </div>
  );
}

export default Signup;

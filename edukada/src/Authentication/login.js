import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // For secure token storage
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import http from '../axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [isDelayed, setIsDelayed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const tokens = Cookies.get('auth_token');

  useEffect(() => {
    if (tokens) {
      navigate("/Profile");
    }
  }, [tokens])

  const notifyerror = () => toast.error('Login Failed!! Incorrect email or password or Make sure that the email is activated', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true
  });

  const notifysuccess = () => toast.success('Login Successfully', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true
  });

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!data.email || !data.password) {
      alert('Please fill in all fields.');
      return;
    }

    setIsDisabled(!isDisabled);

    http.post('auth/token/login', data).then(response => {
      if (response.status === 200) {
        notifysuccess();
        setIsDelayed(true);
        setTimeout(() => {
          Cookies.set('auth_token', response.data.auth_token, { expires: 1, secure: true });
          navigate('/Profile');
        }, 2000);
      }
      setIsDisabled(false);
    }).catch(() => {
      notifyerror();
      setIsDisabled(false);
    });

    if (rememberMe) {
      Cookies.set('rememberedEmail', data.email, { expires: 1, secure: true });
      Cookies.set('rememberedPassword', data.password, { expires: 1, secure: true });
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    const rememberedEmail = Cookies.get('rememberedEmail');
    const rememberedPassword = Cookies.get('rememberedPassword');

    if (rememberedEmail && rememberedPassword) {
      setData({ ...data, email: rememberedEmail });
      setData({ ...data, password: rememberedPassword });
      setRememberMe(true);
    }
  }, []);

  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <img src='/assets/logo.png' style={{ width: '300px', height: '300px', marginTop: '30px' }} />
      <p style={{ color: 'black', fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginTop: '50px' }}>Learnify</p>

      <form className="flex max-w-lg flex-col gap-4" style={{ marginTop: '30px', width: '600px' }} onSubmit={handleSubmit}>
        <input type="email" id="email" name="Email" placeholder="Enter your Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required style={{ marginBottom: '10px', padding: '10px', width: '550px' }} />
        <div style={{ position: 'relative', width: '100%' }}>
          <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} required style={{ marginBottom: '10px', padding: '10px', width: '550px' }} />
          <span style={{ position: 'absolute', right: '30px', top: '40%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 340, width: 600, justifyContent: 'start', marginRight: 200 }}>
          <div>
            <input type="checkbox" id="remember" name="remember" checked={rememberMe} onChange={handleRememberMeChange} />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div>
            <Link to="/Reset" style={{ textDecoration: 'underline', color: 'black' }} >Forgot password</Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <div style={{ textDecoration: 'none', width: '20%' }}>
            <button disabled={isDisabled} type="submit" onClick={handleSubmit} style={{ padding: '10px', backgroundColor: '#45b6fe', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', width: '100%', marginTop: '30px' }}>Sign In</button>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          Don’t have an account? Create <Link to="/register" style={{ textDecoration: 'underline', color: 'blue' }}>here.</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

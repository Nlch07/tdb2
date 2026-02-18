window.AuthComponent = function Auth() {
    const loginGoogle = () => {
        window.signInWithPopup(window.auth, window.googleProvider);
    };

    return (
        <div className="auth-card">
            <div style={{marginBottom: '20px'}}>
                <img src="https://logoipsum.com/assets/logo/logo-1.svg" alt="logo" style={{width: '120px'}} />
            </div>
            
            <h2>Get Started <span>now</span></h2>
            <p>Create an account or log in to explore our app</p>

            <button className="social-btn" onClick={loginGoogle}>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" />
                Sign in with Google
            </button>

            <button className="social-btn">
                <i className="fa-brands fa-facebook" style={{color: '#1877F2'}}></i>
                Sign in with Facebook
            </button>

            <div style={{margin: '20px 0', color: '#ccc', fontSize: '12px'}}>Or</div>

            <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Loisbecket@gmail.com" className="auth-input" />
            </div>

            <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="********" className="auth-input" />
            </div>

            <button className="login-btn">Log In</button>

            <p className="footer-text">
                Don't have an account? <span>Sign Up</span>
            </p>
        </div>
    );
};
window.AuthComponent = function Auth() {
    return (
        <div className="auth-card">
            <div style={{marginBottom: '20px'}}>
                {/* Вставляем красивое временное лого */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_Messages_icon_%282022%29.png" alt="logo" style={{width: '60px'}} />
            </div>
            
            <h2>Get Started <span>now</span></h2>
            <p>Create an account or log in to explore our app</p>

            <button className="social-btn" onClick={() => window.signInWithPopup(window.auth, window.googleProvider)}>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" />
                Sign in with Google
            </button>

            <div style={{margin: '15px 0', color: '#ccc', fontSize: '12px'}}>Or</div>

            <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="example@mail.com" className="auth-input" />
            </div>

            <div className="input-group" style={{marginTop: '15px'}}>
                <label>Password</label>
                <input type="password" placeholder="********" className="auth-input" />
            </div>

            {/* Добавляем строку с "Remember me" и "Forgot password" */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px', fontSize: '12px', color: '#888'}}>
                <label style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <input type="checkbox" /> Remember me
                </label>
                <span style={{color: '#3b82f6', cursor: 'pointer'}}>Forgot Password?</span>
            </div>

            <button className="login-btn">Log In</button>

            <p className="footer-text">
                Don't have an account? <span style={{color: '#3b82f6', fontWeight: 'bold'}}>Sign Up</span>
            </p>
        </div>
    );
};
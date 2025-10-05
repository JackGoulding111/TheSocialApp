import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthPage() {
  // Track whether we're showing login or signup form
  const [isLogin, setIsLogin] = useState(true)
  
  // For navigating to different pages
  const navigate = useNavigate()

  // Handle login button click - sends user to feed
  const handleLogin = () => {
    navigate('/feed')
  }

  // Handle signup button click - sends user to feed
  const handleSignup = () => {
    navigate('/feed')
  }

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
      {/* Toggle buttons to switch between login and signup */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button 
          onClick={() => setIsLogin(true)}
          style={{ 
            flex: 1, 
            padding: '10px',
            background: isLogin ? '#1da1f2' : '#ccc',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
        <button 
          onClick={() => setIsLogin(false)}
          style={{ 
            flex: 1, 
            padding: '10px',
            background: !isLogin ? '#1da1f2' : '#ccc',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
      </div>

      {/* Show login form if isLogin is true */}
      {isLogin ? (
        <div>
          <h2>Login</h2>
          <input type="text" placeholder="Username" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <button 
            onClick={handleLogin}
            style={{ width: '100%', padding: '10px', background: '#1da1f2', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Login
          </button>
        </div>
      ) : (
        // Show signup form if isLogin is false
        <div>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Username" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <button 
            onClick={handleSignup}
            style={{ width: '100%', padding: '10px', background: '#1da1f2', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Create Account
          </button>
        </div>
      )}
    </div>
  )
}

export default AuthPage
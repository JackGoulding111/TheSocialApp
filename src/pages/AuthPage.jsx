import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthPage() {
  // Track whether we're showing login or signup form
  const [isLogin, setIsLogin] = useState(true)
  
  // Store username and password from form inputs
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  // For navigating to different pages
  const navigate = useNavigate()

  // Handle login button click - sends credentials to backend
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        // Login successful - go to feed
        navigate('/feed')
      } else {
        // Login failed - show error
        alert(data.error)
      }
    } catch (error) {
      alert('Error connecting to server')
    }
  }

  // Handle signup button click - sends credentials to backend
  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        // Signup successful - go to feed
        navigate('/feed')
      } else {
        // Signup failed - show error
        alert(data.error)
      }
    } catch (error) {
      alert('Error connecting to server')
    }
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
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }} 
          />
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
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }} 
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }} 
          />
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
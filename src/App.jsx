import { useState } from 'react'
import './App.css'
import lip from "./assets/images/lip.jpg";
import foundation from "./assets/images/foundation.jpg";
import blush from "./assets/images/blush.jpg";
import liner from "./assets/images/liner.jpg";
import high from "./assets/images/high.jpg";
import eye from "./assets/images/eye.jpg";
import skin from "./assets/images/skin.jpg";

import { auth, googleProvider } from './firebase'
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#FFF8E7'
    }}>
      
      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
          zIndex: 1000
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ width: '30px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></div>
        </div>
      </button>

      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
          zIndex: 1000
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ width: '30px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></div>
        </div>
      </button>

            {/* Brand Name */}
            <div style={{
        position: 'fixed',
        top: '25px',
        left: '70px',
        fontFamily: 'blistany, cursive',
        fontSize: '28px',
        color: '#800000',
        zIndex: 1000
      }}>
        Zoha Beauty
      </div>
     {/* Wishlist Icon Button - FIRST (leftmost of the three) */}
     <button 
        onClick={() => setIsWishlistOpen(!isWishlistOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '120px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
          zIndex: 1000
        }}
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#800000" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>

            {/* Cart Icon Button - MIDDLE */}
            <button 
        onClick={() => setIsCartOpen(!isCartOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '75px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
          zIndex: 1000,
          fontSize: '28px'
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#800000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </button>

            {/* User Profile/Login Button - LAST (rightmost) */}
            <button 
        onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
        style={{
          position: 'fixed',
          top: '15px',
          right: '30px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
          zIndex: 1000,
          fontSize: '28px'
        }}
      >
        <svg width="28" height="40" viewBox="0 0 24 24" fill="#800000">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      </button>
      
      
            {/* Search Bar */}
            <div style={{
        position: 'fixed',
        top: '75px',
        left: '100px',
        right: '100px',
        zIndex: 500
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '25px',
          padding: '10px 20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <span style={{ fontSize: '18px', marginRight: '10px' }}>
          <svg width="20" height="`2`0" viewBox="0 0 24 24" fill="none" stroke="#800000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
            </span>
          <input 
            type="text"
            placeholder="Search for beauty..."
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              fontSize: '16px',
              backgroundColor: 'transparent',
              color: '#800000'
            }}
          />
        </div>
      </div>

      {/* Category Circles */}
      <div style={{
        position: 'fixed',
        top: '150px',
        left: '20px',
        right: '20px',
        zIndex: 900,
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 170px)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '30px',
          padding: '20px',
          justifyItems: 'center'
        }}>
          {/* lipsticks */}
          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid #800000',
              overflow: 'hidden',
              backgroundColor: '#f5e6d3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              <img src={lip} style={{width: "100px", height: "100px"}}/>
            </div>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#800000' }}>Lipsticks</p>
          </div>

          {/* foundation*/}
          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid #800000',
              overflow: 'hidden',
              backgroundColor: '#f5e6d3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              <img src={foundation} style={{width: "100px", height: "100px"}}/>
            </div>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#800000' }}>Foundation</p>
          </div>

          {/* liner */}
          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid #800000',
              overflow: 'hidden',
              backgroundColor: '#f5e6d3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              <img src={liner} style={{width: "100px", height: "100px"}}/>
            </div>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#800000' }}>Liners</p>
          </div>

          {/* Eye Shadow */}
          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid #800000',
              overflow: 'hidden',
              backgroundColor: '#f5e6d3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              <img src={eye} style={{width: "100px", height: "100px"}}/>
            </div>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#800000' }}>Eye Shadow</p>
          </div>

          {/* Highlighter */}
          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid #800000',
              overflow: 'hidden',
              backgroundColor: '#f5e6d3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              <img src={high} style={{width: "100px", height: "100px"}}/>
            </div>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#800000' }}>Highlighter</p>
          </div>

          {/* Blush */}
          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid #800000',
              overflow: 'hidden',
              backgroundColor: '#f5e6d3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              <img src={blush} style={{width: "100px", height: "100px"}}/>
            </div>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#800000' }}> Blush </p>
          </div>

          {/* Skincare */}
          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid #800000',
              overflow: 'hidden',
              backgroundColor: '#f5e6d3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              <img src={skin} style={{width: "100px", height: "100px"}}/>
            </div>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#800000' }}>Skincare</p>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      {/* Sidebar Menu */}
      {/* Sidebar Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: isMenuOpen ? '0' : '-300px',
        width: '300px',
        height: '100vh',
        backgroundColor: '#FFF8E7',
        transition: 'left 0.3s ease',
        padding: '80px 20px 20px 20px',
        zIndex: 999
      }}>
                        <h2 style={{ color: '#800000', marginBottom: '20px' }}>Menu</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '15px 10px', color: '#800000', cursor: 'pointer', transition: 'background 0.3s', borderRadius: '5px' }} 
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5e6d3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Home
          </li>
          <li style={{ padding: '15px 10px', color: '#800000', cursor: 'pointer', transition: 'background 0.3s', borderRadius: '5px' }} 
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5e6d3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            About Us
          </li>
          <li style={{ padding: '15px 10px', color: '#800000', cursor: 'pointer', transition: 'background 0.3s', borderRadius: '5px' }} 
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5e6d3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Best Seller
          </li>
          <li style={{ padding: '15px 10px', color: '#800000', cursor: 'pointer', transition: 'background 0.3s', borderRadius: '5px' }} 
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5e6d3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            New Launch
          </li>
        </ul>
      </div>

      {/* Cart Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: isCartOpen ? '0' : '-350px',
        width: '350px',
        height: '100vh',
        backgroundColor: '#FFF8E7',
        transition: 'right 0.3s ease',
        padding: '80px 20px 20px 20px',
        zIndex: 999
      }}>
        <h2 style={{ marginBottom: '20px' }}>Shopping Cart</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50%',
          color: '#999'
        }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>🛒</div>
          <p style={{ fontSize: '18px', fontWeight: '500' }}>Cart feels empty</p>
        </div>
      </div>

      {/* Login Dropdown */}
      {isLoginDropdownOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          right: '30px',
          width: '200px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1001,
          overflow: 'hidden'
        }}>
          <div 
            onClick={() => {
              setIsLoginModalOpen(true)
              setIsLoginDropdownOpen(false)
            }}
            style={{
              padding: '15px 20px',
              cursor: 'pointer',
              borderBottom: '1px solid #f0f0f0',
              color: '#800000',
              fontWeight: '500',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#FFF8E7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            Login
          </div>
          <div 
            onClick={() => {
              setIsSignupModalOpen(true)
              setIsLoginDropdownOpen(false)
            }}
            style={{
              padding: '15px 20px',
              cursor: 'pointer',
              color: '#800000',
              fontWeight: '500',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#FFF8E7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            Sign Up
          </div>
        </div>
      )}

      {/* Overlay for Menu */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 998
          }}
        ></div>
      )}

      {/* Overlay for Cart */}
      {isCartOpen && (
        <div 
          onClick={() => setIsCartOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 998
          }}
        ></div>
      )}

      {/* Overlay for Login Dropdown */}
      {isLoginDropdownOpen && (
        <div 
          onClick={() => setIsLoginDropdownOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            zIndex: 1000
          }}
        ></div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <>
          <div 
            onClick={() => setIsLoginModalOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '40px',
                width: '400px',
                maxWidth: '90%',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
              }}
            >
              <h2 style={{ color: '#800000', marginBottom: '30px', textAlign: 'center' }}>Welcome Back</h2>
              
              {/* Google Sign In Button */}
              <button 
                onClick={() => {
                  // Add Google OAuth logic here
                  console.log('Google Sign In clicked')
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '20px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f8f8'
                  e.target.style.borderColor = '#800000'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.borderColor = '#ddd'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div style={{ 
                textAlign: 'center', 
                margin: '20px 0',
                color: '#999',
                position: 'relative'
              }}>
                <span style={{
                  backgroundColor: 'white',
                  padding: '0 10px',
                  position: 'relative',
                  zIndex: 1
                }}>OR</span>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: '#ddd',
                  zIndex: 0
                }}></div>
              </div>

              {/* Email Input */}
              <input 
                type="email"
                placeholder="Email"
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '15px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#800000'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />

              {/* Password Input */}
              <input 
                type="password"
                placeholder="Password"
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '20px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#800000'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />

              {/* Login Button */}
              <button 
                onClick={() => {
                  // Add login logic here
                  console.log('Login clicked')
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#800000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#a00000'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#800000'}
              >
                Login
              </button>

              {/* Sign Up Link */}
              <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
                Don't have an account?{' '}
                <span 
                  onClick={() => {
                    setIsLoginModalOpen(false)
                    setIsSignupModalOpen(true)
                  }}
                  style={{ color: '#800000', cursor: 'pointer', fontWeight: '600' }}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </>
      )}

      {/* Sign Up Modal */}
      {isSignupModalOpen && (
        <>
          <div 
            onClick={() => setIsSignupModalOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '40px',
                width: '400px',
                maxWidth: '90%',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              <h2 style={{ color: '#800000', marginBottom: '30px', textAlign: 'center' }}>Create Account</h2>
              
              {/* Google Sign Up Button */}
              <button 
                onClick={() => {
                  // Add Google OAuth logic here
                  console.log('Google Sign Up clicked')
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '20px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f8f8'
                  e.target.style.borderColor = '#800000'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.borderColor = '#ddd'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div style={{ 
                textAlign: 'center', 
                margin: '20px 0',
                color: '#999',
                position: 'relative'
              }}>
                <span style={{
                  backgroundColor: 'white',
                  padding: '0 10px',
                  position: 'relative',
                  zIndex: 1
                }}>OR</span>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: '#ddd',
                  zIndex: 0
                }}></div>
              </div>

              {/* Name Input */}
              <input 
                type="text"
                placeholder="Full Name"
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '15px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#800000'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />

              {/* Email Input */}
              <input 
                type="email"
                placeholder="Email"
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '15px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#800000'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />

              {/* Password Input */}
              <input 
                type="password"
                placeholder="Password"
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '15px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#800000'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />

              {/* Confirm Password Input */}
              <input 
                type="password"
                placeholder="Confirm Password"
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '20px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#800000'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />

              {/* Sign Up Button */}
              <button 
                onClick={() => {
                  // Add signup logic here
                  console.log('Sign Up clicked')
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#800000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#a00000'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#800000'}
              >
                Sign Up
              </button>

              {/* Login Link */}
              <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
                Already have an account?{' '}
                <span 
                  onClick={() => {
                    setIsSignupModalOpen(false)
                    setIsLoginModalOpen(true)
                  }}
                  style={{ color: '#800000', cursor: 'pointer', fontWeight: '600' }}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </>
      )}

      
    </div>
  )
}

export default App
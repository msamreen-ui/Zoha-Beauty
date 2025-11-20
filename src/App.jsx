import { useState } from 'react'
import './App.css'
import lipstick from "./assets/images/lipstick.jpg";
import foundation from "./assets/images/foundation.jpg";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

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
              <img src={lipstick} style={{width: "100px", height: "100px"}}/>
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

          {/* liners */}
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
              💄
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
              💄
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
              💄
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
              💄
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
              💄
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

      
    </div>
  )
}

export default App
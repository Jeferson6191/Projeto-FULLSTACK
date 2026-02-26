import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // se estiver usando react-router
import '../style/landing.css';           // ajuste o caminho conforme sua pasta

export default function LandingPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="landing-wrapper">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <div className="logo">
              <div className="logo-circle">P</div>
              <span className="logo-text">Sua Pizza</span>
            </div>

            <nav className="main-nav">
              <a href="#">Home</a>
              <a href="#">Menu ▼</a>
              <a href="#">Preços & Promo ▼</a>
              <a href="#">Sobre</a>
              <a href="#">Contato</a>
            </nav>

            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Buscar..."
                className="search-input"
              />
              <button className="search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="main-title">
                PIZZA
                <span className="subtitle-red">Restaurant</span>
              </h1>

              <p className="hero-description">
                A melhor pizza da cidade, feita com ingredientes frescos, massa artesanal e muito amor. Venha provar!
              </p>

              <div className="hero-cta">
                <Link to="/register">
                  <button className="btn btn-primary">Criar Conta</button>
                </Link>
                <Link to="/Logar">
                  <button className="btn btn-outline">Já tenho conta</button>
                </Link>
              </div>
            </div>

            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=800&auto=format&fit=crop&q=80"
                alt="Pizza com queijo derretendo"
                className="pizza-main-img"
              />
              
            </div>
          </div>
        </div>
      </main>

      {/* Signup Banner */}
      <section className="signup-banner">
        <div className="container">
          <h2 className="banner-title">Faça parte da nossa família!</h2>

          <form className="signup-form">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-field"
              required
            />
            <button type="submit" className="btn btn-primary">Cadastrar</button>
            <button type="button" className="btn btn-light"  >Entrar</button>
          </form>
        </div>
      </section>
    </div>
  );
}
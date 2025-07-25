"use client"

import { useEffect, useRef } from "react"

// Mobile Menu Component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu-content">
        <nav className="mobile-nav">
          <a href="#services" onClick={onClose}>
            Services
          </a>
          <a href="#about" onClick={onClose}>
            About
          </a>
          <a href="#blog" onClick={onClose}>
            Blog
          </a>
        </nav>

        <div className="mobile-language-selector">
          <select>
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>
        </div>

        <button className="mobile-contact-btn">Contact Us</button>
      </div>
    </div>
  )
}

// Vertical Project Cards Component
function VerticalProjectCards() {
  const projects = [
    {
      number: "1",
      label: "Project 01",
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution built with Next.js and Stripe integration for seamless online shopping experiences.",
    },
    {
      number: "2",
      label: "Project 02",
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration features, and intuitive design.",
    },
    {
      number: "3",
      label: "Project 03",
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
    },
    {
      number: "4",
      label: "Project 04",
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and comprehensive financial management tools.",
    },
    {
      number: "5",
      label: "Project 05",
      title: "AI Chat Interface",
      description:
        "Intelligent chat interface powered by machine learning with natural language processing capabilities.",
    },
  ]

  return (
    <div className="vertical-projects-container">
      {/* Header Section */}
      <section className="projects-header-section">
        <div className="projects-header-content">
          <h1>Our Projects</h1>
          <p>Discover our latest work and innovative solutions</p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="vertical-cards-section">
        {projects.map((project, index) => (
          <div key={index} className={`vertical-card-wrapper card-${index + 1}`}>
            <div className="vertical-project-card">
              <div className="vertical-card-header">
                <div className="vertical-card-number">{project.number}</div>
                <div className="vertical-card-label">{project.label}</div>
              </div>
              <div className="vertical-card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="vertical-card-footer">
                  <button className="vertical-card-button">
                    {index === 0
                      ? "View Project"
                      : index === 1
                        ? "Learn More"
                        : index === 2
                          ? "Explore"
                          : index === 3
                            ? "Discover"
                            : "Try Demo"}
                  </button>
                  <div className="vertical-card-dots">
                    <span className="vertical-dot"></span>
                    <span className="vertical-dot"></span>
                    <span className="vertical-dot"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default function GalaxyWebsite() {
  const mobileMenuOpen = useRef(false)

  useEffect(() => {
    // Load external scripts
    const gsapScript = document.createElement("script")
    gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
    document.head.appendChild(gsapScript)

    const threeScript = document.createElement("script")
    threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
    document.head.appendChild(threeScript)

    // Initialize hero section after scripts load
    const initHero = () => {
      if (window.gsap && window.THREE) {
        initStarField()
        init3DMoon()
        initHeroAnimations()
      } else {
        setTimeout(initHero, 100)
      }
    }

    setTimeout(initHero, 500)

    // Service cards animation
    const initServiceCards = () => {
      if (window.gsap) {
        window.gsap.utils.toArray(".service-card").forEach((card: any, index: number) => {
          window.gsap.fromTo(
            card,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            },
          )
        })
      }
    }

    setTimeout(initServiceCards, 1000)

    return () => {
      gsapScript.remove()
      threeScript.remove()
    }
  }, [])

  const toggleMobileMenu = () => {
    mobileMenuOpen.current = !mobileMenuOpen.current
    const menu = document.querySelector(".mobile-menu")
    if (menu) {
      menu.classList.toggle("open")
    }
  }

  return (
    <div className="galaxy-website">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
                <circle cx="6" cy="8" r="1" fill="currentColor" opacity="0.7" />
                <circle cx="18" cy="16" r="0.5" fill="currentColor" opacity="0.6" />
                <circle cx="8" cy="18" r="0.8" fill="currentColor" opacity="0.5" />
                <circle cx="16" cy="6" r="0.6" fill="currentColor" opacity="0.8" />
              </svg>
            </div>
            <span className="logo-text">Galaxy</span>
          </div>

          <nav className="desktop-nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
          </nav>

          <div className="header-actions">
            <div className="language-selector">
              <select>
                <option value="en">🇺🇸 EN</option>
                <option value="es">🇪🇸 ES</option>
                <option value="fr">🇫🇷 FR</option>
                <option value="de">🇩🇪 DE</option>
              </select>
            </div>

            <button className="contact-btn">Contact</button>

            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={false} onClose={() => toggleMobileMenu()} />

      {/* Hero Section */}
      <section className="hero">
        {/* Star Field Background */}
        <div className="star-field" id="starField"></div>
        {/* 3D Moon Canvas */}
        <div className="moon-canvas" id="moonCanvas"></div>
        {/* Mountain Silhouette */}
        <div className="mountain" id="mountain">
          <svg viewBox="0 0 1200 400" className="mountain-svg" preserveAspectRatio="none">
            <path
              d="M0,400 L0,250 L150,200 L300,150 L450,180 L600,120 L750,160 L900,100 L1050,140 L1200,110 L1200,400 Z"
              fill="url(#mountainGradient)"
              stroke="url(#mountainStroke)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4a4a4a" />
                <stop offset="50%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <linearGradient id="mountainStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Hero Content */}
        <div className="hero-content" id="heroContent">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to the Galaxy</h1>
            <p className="hero-description">
              Explore the infinite possibilities of the cosmos with our cutting-edge technology and innovative
              solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Explore Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 8h10M7 12h8M7 16h6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Mobile Application Development</h3>
              <p>Custom iOS and Android solutions with cutting-edge technology and seamless user experiences.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 21l4-7 4 7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>Responsive websites and web applications built with modern frameworks and best practices.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>AI Solutions</h3>
              <p>Intelligent systems and machine learning solutions that transform your business operations.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Cloud Services</h3>
              <p>Scalable cloud infrastructure and deployment solutions for modern applications.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>User-centered design solutions that create engaging and intuitive digital experiences.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Blockchain Development</h3>
              <p>Secure blockchain solutions and smart contracts for decentralized applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <VerticalProjectCards />
      </section>

      {/* Hero JavaScript */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        // Global variables for hero section
        let scene, camera, renderer, moonMesh, glowMeshes = []
        const stars = []
        let isLoaded = false

        // Initialize hero section functions
        function initStarField() {
            const starField = document.getElementById("starField")
            if (!starField) return
            
            // Create regular twinkling stars
            createRegularStars(starField, 300)
            // Create moving stars
            createMovingStars(starField, 40)
            // Create shooting stars
            createShootingStars(starField, 8)
            // Animate star field appearance
            animateStarFieldAppearance()
        }

        function createRegularStars(container, count) {
            for (let i = 0; i < count; i++) {
                const star = document.createElement("div")
                const size = Math.random() * 3 + 1
                star.className = "star"
                star.style.width = size + "px"
                star.style.height = size + "px"
                star.style.left = Math.random() * window.innerWidth + "px"
                star.style.top = Math.random() * window.innerHeight + "px"
                star.style.opacity = Math.random() * 0.8 + 0.2
                container.appendChild(star)
                
                // Twinkling animation
                if (window.gsap) {
                    window.gsap.to(star, {
                        opacity: Math.random() * 0.3 + 0.7,
                        duration: Math.random() * 2 + 1,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut",
                    })
                }
            }
        }

        function createMovingStars(container, count) {
            for (let i = 0; i < count; i++) {
                const star = document.createElement("div")
                const size = Math.random() * 2 + 1.5
                star.className = "star moving"
                star.style.width = size + "px"
                star.style.height = size + "px"
                star.style.left = Math.random() * window.innerWidth + "px"
                star.style.top = Math.random() * window.innerHeight + "px"
                star.style.boxShadow = "0 0 " + (size * 2) + "px rgba(255, 255, 255, 0.5)"
                container.appendChild(star)
            }
        }

        function createShootingStars(container, count) {
            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    createShootingStar(container)
                }, Math.random() * 5000)
            }
        }

        function createShootingStar(container) {
            const star = document.createElement("div")
            star.className = "star shooting"
            star.style.width = "2px"
            star.style.height = "2px"
            star.style.borderRadius = "50%"
            star.style.boxShadow = "0 0 6px rgba(255, 255, 255, 0.8)"
            
            const startX = Math.random() * window.innerWidth
            const startY = -10
            const endX = startX + (Math.random() - 0.5) * 400
            const endY = window.innerHeight + 10
            
            star.style.left = startX + "px"
            star.style.top = startY + "px"
            container.appendChild(star)
            
            if (window.gsap) {
                window.gsap.to(star, {
                    x: endX - startX,
                    y: endY - startY,
                    duration: Math.random() * 2 + 1,
                    ease: "none",
                    onComplete: () => {
                        star.remove()
                        setTimeout(() => {
                            createShootingStar(container)
                        }, Math.random() * 10000 + 5000)
                    }
                })
            }
        }

        function animateStarFieldAppearance() {
            const starElements = document.querySelectorAll(".star")
            if (window.gsap) {
                window.gsap.fromTo(
                    starElements,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: () => Math.random() * 0.8 + 0.2,
                        duration: 2,
                        stagger: 0.01,
                        ease: "back.out(1.7)",
                    },
                )
            }
        }

        function init3DMoon() {
            const container = document.getElementById("moonCanvas")
            if (!container || !window.THREE) return
            
            // Scene setup
            scene = new window.THREE.Scene()
            camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setClearColor(0x000000, 0)
            container.appendChild(renderer.domElement)

            // Lighting
            const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.7)
            scene.add(ambientLight)
            
            const directionalLight1 = new window.THREE.DirectionalLight(0xffffff, 1.8)
            directionalLight1.position.set(-5, 5, 5)
            scene.add(directionalLight1)

            // Load moon texture
            const textureLoader = new window.THREE.TextureLoader()
            textureLoader.load(
                "/moon-texture.jpg",
                (texture) => {
                    const moonGeometry = new window.THREE.SphereGeometry(2.2, 256, 256)
                    const moonMaterial = new window.THREE.MeshStandardMaterial({
                        map: texture,
                        roughness: 0.95,
                        metalness: 0.05,
                    })
                    moonMesh = new window.THREE.Mesh(moonGeometry, moonMaterial)
                    moonMesh.position.set(2, -4, -2)
                    scene.add(moonMesh)
                    
                    createMoonGlow()
                    animateMoon()
                    isLoaded = true
                },
            )

            camera.position.z = 5
            animate3D()
        }

        function createMoonGlow() {
            // Create glow effects
            const glowGeometry = new window.THREE.SphereGeometry(2.3, 32, 32)
            const glowMaterial = new window.THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.1,
                side: window.THREE.BackSide,
            })
            const glowMesh = new window.THREE.Mesh(glowGeometry, glowMaterial)
            glowMesh.position.set(2, -4, -2)
            scene.add(glowMesh)
            glowMeshes.push(glowMesh)
        }

        function animateMoon() {
            if (!moonMesh || !window.gsap) return
            
            moonMesh.material.opacity = 0
            
            const tl = window.gsap.timeline({ delay: 2 })
            tl.to(moonMesh.material, {
                duration: 1,
                opacity: 1,
                ease: "power2.out",
            })
            
            tl.to(moonMesh.position, {
                duration: 5,
                y: 0.5,
                x: 0,
                z: 0,
                ease: "power2.out",
            }, "-=0.5")
        }

        function animate3D() {
            requestAnimationFrame(animate3D)
            if (moonMesh && isLoaded) {
                moonMesh.rotation.y += 0.002
                moonMesh.rotation.x += 0.0003
            }
            if (renderer && scene && camera) {
                renderer.render(scene, camera)
            }
        }

        function initHeroAnimations() {
            const heroContent = document.getElementById("heroContent")
            const mountain = document.getElementById("mountain")
            
            if (!window.gsap || !heroContent || !mountain) return
            
            window.gsap.set(heroContent, { opacity: 0, y: 50 })
            window.gsap.set(mountain, { y: 100, opacity: 0 })
            
            const tl = window.gsap.timeline()
            tl.to(heroContent, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
            })
            
            tl.to(mountain, {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power3.out",
            }, "-=1")
        }
        `,
        }}
      />
    </div>
  )
}

// Star Field Creation Functions
function initStarField() {
  // This will be called from the script tag
}

function init3DMoon() {
  // This will be called from the script tag
}

function initHeroAnimations() {
  // This will be called from the script tag
}

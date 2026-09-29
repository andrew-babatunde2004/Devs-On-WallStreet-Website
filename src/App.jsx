import { useEffect, useState } from 'react'
import MemberPage from './memberpage'
import Footer from './Footer'

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isMembersPage = hash === '#members'

  return (
    <>
    <div className="hero">
      <nav className="nav" aria-label="Main navigation">
        <ul className="nav-links">
          <li>
            <a href="#home" aria-current={!isMembersPage ? 'page' : undefined}>Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#members" aria-current={isMembersPage ? 'page' : undefined}>Members</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav> 
      {isMembersPage ? <MemberPage /> : <main id="home" className="hero-copy">
        <h1>"Work In Progress Header Quote."</h1>
        <p id="about">
          The University of Georgia's only student-run FinTech organization, focused on creating the next
           generation of financial technology.
        </p>
      </main>}
    </div>
    <Footer />
    </>
  )
}

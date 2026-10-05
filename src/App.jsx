import './App.css'
import logoOutline from './assets/images/osd logo icon.svg'
import sunIcon from './assets/images/sun.svg'
import moonIcon from './assets/images/moon.svg'
import { useEffect, useState } from 'react'

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
    }, [isDarkMode])

    return (
        <div className="app-shell">
            <main className="bento-grid">
                <section id="projects" aria-label="projects">
                    <div class="title">= Projects</div>
                </section>

                <section id="title" aria-label="title">
                    <img className="title-logo-outline" src={logoOutline} alt="" aria-hidden="true" />
                    <button
                        className="theme-toggle"
                        type="button"
                        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                        aria-pressed={isDarkMode}
                        onClick={() => setIsDarkMode((currentMode) => !currentMode)}
                    >
                        <img src={isDarkMode ? moonIcon : sunIcon} alt="" aria-hidden="true" />
                    </button>
                    <div id="title-text">Open</div>
                    <div id="title-text">Development</div>
                    <div id="space-text">.Space</div>

                    <div id="desc"><br/>A space for everyone.</div>
                    <div id="small"><br/>v0.12</div>
                </section>

                <section id="contribute" aria-label="contribute">
                    <div class="title">+ Contribute</div>
                </section>
            </main>
        </div>
    )
}

export default App

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
                <div class="version"><br/>v0.15</div>
                <section class="bento-section" id="title" aria-label="title">
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
                </section>
                
                <section class="bento-section" id="projects-title-panel" aria-label="projects">
                    <div class="title">= Projects</div>
                </section>
                <section class="bento-section" id="projects-grid" aria-label="projects">
                    <section class="projects-section" id="projects-featured">
                        <div id="projects-title">
                            Featured
                            <div id="projects-name">opendevelopment-space</div>
                        </div>
                        <div id="projects-body">
                            Home of the Open Development Space website. <br/>
                            <br/>
                            Built with React and Vite. The website is available on GitHub. We promise something of note will be put here in the future.  
                        </div>
                    </section>
                    <section class="projects-section" id="projects-recent">
                        <div id="projects-title">
                            Recent
                            <div id="projects-name">Project Name</div>
                        </div>
                        <div id="projects-body">
                            Recent body text.
                        </div>
                    </section>
                    <section class="projects-section" id="projects-indev">
                        <div id="projects-title">
                            InDev
                            <div id="projects-name">resKern</div>
                        </div>
                        <div id="projects-body">
                            Rust based kernel to learn with.
                            <br/>
                            <br/>Building a kernel in rust where there is no standard library to use so you have to learn a lot from scratch.
                        </div>
                    </section>
                    <section class="projects-section" id="projects-upcoming">
                        <div id="projects-title">
                            Upcoming
                            <div id="projects-name">searCLI</div>
                        </div>
                        <div id="projects-body">
                            Simple CLI search engine.
                        </div>
                    </section>
                </section>

                <section class="bento-section" id="contribute-title-panel" aria-label="projects">
                    <div class="title">+ Contribute</div>
                </section>
                <section class="bento-section" id="contribute" aria-label="contribute">
                    <div id="bold">How to contribute to Open Development Space:</div>
                    <p>
                        Open Development Space is built on everyone being able to contribute.<br/>
                        <br/>
                        - Find an issue or feature you want to work on<br/>
                        - Make your changes<br/>
                        - Let us merge them<br/>
                        <br/>
                        If you have any questions, feel free to reach out to us!
                    </p>
                    <button class="contribute-button" type="button" aria-label="Contribute to Open Development Space">
                        <a href="https://github.com/Open-Development-Space/.github/blob/main/profile/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                            Contribute on GitHub ↗
                        </a>
                    </button>
                </section>
            </main>
        </div>
    )
}

export default App

import './App.css'
import logoOutline from './assets/images/osd logo icon.svg'
import sunIcon from './assets/images/sun.svg'
import moonIcon from './assets/images/moon.svg'
import { useEffect, useState } from 'react'
import ArrowField from './ArrowField'
import projects from './projects.json'

const CLASS_LABELS = {
    featured: 'Featured',
    recent: 'Recent',
    indev: 'InDev',
    upcoming: 'Upcoming',
}

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
    }, [isDarkMode])

    return (
        <div className="app-shell">
            <ArrowField isDarkMode={isDarkMode} />
            <main className="bento-grid">
                <div class="version"><br/>v1.2</div>
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
                    <div id="space-text">
                        .Space
                        <button class="title-button" type="button" aria-label="View on GitHub">
                            <a href="https://github.com/Open-Development-Space/" target="_blank" rel="noopener noreferrer">
                                ↗
                            </a>
                        </button>
                    </div>

                    <div id="desc"><br/>A space for everyone.</div>
                </section>
                
                <section class="bento-section" id="projects-title-panel" aria-label="projects">
                    <div class="title">= Projects</div>
                </section>
                <section className="bento-section" id="projects-grid" aria-label="projects">
                    {projects.map(({ class: category, title, link, description }) => (
                        <section
                            key={`${category}-${title}`}
                            className="projects-section"
                            id={`projects-${category}`}
                        >
                            <div className="projects-title">
                                {CLASS_LABELS[category] ?? category}
                                <div className="projects-name">{title}</div>
                                {link && (
                                    <a
                                        className="projects-button"
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${title} on GitHub`}
                                    >
                                        ↗
                                    </a>
                                )}
                            </div>
                            <div className="projects-body">{description}</div>
                        </section>
                    ))}
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

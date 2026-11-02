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

const ROTATION_INTERVAL = 5000
const MANUAL_PAUSE_DURATION = 10000

const projectsByClass = projects.reduce((groups, project) => {
    groups[project.class] ??= []
    groups[project.class].push(project)
    return groups
}, {})

function ProjectCarousel({ category, categoryProjects }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [pauseUntil, setPauseUntil] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (categoryProjects.length < 2 || isHovered) return

        const remainingPause = pauseUntil - Date.now()
        const delay = remainingPause > 0 ? remainingPause : ROTATION_INTERVAL
        const timer = window.setTimeout(() => {
            if (remainingPause > 0) {
                setPauseUntil(0)
            } else {
                setActiveIndex((index) => (index + 1) % categoryProjects.length)
            }
        }, delay)

        return () => window.clearTimeout(timer)
    }, [activeIndex, categoryProjects.length, isHovered, pauseUntil])

    return (
        <section
            className="projects-section"
            id={`projects-${category}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="projects-slides">
                {categoryProjects.map((project, index) => (
                    <div
                        key={project.title}
                        className={`project-slide${index === activeIndex ? ' is-active' : ''}`}
                        aria-hidden={index !== activeIndex}
                    >
                        <div className="projects-title">
                            {CLASS_LABELS[category] ?? category}
                            <div className="projects-name">{project.title}</div>
                            {project.link && (
                                <a
                                    className="projects-button"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title} on GitHub`}
                                    tabIndex={index === activeIndex ? 0 : -1}
                                >
                                    ↗
                                </a>
                            )}
                        </div>
                        <div className="projects-body">{project.description}</div>
                    </div>
                ))}
            </div>
            {categoryProjects.length > 1 && (
                <div className="projects-indicators" role="group" aria-label={`${CLASS_LABELS[category] ?? category} projects`}>
                    {categoryProjects.map((project, index) => (
                        <button
                            key={project.title}
                            className="projects-indicator"
                            type="button"
                            aria-label={`Show ${project.title}`}
                            aria-pressed={index === activeIndex}
                            onClick={() => {
                                setActiveIndex(index)
                                setPauseUntil(Date.now() + MANUAL_PAUSE_DURATION)
                            }}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
        document.querySelectorAll('.projects-body').forEach((body) => {
            const section = body.parentElement;
            const update = () => {
                const scrollable = body.scrollHeight > body.clientHeight + 1;
                const atEnd = body.scrollTop + body.clientHeight >= body.scrollHeight - 2;
                section.toggleAttribute('data-scrollable', scrollable);
                section.toggleAttribute('data-at-end', atEnd);
            };
            body.addEventListener('scroll', update, { passive: true });
            new ResizeObserver(update).observe(body);
            update();
        });
    }, [isDarkMode])

    return (
        <div className="app-shell">
            <ArrowField isDarkMode={isDarkMode} />
            <main className="bento-grid">
                <div class="version"><br/>v2.0</div>
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
                    {Object.entries(projectsByClass).map(([category, categoryProjects]) => (
                        <ProjectCarousel
                            key={category}
                            category={category}
                            categoryProjects={categoryProjects}
                        />
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
                    <div id="contribute-footer">
                        Contribute on GitHub 
                        <button class="contribute-button" type="button" aria-label="Contribute to Open Development Space">
                            <a href="https://github.com/Open-Development-Space/.github/blob/main/profile/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                                ↗
                            </a>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App

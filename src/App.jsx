import './App.css'

const organizationUrl = 'https://github.com/Open-Development-Space'
const repositoriesUrl = `${organizationUrl}/repositories`

function SiteHeader({ contributionPage = false }) {
    return (
        <header className="site-header">
            <a className="wordmark" href="/" aria-label="Open Development Space home">
                <img src="/assets/images/osd%20logo%20icon.png" alt="" />
                <span>Open Development Space</span>
            </a>
            <nav className="site-nav" aria-label="Main navigation">
                {contributionPage ? (
                    <a href={repositoriesUrl}>Explore projects <span aria-hidden="true">↗</span></a>
                ) : (
                    <>
                        <a href="#projects">What we do</a>
                        <a href="#up-next">What's next</a>
                    </>
                )}
                <a className="nav-cta" href={contributionPage ? '/' : '/contribute'}>
                    {contributionPage ? 'Back home' : 'Get involved'} <span aria-hidden="true">↗</span>
                </a>
            </nav>
        </header>
    )
}

function HomePage() {
    return (
        <div className="site-shell">
            <SiteHeader />
            <main className="bento-grid">
                <section className="card title-card" id="home">
                    <p className="eyebrow"><span className="status-dot" /> A space to build in the open</p>
                    <h1>Open<br />Development<br /><span>Space.</span></h1>
                    <p className="title-caption">Ideas grow better when we build them together.</p>
                    <a className="text-link title-link" href="https://github.com/Open-Development-Space">
                        Explore our GitHub <span aria-hidden="true">↗</span>
                    </a>
                    <span className="orbit orbit-one" aria-hidden="true" />
                    <span className="orbit orbit-two" aria-hidden="true" />
                </section>

                <section className="card work-card" id="projects">
                    <div className="card-topline">
                        <span className="card-number">01 / WHAT WE DO</span>
                        <span className="card-icon" aria-hidden="true">✳</span>
                    </div>
                    <div>
                        <h2>Make room for good ideas.</h2>
                        <p>We bring people together to explore ideas, make useful things, and share the work openly.</p>
                    </div>
                    <a className="text-link" href="https://github.com/orgs/Open-Development-Space/repositories">
                        See our repositories <span aria-hidden="true">↗</span>
                    </a>
                </section>

                <section className="card involve-card" id="contribute">
                    <div className="card-topline">
                        <span className="card-number">02 / GET INVOLVED</span>
                        <span className="card-icon" aria-hidden="true">↗</span>
                    </div>
                    <div className="involve-content">
                        <div>
                            <h2>There's a place for you here.</h2>
                            <p>Find a project, bring a skill, or just start a conversation. Every contribution moves us forward.</p>
                        </div>
                        <a className="button-link" href="/contribute">
                            How to contribute <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                    <div className="dot-stamp" aria-hidden="true">OPEN<br />BY<br />NATURE</div>
                </section>

                <section className="card next-card" id="up-next">
                    <div className="card-topline">
                        <span className="card-number">03 / WHAT'S NEXT</span>
                        <span className="card-icon" aria-hidden="true">→</span>
                    </div>
                    <div>
                        <h2>Just getting started.</h2>
                        <p>More people. More experiments. More ideas turned into something real.</p>
                    </div>
                    <a className="text-link" href={organizationUrl}>
                        Follow along on GitHub <span aria-hidden="true">↗</span>
                    </a>
                </section>
            </main>
            <footer className="site-footer">
                <span>Open Development Space</span>
                <a href={organizationUrl}>Made in the open on GitHub <span aria-hidden="true">↗</span></a>
            </footer>
        </div>
    )
}

function ContributionPage() {
    return (
        <div className="site-shell contribution-shell">
            <SiteHeader contributionPage />
            <main className="contribution-page">
                <a className="back-link" href="/">← Back to home</a>
                <section className="card contribution-card">
                    <p className="eyebrow"><span className="status-dot" /> Everyone starts somewhere</p>
                    <h1>Make something<br /><span>with us.</span></h1>
                    <p className="contribution-intro">
                        Open Development Space is built by people who care about making and sharing useful work.
                        Pick the way in that feels right for you.
                    </p>
                    <ol className="contribution-steps">
                        <li><span>01</span><div><h2>Find a project</h2><p>Browse the repositories and see what catches your interest.</p></div></li>
                        <li><span>02</span><div><h2>Start a conversation</h2><p>Open an issue to ask a question, share an idea, or find a first task.</p></div></li>
                        <li><span>03</span><div><h2>Build in the open</h2><p>Read the project's contribution notes, then share your work with a pull request.</p></div></li>
                    </ol>
                    <a className="button-link contribution-button" href="https://github.com/orgs/Open-Development-Space/repositories">
                        Browse GitHub repositories <span aria-hidden="true">↗</span>
                    </a>
                </section>
                <footer className="site-footer">
                    <span>Open Development Space</span>
                    <a href={organizationUrl}>Visit our GitHub <span aria-hidden="true">↗</span></a>
                </footer>
            </main>
        </div>
    )
}

function App() {
    const isContributionPage = window.location.pathname.replace(/\/+$/, '') === '/contribute'

    return isContributionPage ? <ContributionPage /> : <HomePage />
}

export default App

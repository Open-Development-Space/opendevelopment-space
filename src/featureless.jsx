import './App.css'
import logoOutline from './assets/images/osd logo icon.svg'

function App() {
    return (
        <div className="app-shell">
            <main className="bento-grid">
                <section id="projects" aria-label="projects">
                    <div class="title">Projects</div>
                    <line />
                </section>

                <section id="title" aria-label="title">
                    <img className="title-logo-outline" src={logoOutline} alt="" aria-hidden="true" />
                    <div id="title-text">Open</div>
                    <div id="title-text">Development</div>
                    <div id="space-text">Space</div>

                    <div id="desc"><br/>A space for everyone.</div>
                </section>

                <section id="contribute" aria-label="contribute">
                    <div class="title">Contribute</div>
                </section>

                
            </main>
        </div>
    )
}

export default App

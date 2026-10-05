import './App.css'

const sections = [
    { href: 'projects', id: 'proj', label: 'Projects' },
    { href: 'contribute', id: 'cont', label: 'Contribute' },
    { href: 'apply', id: 'app', label: 'Apply ARROW' },
]

function App() {
    return (
        <div className="app-shell">
            <header className="top-bar">
                <a className="brand" href="/" aria-label="Open Development Space home">
                    <img alt="" />
                    <span>Open Development Space</span>
                </a>
                <nav aria-label="Main navigation">
                    {sections.map((section) => (
                        <a key={section.id} id={`${section.id}`} href={`#${section.href}`}>
                            {section.label}
                        </a>
                    ))}
                </nav>
            </header>

            <main className="bento-grid">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} aria-label={`Container ${section.label}`} />
                ))}
            </main>
        </div>
    )
}

export default App

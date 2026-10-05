import './App.css'

const sections = [
    { id: 'one', label: 'One' },
    { id: 'two', label: 'Two' },
    { id: 'three', label: 'Three' },
]

function App() {
    return (
        <div className="app-shell">
            <header className="top-bar">
                <a className="brand" href="/" aria-label="Open Development Space home">
                    <img src="/assets/images/osd%20logo%20icon.png" alt="" />
                    <span>Open Development Space</span>
                </a>
                <nav aria-label="Main navigation">
                    {sections.map((section) => (
                        <a key={section.id} href={`#${section.id}`}>
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

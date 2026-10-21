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
                <section class="bento-section" id="projects" aria-label="projects">
                    <div class="title">= Projects</div>

                    <div class="projects-grid">
                        <section id="featured">
                            <div id="projects-title">
                                Featured
                                <div id="projects-name">Project Name</div>
                            </div>
                            <div id="projects-body">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Et duis aut laborum ad adipiscing commodo temporibus. Temporibus sint tempor est irure exercitation ullamco amet cillum. Et sit laborum provident nihil cupiditate quos. Odio officia illum excepteur id at adipiscing qui mollit in officia est eum.
                                <br /><br />
                                Elit est tempore sunt ex dolores ea velit cupiditate. Praesentium possimus reprehenderit illum anim fugiat harum. Tempore temporibus qui imperdiet eiusmod ut libero ad excepteur vero. Quo repellendus cupidatat minus eos voluptatum et eligendi.
                                <br /><br />
                                Assumenda nulla laborum dolorum sint nihil fugiat veniam cupiditate. Est possimus cumque temporibus qui do laborum et praesentium sint. Exercitation esse eu mollitia commodo odio voluptate nulla lorem dolor eligendi sint possimus. Occaecat duis id ut occaecat dolore dolore.
                                <br /><br />
                                Dolores molestias dolores commodo et reprehenderit blanditiis maxime dolorum in. Dignissimos sunt nobis dolor praesentium assumenda deserunt et voluptas minus consectetur cupidatat est. Imperdiet ullamco ea omnis provident minus dolor quas et cupiditate. Tempore dolores repellendus facere iusto sit qui. Blanditiis quos voluptas possimus quas sint et.
                                <br /><br />
                                Quod est facere nisi pariatur est. Deserunt ut culpa id qui aliquip et nostrud optio ut dolores fuga mollitia. Ad in nulla id vero blanditiis.
                                <br /><br />
                                Et facilis fugiat sunt ex exercitation animi qui est nam. Eum blanditiis soluta provident dignissimos eum occaecat sint odio sed sunt. Consequat optio exercitation officia nulla dolore illum omnis optio nobis nisi. Ipsum id consequatur eiusmod illum soluta nulla velit quibusdam cupidatat eligendi quis ducimus.
                                <br /><br />
                                Molestias harum et vero aute accusamus minus facilis facilis eos. Lorem magna in irure vel et laboris laborum. Dignissimos eligendi repellendus nihil deleniti harum vero expedita quas sint eos ipsum blanditiis. Imperdiet culpa autem blanditiis et quo nostrud sit pariatur est consectetur sint autem.
                            </div>
                        </section>
                        <section id="recent">
                            <div id="projects-title">
                                Recent
                                <div id="projects-name">Project Name</div>
                            </div>
                            <div id="projects-body">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Et duis aut laborum ad adipiscing commodo temporibus. Temporibus sint tempor est irure exercitation ullamco amet cillum. Et sit laborum provident nihil cupiditate quos. Odio officia illum excepteur id at adipiscing qui mollit in officia est eum.
                                <br /><br />
                                Elit est tempore sunt ex dolores ea velit cupiditate. Praesentium possimus reprehenderit illum anim fugiat harum. Tempore temporibus qui imperdiet eiusmod ut libero ad excepteur vero. Quo repellendus cupidatat minus eos voluptatum et eligendi.
                                <br /><br />
                                Assumenda nulla laborum dolorum sint nihil fugiat veniam cupiditate. Est possimus cumque temporibus qui do laborum et praesentium sint. Exercitation esse eu mollitia commodo odio voluptate nulla lorem dolor eligendi sint possimus. Occaecat duis id ut occaecat dolore dolore.
                            </div>
                        </section>
                        <section id="indev">
                            <div id="projects-title">
                                InDev
                                <div id="projects-name">Project Name</div>
                            </div>
                            <div id="projects-body">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Et duis aut laborum ad adipiscing commodo temporibus. Temporibus sint tempor est irure exercitation ullamco amet cillum. Et sit laborum provident nihil cupiditate quos. Odio officia illum excepteur id at adipiscing qui mollit in officia est eum.
                            </div>
                        </section>
                        <section id="upcoming">
                            <div id="projects-title">
                                Upcoming
                                <div id="projects-name">Project Name</div>
                            </div>
                            <div id="projects-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </section>
                    </div>
                </section>

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
                    <div id="small"><br/>v0.14</div>
                </section>

                <section class="bento-section" id="contribute" aria-label="contribute">
                    <div class="title">+ Contribute</div>
                </section>
            </main>
        </div>
    )
}

export default App

import { AppBar, Typography, Toolbar } from "@mui/material";
import { useState, useEffect } from "react";
import './Netflix.css';

const NetflixApp = () => {
    const scrollTop = {
        background: 'transparent',
        transition: 'background .5s ease-out',
        boxShadow: 'none'
    }

    const scrollBottom = {
        background: '#111',
        transition: 'background .5s ease-out',
        boxShadow: 'none'
    }

    const [appBarStyle, setAppBarStyle] = useState(scrollTop)

    const margin10 = { margin: 10 }

    const onScroll = (e) => {
        e.target.documentElement.scrollTop >= 100 
        ? setAppBarStyle(scrollBottom)
        : setAppBarStyle(scrollTop)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div>
            <AppBar style={appBarStyle}>
                <Toolbar>
                    <img className="nav__logo" src="images/netflix-logo.png" alt="Logo Netflix" />
                    <a href="/le_lien">
                        <Typography style={margin10} variant="h6">
                            Accueil
                        </Typography>
                    </a>
                    <a href="/le_lien">
                        <Typography style={margin10} variant="h6">
                            Séries
                        </Typography>
                    </a>
                    <a href="/le_lien">
                        <Typography style={margin10} variant="h6">
                            Films
                        </Typography>
                    </a>
                    <a href="/le_lien">
                        <Typography style={margin10} variant="h6">
                            Nouveautés
                        </Typography>
                    </a>
                    <a href="/le_lien">
                        <Typography style={margin10} variant="h6">
                            Ma liste
                        </Typography>
                    </a>
                    <img style={{ marginLeft: "auto" }} className="nav__avatar" src="images/netflix-avatar.png" alt="avatar" />
                </Toolbar>
            </AppBar>

            <header className="banner">
                <div className="banner__contents">
                    <h1 className="banner__title">La casa de papel</h1>
                    <div className="banner__buttons">
                        <button className="banner__button banner__buttonplay">Lecture</button>
                        <button className="banner__button banner__buttonInfo">Ajouter à ma liste</button>
                    </div>
                    <h1 className="synopsis">Le Professeur recrute une jeune braqueuse et sept autres criminels
                        en vue d'un cambriolage grandiose ciblant la Maison royale de la
                        Monnaie d'Espagne.</h1>
                </div>
            </header>
            <div className="row">
                <h2>Films Netflix</h2>
                <div className="row__posters">
                    <img className="row__poster row__posterLarge" src="images/sample.jpg" alt="" />
                    <img className="row__poster row__posterLarge" src="images/sample1.jpg" alt="" />
                    <img className="row__poster row__posterLarge" src="images/sample.jpg" alt="" />
                    <img className="row__poster row__posterLarge" src="images/sample1.jpg" alt="" />
                </div>
            </div>
            <div className="row">
                <h2>Série Netflix</h2>
                <div className="row__posters">
                    <img className="row__poster row__posterLarge" src="images/sample-poster.jpg" alt="" />
                    <img className="row__poster row__posterLarge" src="images/sample-poster1.jpg" alt="" />
                    <img className="row__poster row__posterLarge" src="images/sample-poster.jpg" alt="" />
                    <img className="row__poster row__posterLarge" src="images/sample-poster1.jpg" alt="" />
                </div>
            </div>
            <footer className="footer">2022 - Netflix Clone</footer>
        </div>
    );
}

export { NetflixApp }
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const tabs = ['Home', 'Projects', 'Contact'];
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <a className="navbar-brand" href="#">Hidden Brand</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {tabs.map(tab => (
                            <li className="nav-item" key={tab}>
                                <Link to={'/' + tab} className="nav-link active">{tab}</Link>
                            </li>
                        ))}
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>

        </nav>
    );
}

export default Nav;
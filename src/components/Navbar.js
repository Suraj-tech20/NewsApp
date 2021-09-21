import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
// import { createBrowserHistory } from 'history'


export class Navbar extends Component {
    // A main funtion for onclick event with link
    async searchClick(e) {
        e.preventDefault();
        let value = await document.getElementById('searchQuery').value;
        value = await value.slice(0, 50);
        value = await value.split(' ');
        value = await value.join('+');
        await this.props.setQuery(value);
        this.props.history.push('/query/' + value);
    }
    render() {
        try {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">DailyDose</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" id="searchQuery" type="search" placeholder="Search" aria-label="Search" />
                                <Link className="btn btn-outline-success" type="submit" onClick={this.searchClick.bind(this)} to='/query'>Search</Link>
                            </form>
                        </div>
                    </div>
                </nav>
            )
        } catch (error) {
            return (<h1 className='mt-5'>An Unexpected error occured</h1>)
        }
    }
}

export default withRouter(Navbar);

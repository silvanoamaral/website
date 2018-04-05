import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../home/Home';
import About from '../about/About';
import Footer from '../footer/Footer';

class Template extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="app">
                <header> 
                    <Router>
                        <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/topics">Topics</Link>
                                </li>
                            </ul>
                        </nav>

                    
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        </div>
                    </Router>
                </header>
                
                <main>
                    {children}
                </main>                
                <Footer />
            </div>
        );
    }
}
  
const wrapper = document.querySelector('[data-js="root"]');
wrapper ? ReactDOM.render(<Template />, wrapper) : false;
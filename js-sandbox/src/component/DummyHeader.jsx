import React, {Component} from 'react';
import PropTypes from "prop-types";

class DummyHeader extends Component {

    render() {
        let myData = this.props.data;
        return (
        <header className='row'>
            <div className="col-12 bg-light">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {myData.map((o) => {
                                    return (
                                        <li className='nav-item' key={o.label} onClick={()=>this.props.onclick(o.label)}>
                                            <a className='nav-link'  href={o.link}>{o.label}</a>
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>);
    }
}

DummyHeader.propTypes = {
    data: PropTypes.array.isRequired,
    onclick: PropTypes.func.isRequired
};
export default DummyHeader;
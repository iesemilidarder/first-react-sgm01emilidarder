import React, {Component} from 'react';
import PropTypes from "prop-types";

class DummyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {currentLabel: 'Home'};
        this._changeLabel = this._changeLabel.bind(this)
    }


    _changeLabel(label) {
        if (id !== undefined) {
        this.setState({currentLabel: label});
    }

    }

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
                                        <li className='nav-item' key={o.label}>
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
    label: PropTypes.array
};
export default DummyHeader;
import React, {Component} from 'react';
import PropTypes from "prop-types";

class DummyArticle extends Component {


    render() {
        const txt = this.props.data;
        let colClass = "col";
        if (this.props.numCols !== undefined) {
            colClass = "col-" + this.props.numCols;
        }
        return (
            <div className={colClass}>
                <h1>{txt.label}</h1>
                <p>{txt.text}</p>
            </div>
        );
    };
}

DummyArticle.propTypes = {
    numCols: PropTypes.number,
    data: PropTypes.object
};

export default DummyArticle;


import React, {Component} from 'react';

class DummySidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }


    render() {
        return (
            <div className={this.state.isToggleOn ? 'col-1' : 'col-2 border bg-light'}>
                <div className='row'>
                    <div className="col-12">
                        <button onClick={this._handleClick}
                                className={this.state.isToggleOn ? 'btn btn-light float-right' : 'btn btn-white float-right'}
                                aria-label="Close">
                            {this.state.isToggleOn ? <span className='btn'>Show</span> :
                                <span aria-hidden="true">&times;</span>}
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <div className={this.state.isToggleOn ? 'invisible' : 'visible btn-group-vertical col-12'}>
                        <button type="button" className="btn btn-secondary text-center btn-block btn-lg">Lorem</button>
                        <button type="button" className="btn btn-secondary text-center btn-block btn-lg">Lorem</button>
                        <button type="button" className="btn btn-secondary text-center btn-block btn-lg">Lorem</button>
                        <button type="button" className="btn btn-secondary text-center btn-block btn-lg">Lorem</button>
                        <button type="button" className="btn btn-secondary text-center btn-block btn-lg">Lorem</button>
                        <button type="button" className="btn btn-secondary text-center btn-block btn-lg">Lorem</button>
                        <button type="button" className="btn btn-secondary text-center btn-block btn-lg">Lorem</button>
                        <button type="button" className="btn btn-secondary text-center btn-block btn-lg">Lorem</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default DummySidebar;


import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

// const Counter = ({counter, smth, inc, dec, rnd}) => {
//     return (
//         <div className="jumbotron">
//             <h1>{counter}{smth}</h1>
//             <button onClick={dec} className="btn btn-primary">DEC</button>
//             <button onClick={inc} className="btn btn-primary">INC</button>
//             <button onClick={rnd} className="btn btn-primary">RND</button>
//         </div>
//     );
// };

class Counter extends Component {
    render() {
        const {counter, smth, inc, dec, rnd} = this.props;
        return (
            <div className="jumbotron">
                <h1>{counter}{smth}</h1>
                <button onClick={dec} className="btn btn-primary">DEC</button>
                <button onClick={inc} className="btn btn-primary">INC</button>
                <button onClick={rnd} className="btn btn-primary">RND</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

export default connect(mapStateToProps, actions)(Counter);
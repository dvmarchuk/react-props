import React, {Component} from 'react';

class DetailedButton extends Component {
    render() {
        let {onUserClick, id} = this.props
        return (
                <button onClick={() => {
                    onUserClick(id);
                }}>details</button>
        );
    }
}

export default DetailedButton;
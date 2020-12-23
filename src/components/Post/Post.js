import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, onUserClick} = this.props;
        return (
            <div>
                {item.userId} - {item.title}
                <button onClick={() => {
                    onUserClick(item.id);
                }}>details</button>
            </div>
        );
    }
}

export default Post;
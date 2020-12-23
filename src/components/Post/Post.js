import React, {Component} from 'react';
import DetailedButton from "../Button/DetailedButton";

class Post extends Component {
    render() {
        let {item, onUserClick} = this.props;
        return (
            <span>
                {item.userId} - {item.title}
            </span>
        );
    }
}

export default Post;
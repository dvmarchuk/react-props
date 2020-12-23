import React, {Component} from 'react';
import DetailedButton from "../Button/DetailedButton";
import Post from "../Post/Post";

class ComposedPost extends Component {
    render() {
        let {item, onUserClick} = this.props;
        return (
            <div>
                <Post item={item} onUserClick={onUserClick}/>
                <DetailedButton onUserClick={onUserClick} id={item.id}/>
            </div>
        );
    }
}

export default ComposedPost;
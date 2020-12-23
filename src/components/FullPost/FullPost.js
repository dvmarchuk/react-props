import React, {Component} from 'react';
import Post from "../Post/Post";

class FullPost extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <Post item={item}/> -
                {item.body} -
                {item.id}
            </div>
        );
    }
}

export default FullPost;
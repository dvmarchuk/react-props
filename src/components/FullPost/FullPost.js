import React, {Component} from 'react';
import Post from "../Post/Post";
import Posts from "../Posts/Posts";

class FullPost extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                {item.id} -
                
                {item.body} -
            </div>
        );
    }
}

export default FullPost;
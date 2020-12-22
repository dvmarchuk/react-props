import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {post} = this.props;
        return (
            <div>
                {post.body}-{post.id}
            </div>
        );
    }
}

export default Post;
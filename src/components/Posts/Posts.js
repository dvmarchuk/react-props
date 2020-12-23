import React, {Component} from 'react';
import PostService from "../PostService";
import Post from "../Post/Post";
import FullPost from "../FullPost/FullPost";
import ComposedPost from "../ComposedPost/ComposedPost";

class Posts extends Component {

    state = {posts: [], postClicked: null};
    postService = new PostService();

    onUserClick = (id) => {
        let {posts} = this.state;
        let findPost = posts.find(value => value.id === id);
        this.setState({postClicked: findPost})
    };

    async componentDidMount(){
        let posts = await this.postService.getPosts();
        this.setState({posts});
    }



    render() {
        let {postClicked, posts} = this.state;
        return (
            <div>
                <div>
                    {posts.map(post =>
                        <ComposedPost
                            item={post}
                            key={post.id}
                            onUserClick = {this.onUserClick}/>
                    )}

                </div>
                <hr/>
                <div>
                    {postClicked && <FullPost item={postClicked}/>}
                </div>
            </div>
        );
    }
}

export default Posts;
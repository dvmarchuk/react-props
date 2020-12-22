import React, {Component} from 'react';
import PostService from "../PostService";
import Post from "../Post/Post";

class Posts extends Component {

    state = {posts: []};
    postService = new PostService();

    async componentDidMount(){
        let posts = await this.postService.getPosts();
        this.setState({posts});
    }



    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts.map(post => <Post item={post}/>)}
            </div>
        );
    }
}

export default Posts;
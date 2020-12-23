import React, {Component} from 'react';
import PostService from "../PostService";
import Post from "../Post/Post";

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
                        <Post
                            item={post}
                            key={post.id}
                            onUserClick = {this.onUserClick}
                        />)}
                </div>
                <hr/>
                <div>
                    {postClicked && <span>{postClicked.body}</span>}
                </div>
            </div>
        );
    }
}

export default Posts;
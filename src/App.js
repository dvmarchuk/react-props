import React, {Component} from 'react';
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import Post from "./components/Post/Post";

class App extends Component {
    render() {
        return (
            <div>
                <Posts/>
            </div>
        );
    }
}

export default App;
import React from 'react';
class LikeComponent extends React.Component {
 

    state={
        likeCount: 0,
    };

    updateState() {
        this.setState({likeCount: this.state.likeCount + 1});
    }

    render() {
        return (
            <div>
                <h1>Like Component</h1>
                <p>👍 {this.state.likeCount}</p>
                <button onClick={() => this.updateState()}>Like</button>
            </div>
        );
    }
}
export default LikeComponent;
import React, { Component } from 'react'

class UserItem extends Component {

    state = {
        id: 'id',
        login: "mcaniglia16",
        avatar_url: "https://avatars.githubusercontent.com/u/50206147?v=4",
        html_url: "https://github.com/mcaniglia16"
    }

    render() {
        return (
            <div className="card text-center">
                <img src={this.state.avatar_url} className="round-img" style={{width: '60px'}}></img>
                <h3>{this.state.login}</h3>
                <div>
                    <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">More</a> 
                </div>
            </div>
        )
    }
}

export default UserItem

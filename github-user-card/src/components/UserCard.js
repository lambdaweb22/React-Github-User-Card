import React from 'react';


class UserCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.user);
        return(
            <>
                <img width='200px' src={this.props.user.avatar_url} alt="user avatar" />
                <h2>{this.props.user.login}</h2>
                <p>Name: {this.props.user.name}</p>
                <p>Bio: {this.props.user.bio ? this.props.user.bio : 'None'}</p>
            </>
        )
    }
}

export default UserCard;
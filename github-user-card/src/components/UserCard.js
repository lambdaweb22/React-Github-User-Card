import React from 'react';


class UserCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.user);
        const user = this.props.user;
        const followers = this.props.followers;
        return(
            <div className="user-card">
                <img width='200px' src={user.avatar_url} alt="user avatar" />
                <h2>{user.login}</h2>
                <p>Name: {user.name}</p>
                <p>Bio: {user.bio ? user.bio : 'None'}</p>
                <p>Followers: {user.followers}</p>
                {followers.map(follower => (
                    <div key={follower.id}>{follower.login}</div>
                ))}
            </div>
        )
    }
}

export default UserCard;
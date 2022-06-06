import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Components/Context';
import './Search.css';

export function Search () {
    const {value: usersList, set: setUsersList}=useContext(Context).usersList;
    const [name, setName]=useState('');
    const [users, setUsers]=useState([]);
    
    useEffect (() => {
        if(name.length<3) return;
        fetch(`https://api.github.com/search/users?q=${name}&sort=login&per_page=15`)
            .then(res => res.json())
            .then(({ items }) => setUsers(items))
    }, [name]);

    function updateUsersList(user){
        Promise.all([
            fetch(user.followers_url).then (res => res.json()),
            fetch(user.following_url.split('{/other')[0]).then (res => res.json()),
            fetch(user.starred_url.split('{/owner')[0]).then (res => res.json()),
            fetch(user.repos_url).then (res => res.json())
        ]).then(([followers, following, starred, repos]) => {
            const newUser = {...user, followers: followers.length, following: following.length, starred: starred.length, repos: repos.length};
            setUsersList([...usersList, newUser]);
        })
    }

    return <div className="search-page">
        <input className="user-input" type="text" onChange={(evt) => setName(evt.target.value)}></input>
        {users.map(user => <Link to="users" key={user.login} className="user-section" 
            onClick={() => updateUsersList(user)}> 
            <img className="avatar" src={user.avatar_url}></img>
            {user.login}
            </Link>)}
    </div>
}
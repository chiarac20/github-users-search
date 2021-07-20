import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Components/Context';
import './Search.css';

export function Search () {
    const info=useContext(Context);
    const [name, setName]=useState('');
    const [users, setUsers]=useState([]);

    useEffect (() => {
        if(name.length<3) return;
        fetch(`https://api.github.com/search/users?q=${name}&sort=login&per_page=15`)
            .then(res => res.json())
            .then(({ items }) => setUsers(items))
    }, [name]);

    return <div className="search-page">
        <input className="user-input" type="text" onChange={(evt) => setName(evt.target.value)}></input>
        {users.map(user => <div key={user.login} className="user-section" 
            onClick={() => console.log(user)}> 
            <img className="avatar" src={user.avatar_url}></img>
            {user.login}
            </div>)}
        <Link to="/users"> users </Link>
    </div>
}
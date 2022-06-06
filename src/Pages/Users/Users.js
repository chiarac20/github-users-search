import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Users.css';
import { Context } from '../../Components/Context';

export function Users () {
    const {value: usersList}=useContext(Context).usersList;

    console.log(usersList)

    function orderByRepos() {
        usersList.sort((rep1, rep2) => {
            return rep2.repos-rep1.repos;
        })
        console.log(usersList);
    }

    return <div>
        <ul>
            {usersList.map(user => <li key={user.login}>
                    <img src={user.avatar_url} className="avatar"></img>
                    <span>username: {user.login.toUpperCase()}</span>
                    <span>id: {user.id}</span>
                    <span>repositories: {user.repos}</span>
                    <span>followers: {user.followers} </span>
                    <span>following: {user.following}</span>
                    <span>stars: {user.starred}</span>
                    <span>score: {user.score}</span>
                    <span> url: <a href={user.html_url}> {user.html_url} </a> </span>
                </li>)}
        </ul>
        <div>
        <button onClick={orderByRepos}>Order by repositories</button>
        </div>
        <Link to="./">Add another user</Link>
    </div>       
}
import React from 'react';
import store from '../../store/index';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';

export default class Sidebar extends React.Component {

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    bgImage = () => {
        if(store.getState().user.avatar && store.getState().user.avatar.url) {
            return `url(${store.getState().user.avatar.url})`;
            
        } else {
            return `url(https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg)`;
        }
    }
    //<NavLink to="/create-quiz"><div className="link">Create Test</div></NavLink>
    render() {
        if (store.getState().user) {
            return (
                <div className="sidebar-wrapper">
                    <div className="header">Crack It</div>
    
                    <div className="user">
                        <div className="avatar" style={{backgroundImage: this.bgImage()}}></div>
                        <div className="name">{store.getState().user.firstName + ' ' + store.getState().user.lastName}</div>
                    </div>

                    <div className="links">
                        <NavLink to="/dashboard"><div className="link">Dashboard</div></NavLink>
                        <NavLink to="/account"><div className="link">Account</div></NavLink>
                        <NavLink to="/my-quizzes"><div className="link">My Tests</div></NavLink>
                        <NavLink to="/community-quizzes"><div className="link">Tests</div></NavLink>
                        <NavLink to="/"><div className="link">Logout</div></NavLink>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading</div>
            )
        }
    }
}
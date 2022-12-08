import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import front from './frontpage.png';
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scores:[]
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('JWT_PAYLOAD')) {
            this.props.history.push('/');
        }
        axios.get('/api/quizzes/dashboard/' + localStorage.getItem('_ID')).then(res => {
            this.setState({
                scores: res.data
            })
        })
    }

    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main">
                    <div className="top">
                        <img src={front} />
                    </div>
                </div>
            </div>
            
        )
    }
}
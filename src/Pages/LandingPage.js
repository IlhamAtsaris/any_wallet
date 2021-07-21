import React , { Component } from 'react';
import Header from '../Parts/Header'
import Sidebar from '../Parts/Sidebar';
import Amount from '../Parts/Amount';
import TableTransaction from '../Parts/TableTransaction';
class LandingPage extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <Sidebar/>
                <Amount/>
                <TableTransaction/>
            </div>
        )
    }
}

export default LandingPage
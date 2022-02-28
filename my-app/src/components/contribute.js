import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'

export class Contribute extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <div className='contribute_container'>
                    <h1>Contribute a Task or a Question</h1>
                    <form className='contribute_form'>
                        <div className='contribute_item'>
                            <label>Category: </label><br></br>
                            <select name='category' id='category' required style={{ fontSize: 'large', height: '4vh' }}>
                                <option value="NeverEver" style={{ fontSize: 'large' }}>Never have I ever</option>
                                <option value="Todo" style={{ fontSize: 'large' }}>TODO</option>
                                <option value="sexy" style={{ fontSize: 'large' }}>Other</option>
                            </select>
                        </div>
                        <div className='contribute_item'>
                            <label>Your Quest: </label><br></br>
                            <textarea id='quest' style={{ width: '100%', height: '10vh', fontSize: 'large' }}></textarea><br></br>
                        </div>
                        <div className='contribute_item'>
                            <input type="checkbox" id='dirty' style={{ width: '3vh', height: '3vh' }} /> Naughty Quest<br></br>
                        </div>
                        <div className='contribute_item'>
                            <label>Do you want to take credit for your quest?</label><br></br>
                            <input type="text" id='credit' placeholder='Enter your name' style={{ fontSize: 'large', width: '100%' }} />
                        </div>
                        <div className='contribute_item' style={{ marginTop: '10px', marginBottom: '0' }}>
                            <input className='submitButton' type="submit" value="Send your Quest" style={{ fontSize: 'large' }} />
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contribute;
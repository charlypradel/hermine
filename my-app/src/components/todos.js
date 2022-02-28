import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import GameCards from './gameCard'

export class TODOs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetched_data: false,
            tasks: ["Test1", "Test2", "Test3", "Test4"],
            current_task: "TEST",
        }
        this.getNextTask = this.getNextTask.bind(this)
    }

    getNextTask() {
        var allTasks = this.state.tasks
        var numTasks = allTasks.length;
        console.log("Num Tasks: ", numTasks)
        if (!numTasks) {
            let end_task = <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: 'auto' }}><b>Good Job Honey &#127866; &#127881; &#128077;<br />One could almost think that we're related &#128521; </b></Link>
            this.setState((state, props) => ({
                current_task: end_task,
            }))
        }
        else {
            var index = Math.floor(Math.random() * numTasks)
            var removed = allTasks.splice(index, 1)
            this.setState((state, props) => ({
                current_task: removed[0],
                tasks: allTasks,
            }))
        }

    }

    render() {
        return (
            <div className='App'>
                <Header />
                <button className='cardholder' onClick={this.getNextTask}>
                    <GameCards task={this.state.current_task} />
                </button>
                <Footer />
            </div>
        )
    }
}

export default TODOs;
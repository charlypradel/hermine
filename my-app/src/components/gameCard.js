import React, { Component } from 'react'

export class GameCards extends Component {
    render() {
        return (
            <div className='cards'>
                {this.props.task}
            </div>
        )
    }
}

export default GameCards;
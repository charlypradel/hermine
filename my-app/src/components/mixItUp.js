import React, { Component } from 'react'

export class MixItUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetched_data: false,
            questions: [],
        }
    }
    render() {
        return (
            <div>MixItUp</div>
        )
    }
}

export default MixItUp;
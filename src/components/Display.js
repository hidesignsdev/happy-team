import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <span id={this.props.id}>{this.props.result}</span>

        )
    }
}

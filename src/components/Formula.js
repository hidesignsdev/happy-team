import React, { Component } from 'react'

export default class Formula extends Component {
    render() {
        return (
            <span id={this.props.id}>{this.props.equation}</span>
        )
    }
}

import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
        <button value={this.props.value} id={this.props.id} className={this.props.className} onClick={this.props.click}>{this.props.display}</button>
        )
    }
}

import React, { Component } from 'react'

import styles from './Ball.module.css'

class Ball extends Component {
    render() {
        return <div className={styles.Ball}>{this.props.num}</div>
    }
}

export default Ball

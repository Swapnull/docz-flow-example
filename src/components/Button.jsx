// @flow
import React, { Component } from 'react'
import type { Node } from 'react';

type Props = {
  /** The text inside the button */
  children: Node,
  /** The color of the buttons text */
  color?: string,
  /** is the button clickable? */
  disabled?: boolean
}

export default class Button extends Component<Props> {
  render () {
    const { color, disabled, children } = this.props; 
    return (
      <button style={{ color }} disabled={disabled}>{children}</button>
    )
  }
}
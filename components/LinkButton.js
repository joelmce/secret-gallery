import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import header from "./stylesheets/header.module.css";

const LinkButton = (props) => {
  const buttonStyle = {
    position: "absolute",
    top: 20,
    right: 20,
    cursor: "pointer"
  }

  const {
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
    <div
      {...rest} // `children` is just another prop!
      className={header.primary_button}
      style={buttonStyle}
      onClick={(event) => {
        onClick && onClick(event)
      }}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default LinkButton

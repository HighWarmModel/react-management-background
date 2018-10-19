import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './index.styl'
function IconTag (props) {
  return (
    <div className={classNames('icon-tag', `icon-tag-${props.type}`, props.className)}></div>
  )
}
IconTag.propTypes = {
  type: PropTypes.oneOf(['commodity', 'equipment', 'home', 'invoice', 'merchant', 'reconciliation', 'revenue', 'single', 'statistics', 'financial-details', 'financial-statistics', 'notice-icon', 'setting-icon', 'search-icon', 'account-icon', 'password-icon', 'login-icon', 'location-icon']),
  className: PropTypes.string
}
export default IconTag
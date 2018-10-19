import React from 'react'
import './index.styl'
class Loading extends React.Component {
  componentDidMount () {
  }
  render () {
    const props = this.props
    return (
      <div className='loading'>
        {props.error ? <div>Error! <button onClick={ props.retry }>Retry</button></div> : null}
        <div className='loading-canvas-container' style={{display: props.pastDelay ? 'block' : 'none'}}>
          {/* <div className='base'>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
          </div> */}
        </div>
      </div>
    )
}
}
export default Loading
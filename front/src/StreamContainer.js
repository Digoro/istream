import React, { Component } from 'react'

import RequestStreamContainer from './RequestStreamContainer'
import StreamInfoContainer from './StreamInfoContainer'

class StreamContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Feteching: false,
      data: []
    }
  }

  render() {
    const stream_id = this.props.match.params.stream_id
    console.log(stream_id)
    return (
      <div>
        { !stream_id ? <RequestStreamContainer /> : <StreamInfoContainer id={stream_id}/> }
      </div>
    )
  }
}

export default StreamContainer

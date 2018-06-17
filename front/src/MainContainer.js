import React, { Component } from 'react'
import axios from 'axios'
import MainAppBar from './MainAppBar'
import MainCategoryGrid from './MainCategoryGrid'
import MainSingleGrid from './MainSingleGrid'
import VideoComponent from './VideoComponent'
import ProjectComponent from './ProjectComponent';

import './MainContainer.css'
import StreamerProfile from './StreamerProfile';

class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetching: false,
      videos: [],
      projects: [],
      streamers: [],
      category: []
    }
  }

  componentDidMount() {
    this.setState({isFetching: true})

    axios.get('http://localhost:3001/rest/api/1/category')
    .then((resp) => {
      this.setState(() => {
        return {
          category: resp.data,
          isFetching: false
        }
      })
    })
    .catch((err) => {
      console.log(err)
      this.setState({isFetching: false})
    })

    axios.get('http://localhost:3001/rest/api/1/topVideos')
      .then((resp) => {
        this.setState(() => {
          return {
            videos: resp.data,
            isFetching: false
        }
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({isFetching: false})
      })

    axios.get('http://localhost:3001/rest/api/1/topRequests')
      .then((resp) => {
        this.setState(() => {
          return {
              projects: resp.data,
              isFetching: false
          }
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({isFetching: false})
      })

    axios.get('http://localhost:3001/rest/api/1/topStreamer')
      .then((resp) => {
        this.setState(() => {
          return {
              streamers: resp.data,
              isFetching: false
          }
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({isFetching: false})
      })
  }

  render() {
    return (
      <div>
        <MainAppBar title="iSTREAM"/>
        <MainCategoryGrid data={this.state.category} />
        <MainSingleGrid />
        <h1 className='i-hot-videos-header'>HOT 영상</h1>
        <div className="i-hot-videos">
          { this.state.videos.length ? 
            this.state.videos.map((d, idx) => (
              <VideoComponent data={d} key={idx} />
            )) : '데이터가 없습니다.' 
          }
        </div>
        <h1 className='i-hot-videos-header'>HOT 프로젝트</h1>
        <div className="i-hot-videos">
          {
            this.state.projects.map((d, idx) => (
              <ProjectComponent data={d} key={idx} />
            ))
          }
        </div>
        <h1 className='i-hot-videos-header'>인기 스트리머</h1>
        <div className="i-hot-streams">
          {
            this.state.streamers.map((d, idx) => (
              <StreamerProfile data={d} key={idx} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default MainContainer

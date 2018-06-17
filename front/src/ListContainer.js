import React, { Component } from 'react'
import axios from 'axios'
import MainAppBar from './MainAppBar'
import ProjectComponent from './ProjectComponent'
import Divider from '@material-ui/core/Divider'

import './ListContainer.css'

class ListContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Feteching: false,
      hotProjects: [],
      projects: []
    }
  }

  componentDidMount() {
    const category_id = this.props.match.params.category_id
    this.setState({isFetching: true})

    axios.get('http://localhost:3001/rest/api/1/requestVideos/top/'+category_id+'')
      .then((resp) => {
        this.setState(() => {
          return {
            hotProjects: resp.data,
            isFetching: false
        }
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({isFetching: false})
      })

      axios.get('http://localhost:3001/rest/api/1/requestVideos/'+category_id+'')
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
  }

  render() {
    return (
      <div>
        <MainAppBar title='iStream'/>
        <div className='i-list-title'>교육</div>
        <div className='i-list-subtitle'>모집중인 프로젝트</div>
        <h1 className='i-hot-videos-header'>교육 분야 HOT 프로젝트</h1>
        <div className="i-hot-videos">
          {
            this.state.hotProjects.map((d, idx) => (
              <ProjectComponent data={d} key={idx} />
            ))
          }
        </div>
        <Divider />
        <div className='i-category-projects'>
          {
            this.state.projects.map((d, idx) => (
              <ProjectComponent data={d} key={idx} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default ListContainer

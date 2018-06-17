import React, { Component } from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import ReactPlayer from 'react-player'

import MainAppBar from './MainAppBar'

import './ListContainer.css'
import './StreamInfoContainer.css'

import Paragraph from './paragraph.png'


class StreamInfoContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Feteching: false,
      request: {},
      user: {},
      video: {},
      reply: []
    }
  }

  componentDidMount() {
    const stream_id = this.props.id
    this.setState({isFetching: true})

    axios.get('http://localhost:3001/rest/api/1/reply/'+ stream_id +'')
    .then((resp) => {
      this.setState(() => {
        return {
          reply: resp.data,
          isFetching: false
        }
      })
    })
    .catch((err) => {
      console.log(err)
      this.setState({isFetching: false})
    })

    axios.get('http://localhost:3001/rest/api/1/request/'+ stream_id +'')
      .then((resp) => {
        this.setState(() => {
          return {
            request: resp.data,
            isFetching: false
          }
        })
        axios.get('http://localhost:3001/rest/api/1/user/'+ resp.data.uid +'')
        .then((resp) => {
          this.setState(() => {
            return {
              user: resp.data,
              isFetching: false
            }
          })
        })
        .catch((err) => {
          console.log(err)
          this.setState({isFetching: false})
        })

        if (resp.data.status) {
          axios.get('http://localhost:3001/rest/api/1/video/request/'+ resp.data.rid +'')
          .then((resp) => {
            this.setState(() => {
              return {
                video: resp.data,
                isFetching: false
              }
            })
          })
          .catch((err) => {
            console.log(err)
            this.setState({isFetching: false})
          })
        }
      })
      .catch((err) => {
        console.log(err)
        this.setState({isFetching: false})
      })
  }

  render() {
    return (
      <div>
        <MainAppBar title='iSTREAM'/>
        <div className='i-list-title'>교육</div>
        <div className='i-list-subtitle'>완료된 프로젝트</div>
        <div className='i-video-content'>
          <h1>{this.state.request.title}</h1>
          <p>{this.state.request.date}</p>
          <div>
            <h3>{this.state.request.createdDT}</h3>
            <span>$ {this.state.request.price}</span>
          </div>
          {this.state.request.status ? 
            <ReactPlayer 
              className='video' url={this.state.video.url}
              width={'960px'} height={'540px'} /> : '아직 마감되지 않은 요청입니다.'}
          
          <div className='i-video-info user'>
            <div className='i-video-info'>
              <Avatar
                alt="Adelle Charles"
                src={this.state.user.thumbnail}
                className='i-video-bigAvatar'
              />{this.state.user.name}
            </div>
            <Button variant="contained" color="secondary" className='i-video-button'>
              ADD FUNDING
            </Button>
          </div>
          {
            this.state.reply.map((r, idx) => (
              <div key={idx}>
                <Avatar 
                  alt={r.userName}
                  src={r.userThumbnail}
                  className='i-video-bigAvatar'
                />
                <span>{r.userName} - {r.text} - {r.createdDT}</span><br />
              </div>
            ))
          }
          {/* <img src={Paragraph} className='i-video-comments'/> */}
          <Divider/>
          <h1>연관 동영상</h1>
          <div className='i-video-cards'>
            <img src={Paragraph} className='i-video-card'/>
            <img src={Paragraph} className='i-video-card'/>
            <img src={Paragraph} className='i-video-card'/>
          </div>
        </div>
      </div>
    )
  }
}

export default StreamInfoContainer

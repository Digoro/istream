import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

import MainAppBar from './MainAppBar'

import './RequestStreamContainer.css'

class RequestStreamContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Feteching: false,
      data: [],
      title: '',
      description: '',
      category: '',
      price: '',
      deadline: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = () => {
    this.setState({isFetching: true})

    axios.post('http://localhost:3001/rest/api/1/requestVideo', {
      uid: 1,
      title: this.state.title,
      desc: this.state.description,
      cid: this.state.category,
      price: this.state.price,
    }).then((resp) => {
      console.log(resp)
      this.setState({isFetching: false})
      this.props.history.goBack()
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
        <div className='i-request-form'>
        <h1>방송 요청하기</h1>
          <TextField
            required
            id="required"
            label="Title"
            value={this.state.title}
            onChange={this.handleChange('title')}
            className='i-request-input'
            margin="normal"
          />
          <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rowsMax="8"
            value={this.state.description}
            onChange={this.handleChange('description')}
            className='i-request-input'
            margin="normal"
          />
          <div className='i-request-price'>
            <FormControl className='i-request-input select' margin='normal' >
              <InputLabel htmlFor="age-native-simple">Category</InputLabel>
              <Select
                native
                value={this.state.category}
                onChange={this.handleChange('category')}
                inputProps={{
                  name: 'category',
                  id: 'age-native-simple',
                }}
              >
                <option value="" />
                <option value={0}>교육</option>
                <option value={1}>여행</option>
                <option value={2}>먹방</option>
                <option value={3}>뷰티</option>
                <option value={4}>펫</option>
                <option value={5}>리뷰</option>
                <option value={6}>액티비티</option>
              </Select>
            </FormControl>
            <TextField
              label="Price"
              value={this.state.price}
              onChange={this.handleChange('price')}
              className='i-request-input price'
              margin="normal"
            />
            <form className='i-picker-container' noValidate>
              <TextField
                id="date"
                label="DeadLine"
                type="date"
                className='i-picker-input'
                value={this.state.deadline}
                onChange={this.handleChange('deadline')}
                InputLabelProps={{
                  shrink: true,
                }}
                margin='normal'
              />
            </form>
          </div>
          <div className='i-request-btn-group'>
            <Button variant="contained" color="secondary" className='i-request-btn'>
              취소
            </Button>
            <Button variant="contained" color="primary" 
              className='i-request-btn'
              onClick={() => {this.handleSubmit()}}>
              펀딩
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default RequestStreamContainer

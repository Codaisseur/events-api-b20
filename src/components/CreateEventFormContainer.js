import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../actions/events'
import EventForm from './EventForm'

class CreateEventFormContainer extends React.PureComponent {
  state = {
    name: '',
    date: '',
    description: ''
  }

  onChange = (event) => {
    // Ignore input that is not part of the initial state above
    if (!Object.keys(this.state).includes(event.target.name)) return

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
      date: '',
      description: ''
    })
    this.props.createEvent(this.state)
  }

  render() {
    console.table(this.state)
    return (<EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createEvent})(CreateEventFormContainer)

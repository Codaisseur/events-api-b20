import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'
import CreateEventFormContainer from './CreateEventFormContainer'

class EventsListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    const { events } = this.props
    if (!events) return <p>Loading...</p>
    return (
      <div>
        <CreateEventFormContainer />
        <EventsList events={events} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)

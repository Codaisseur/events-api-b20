import React from 'react'
import './EventForm.css'

export default ({ values: { name, date, description }, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <div className="form-input">
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" value={name} onChange={onChange} />
    </div>

    <div className="form-input">
      <label htmlFor="date">Date:</label>
      <input id="date" name="date" type="text" value={date} onChange={onChange} />
    </div>

    <div className="form-input">
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        type="text"
        value={description}
        onChange={onChange}
      >
        {description}
      </textarea>
    </div>

    <div className="form-input">
      <input type="submit" value="Save" />
    </div>
  </form>
)

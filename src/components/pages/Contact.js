import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <div className="Contact">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea className="form-control" rows="5" value={this.state.comments} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
  }
}

export default Contact;

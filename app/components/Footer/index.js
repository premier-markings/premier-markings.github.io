import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      email: undefined,
      message: undefined,
      url:
        'https://script.google.com/macros/s/AKfycbzg0hEAI_we45BxMXQyirRcTPGNbtjlIoiJY-eLGl2Wg_o3p_Y/exec',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!re.test(this.state.email)) {
      document.getElementById('form_message').style.display = 'block';
      document.getElementById('form_message').style.color = 'red';
      document.getElementById('form_message').innerHTML =
        'Please check your email address.';
      return false;
    }
    const {url} = this.state;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      document.getElementById('form_message').style.display = 'block';
      document.getElementById('form_message').innerHTML =
        'Thank you. We will respond as soon as possible.';
      document.getElementById('form_message').style.color = 'green';
    };
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      formDataNameOrder: JSON.stringify(['name', 'message', 'email']),
      formGoogleSheetName: 'responses',
      formGoogleSendEmail: 'example@email.net',
    };
    const encoded = Object.keys(data)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
      .join('&');
    xhr.send(encoded);
  }

  render() {
    return (
      <div className='footer-container'>
        <div className='footer-container-content'>
          <div className='contact-info'>
            <h3>01740 622518</h3>
            <h3 href='mailto:kelly@premier-roadmarkings.co.uk'>
              <a className='flat-link'>kelly@premier-roadmarkings.co.uk</a>
            </h3>
            <div>
              <h3>Head Office:</h3>
              <h3>131 Salters Lane</h3>
              <h3>Sedgefield</h3>
              <h3>Stockton-on-Tees</h3>
              <h3>Cleveland</h3>
              <h3>TS21 3EE</h3>
            </div>
            <h3 onClick={() => this.props.openModal('/policy')}>
              <a className='flat-link'>Policy Documents</a>
            </h3>
            <img src='assets/imgs/credentials/credentials.png' alt='CHAS' />
          </div>
          <form
            className='footer-contact-form'
            id='gform'
            method='POST'
            onSubmit={this.handleSubmit}>
            <h3>Contact Us</h3>
            <input
              id='contact-form-name'
              type='text'
              placeholder='Name'
              className='footer-input'
              value={this.state.name}
              onChange={(event) => this.setState({name: event.target.value})}
            />
            <input
              id='contact-form-email'
              type='text'
              placeholder='Email'
              className='footer-input'
              value={this.state.email}
              onChange={(event) => this.setState({email: event.target.value})}
            />
            <textarea
              id='contact-form-message'
              type='text'
              placeholder='Tell us about your project'
              className='footer-textarea'
              value={this.state.message}
              onChange={(event) => this.setState({message: event.target.value})}
            />
            <button
              className='button-primary
              footer-button'
              type='submit'
              value='Submit'
              onClick={this.handleSubmit}>
              Send
            </button>
            <div className='footer-thank-you--container'>
              <h4 className='footer-thank-you--message' id='form_message'>
                Thank you. We will respond as soon as possible.
              </h4>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

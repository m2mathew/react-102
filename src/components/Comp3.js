import React from 'react';
import axios from 'axios';

// Component Definition
class Comp3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: null,
    };
  }

  componentDidMount() {
    axios({
      headers: {
        Accept: 'application/json',
      },
      method: 'get',
      url: 'https://icanhazdadjoke.com/',
    })
      .then((response) => {
        console.log(response);
        this.setState({
          apiData: response,
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('it is finished');
      });
  }

  render() {
    const {
      apiData,
    } = this.state;

    console.log('render : apidata', apiData);

    return (
      <section>
        <h1>
          Comp3
        </h1>
        <h3>
          Adds `componentDidMount` to do something when the component mounts the DOM
        </h3>
        <p>i can haz dad joke</p>
        <img
          alt="can haz dad jokes."
          src='https://icanhazdadjoke.com/static/smile.svg'
          width='100px'
        />
        <div
          style={{
            border: '3px solid pink',
            display: 'flex',
            justifyContent: 'center',
            fontSize: 20,
            lineHeight: 1.6,
            margin: '24px auto',
            maxWidth: '60%',
            padding: 48,
          }}
        >
          {apiData && apiData.data.joke}
        </div>

        <div
          style={{
            margin: '16px 0',
          }}
        >
          Dad jokes are funny!
        </div>
      </section>
    );
  }
}

export default Comp3;

import React from 'react';
import axios from 'axios';

// Component Definition
class Comp4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldAddJoke: false,
      apiData: {
        Items: [],
      },
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
        this.setState(state => ({
          apiData: {
            Items: [
              ...state.apiData.Items,
              response.data,
            ],
          },
        }))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('it is finished');
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // Watch out for infinite loops here!
    const {
      shouldAddJoke,
    } = this.state;

    if (prevState.shouldAddJoke !== shouldAddJoke) {
      console.log('clicked button to add a joke');
      // We should add some DAD JOKES here now
    }
  }

  componentWillUnmount() {
    // This will never run in our app since we are either mounting it
    //  all or unmounting it all for now.
    // Or if break the app, you'll see this. 😂
    alert('you left me!');
  }

  handleUpdateNewJoke = () => {
    this.setState(state => ({
      shouldAddJoke: !state.shouldAddJoke,
    }));
  }

  handleUpdateCounter = (num) => () => {
    this.setState(state => ({ count: state.count += num }))
  }

  render() {
    const {
      apiData,
    } = this.state;

    console.log('render : apidata', apiData.Items);

    const hazJokes = Boolean(apiData && apiData.Items && apiData.Items.length > 0);

    console.log('hazJokes', hazJokes);

    return (
      <section>
        <h1>
          Comp4
        </h1>
        <h3>
          Adds `componentDidUpdate` to do something when the component receives updates props/state
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
          {hazJokes && apiData.Items.map(jk => !console.log('jk →', jk) && (
            <div
              key={jk.id}
              style={{
                borderBottom: '1px solid grey',
                padding: '8px 0',
              }}
            >
              {jk.joke}
            </div>
          ))}
        </div>

        <button onClick={this.handleUpdateNewJoke}>
          Add a new joke
        </button>

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

export default Comp4;


/*
handleGetDadJokes = () => {
    axios({
      headers: {
        Accept: 'application/json',
      },
      method: 'get',
      url: 'https://icanhazdadjoke.com/',
    })
      .then((response) => {
        console.log(response);
        this.setState(state => ({
          apiData: {
            Items: [
              ...state.apiData.Items,
              response.data,
            ],
          },
        }))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('it is finished');
      });
  };
*/

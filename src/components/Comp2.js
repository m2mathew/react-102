import React from 'react';

class Comp2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleUpdateCounter = (num) => () => {
    this.setState(state => ({ count: state.count += num }))
  }

  render() {
    const {
      count,
    } = this.state;

    return (
      <section>
        <h1>
          Comp2
        </h1>
        <h3>
          Adds a constructor to keep track of state
        </h3>
        <p>Let's count!</p>
        <img
          src='https://cdn.theatlantic.com/static/mt/assets/science/tumblr_m4d43boOrQ1rvup99o1_1280.jpg'
          width='250px'
        />
        <div style={{ marginTop: 16 }}>
          <button
            onClick={this.handleUpdateCounter(1)}
            style={{ marginRight: 12 }}
          >
            Add
          </button>
          <button onClick={this.handleUpdateCounter(-1)}>
            Subtract
          </button>
        </div>

        <div
          style={{
            fontSize: 18,
            margin: '16px 0',
          }}
        >
          Current Count: {count}
        </div>
      </section>
    );
  }
}

export default Comp2;

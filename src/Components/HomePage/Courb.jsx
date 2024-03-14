import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';
import { range, random } from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    const bars = random(6, 10);
    return range(bars).map((bar) => {
      return {x: bar + 1, y: random(2, 10)};
    });
  }

  render() {
    return (
      <VictoryChart
        domainPadding={{ x: 20 }}
        animate={{duration: 500}}
      >
        <VictoryBar
          data={this.state.data}
          style={{
            data: { fill: "tomato", width: 12 }
          }}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
          }}
        />
      </VictoryChart>
    );
  }
}

export default App;

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseValue = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="number">{count}</span>
          times
        </h1>
        <p className="paragraph">click the button to increase the count</p>
        <button className="button" onClick={this.increaseValue}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter

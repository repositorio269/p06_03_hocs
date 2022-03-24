import React, { Component } from 'react'
import withModal from '../hocs/withModal';

class Home extends Component {
    
    componentDidMount() {
        this.props.handleSetModalText('lorem ipsum ....')
    }

    render() {

    return (
      <div className='container'>
          <button onClick={this.props.handleToggleModal}>Ver condiciones legales</button>
      </div>
    )
  }
}

export default withModal(Home);

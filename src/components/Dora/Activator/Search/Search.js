import React,{Component} from 'react'

import {
  StyledActivatorSearch as Search, 
  StyledActivatorSearchIcon as Icon,
  StyledActivatorSearchInput as Input 
} from './StyledSearch'

class ActivatorSearch extends Component {
  state = { showInput: false }

  inputStateChange() {
    this.setState(state => {
      return {
        showInput: !state.showInput
      }
    })
  }

  renderIcon() {
    return <Icon onClick={() => this.inputStateChange()}/>
  }

  renderInput() {
    if (this.state.showInput) {
      return <Input onChange={() => this.props.searchParam(document.querySelector(Input).value)}
      />
    }
  }

  render() {
    return(
      <Search>
        {this.renderIcon()}
        {this.renderInput()}
      </Search>
    )
  }
}

export default ActivatorSearch
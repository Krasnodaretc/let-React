/**
 * Created by Krasnodaretc on 17.11.17.
 */

import React from 'react';

export default class Reload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: props.active
    };
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.active !== this.props.active
  }

  render () {
    console.log('reload');
      return (
          <button className={`${this.props.active ? 'active' : ''} reload`} onClick={this.props.onClick}>
            Заново
          </button>
      )
  }
}
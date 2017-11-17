/**
 * Created by Krasnodaretc on 17.11.17.
 */

import React from 'react';

export default class Reload extends React.Component {
  render() {
    return (
      <button className={`${this.props.active || 'disactive'} reload`} onClick={this.props.onClick}>
        Заново
      </button>
    )
  }
}
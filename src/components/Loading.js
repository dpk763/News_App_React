import React, { Component } from 'react';
import loading from '../loading.gif';

export default class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <img src={loading} alt="" height={30}/>
      </div>
    )
  }
}

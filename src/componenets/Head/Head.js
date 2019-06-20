import React, { Component } from 'react'

class Head extends Component {
  render () {
    return (
      <>
        <div id='nav'>
          <div className='navbar-fixed'>
            <nav>
              <div className='nav-wrapper black'>
                <a href='/' className='brand-logo center'>Article Finder</a>
                <div id='nav-mobile' className='left'>
                  <button className='btn blue' onClick={this.props.getArticles}> List </button>
                </div>
                <div id='nav-mobile' className='right'>
                  <button className='btn blue' onClick={this.props.postArticles}> Reset </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    )
  }
}

export default Head

import React, { Component } from 'react'

class Help extends Component {
  render () {
    return (
      <>
        {this.props.articles
          ? this.props.articles.map(article => (
            <div className='article'>
              <li>Title: {article.title}</li>
              <li>Description: {article.description}</li>
              <li>Link: <a target='_blank' without rel='noopener noreferrer' href={article.link}>Click here for the article!</a></li>
              <button className='btn blue' id={article._id} onClick={this.props.deleteMe}>DELETE ME</button>

            </div>
          )) : null
        }
      </>
    )
  }
}

export default Help

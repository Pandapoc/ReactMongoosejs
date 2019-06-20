import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import cheerio from 'cheerio'
import Help from './componenets/Help/Help.js'
import Head from './componenets/Head/Head.js'

// let articleArr = []

class App extends Component {
  state = {
    data: null,
    article: []
  }

  thisIs = () => {
    let articleArr = []
    axios.get('https://cors-anywhere.herokuapp.com/https://www.nytimes.com/')
      .then(({ data }) => {
        const $ = cheerio.load(data)
        $('div.css-1ez5fsm.esl82me1').each((i, elem) => {
          let title = $(elem).children('h2').text()
          let description = $(elem).parent().children('ul').children('li').text()
          articleArr.push({
            link: `https://www.nytimes.com/${$(elem).parent().attr('href')}`,
            title: title,
            description: `${!description ? title : description}`
          })
        })
        axios.post('/articles', articleArr)
          .then(_ => {
            console.log(this)
            this.setState({ article: articleArr })
            console.log('OK')
          })
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
    // console.log(this.state)
  }

  aCry = () => {
    axios.get('/articles')
      .then(articles =>
        this.setState({ article: articles.data }))
      .catch(e => console.log(e))
  }

  forHelp = e => {
    axios.delete(`/articles/${e.target.id}`)
      .then(_ => this.aCry())
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err))
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/articles')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }
  render() {

    return (
      <>
        <Head postArticles={this.thisIs} getArticles={this.aCry} />
        <Help articles={this.state.article} deleteMe={this.forHelp} />
      </>
    )
  }
}

export default App

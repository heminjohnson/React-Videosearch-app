import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'enteryourkey'

YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
  console.log(data)
})

class App extends Component {
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))

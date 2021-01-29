import React, { Component } from 'react'
import { connect } from 'react-redux'

import { latestNews, otherNews } from "../store/actions/articleAction"

import LatestNews from "./LatestNews"
import OtherNews from './OtherNews'


class Home extends Component {

    componentWillMount() {
        this.props.dispatch(latestNews())
        this.props.dispatch(otherNews())
    }

    render() {
        const articles = this.props.articles
        return (
          <div>
            <LatestNews latest={articles.latestArticles} />
            <OtherNews others={articles.othersArticles} />
          </div>
        )
    }
}

// State from store
function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Home)
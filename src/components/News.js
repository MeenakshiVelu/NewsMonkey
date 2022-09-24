import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 10,
      totalResults: 0

    };

  }

  async componentDidMount() {
    console.log("mounted");
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=fb203047782c4f8791208781ef555962&page=${this.state.page}&pageSize=${this.state.pageSize}`)
    this.setState({ loading: true })
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
    this.setState({ loading: false })
  }



  handlePrevious = async () => {

    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=fb203047782c4f8791208781ef555962&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`)
    this.setState({ loading: true })
    // this.setState({articles: this.articles})
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false

    });

    console.log("previous");
  }


  handleNext = async () => {

    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=fb203047782c4f8791208781ef555962&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`)
    this.setState({ loading: true })
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading:false
    });

    console.log('next');
  }



  render() {
    console.log("rendered");
    // const { articles } = this.props;
    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center'>NewsMonkey</h1>
          <div className="row">
            {this.state.articles.map((element) => {
           
              // console.log(element.title);
              return (
                <>
                {this.state.loading && <Spinner/>}
                <div className="col-md-4">
                  <NewsItem title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} />
                  {/* <NewsItem /> */}
                </div>
                </>
              
              )
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious}>Previous</button>
            <button type="button" disabled={Math.ceil(this.state.totalResults / this.state.pageSize) <= this.state.page} className="btn btn-dark" onClick={this.handleNext}>Next</button>

          </div>

        </div>
      </>
    )
  }
}

export default News

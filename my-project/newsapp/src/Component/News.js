import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {


  static defaultProps={
    country:'us ',
    pagesize:8,
    category:'science'



  }

 static propTypes = {
      country: PropTypes.string,
      pagesize: PropTypes.number,
      category: PropTypes.string,
};


  constructor() {
    super();
          this.state = {
          articles: [], // initialize as empty array
          loading: true,
          page: 1,
        };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ab9fbfc99954701b7283e16992751a9&pageSize=${this.props.pagesize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json(); 
    // parse the response
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles || [],
      loading: false,
      totalResults: parsedData.totalResults,
    });
  }

  handleNext = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pagesize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ab9fbfc99954701b7283e16992751a9&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ab9fbfc99954701b7283e16992751a9&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: '30px', color: '#18ade4', fontWeight: 700 }}>Educationify Top Headlines</h2>
        {this.state.loading && <Spinner />}
        {/*if loading: true then only render spinner if not then dont show spinner */}
        <div className="row">
          {this.state.articles.length === 0 ? (//    ternary operator
            <p>No news available.</p>
          ) : (
            !this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 70) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          )}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark me-md-2"
            type="button"
            onClick={this.handlePrev}
          >
            &#8592;Previous{" "}
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            className="btn btn-dark me-md-2"
            type="button"
            onClick={this.handleNext}
          >
            Next&#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

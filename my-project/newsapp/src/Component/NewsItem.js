import React, { Component } from "react";

export class NewsItem extends Component {



  render() {
   
    let { title, description,imageUrl,newsUrl} = this.props || {}; //destructuring concept in js
    return (
    
      <div className="my-3">
        <div className="card" >
          <img
            src={imageUrl?imageUrl:"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=1024x1024&w=is&k=20&c=S9FBe3KUvooZHZktJzr8Nt94wtg56BQTQiqAz8zUK8M="}
            className="card-img-top"
            alt="cads-img"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description} <h5 id="seeMore"><a href={newsUrl}>see more...</a></h5></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
        </div>

        
    );
    
  }
}

export default NewsItem;

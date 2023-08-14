import React, { Component } from "react";

export default class NewsItem extends Component {

    
    render() {
      let {title, desctiption, imgurl, newsurl}=this.props;
    return (
      <>
        <div className="card my-2" style={{width: "18 rem"}}>
          <img src={imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desctiption}
            </p>
            <a rel="noreferrer" href={newsurl} className="btn btn-sm btn-primary" target="_blank">
              more
            </a>
          </div>
        </div>
      </>
    );
  }
}

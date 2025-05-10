import React, { Component } from 'react'

export class Newsitems extends Component {

  render() {
    let  {title, description, imageurl, newsurl, name } = this.props;

    return (
      <div className="card" style={{width: "25vw", marginBottom:"40px", overflow:"hidden"}}>
        <img src={imageurl} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className="card-img-top " alt="..."></img>
          <div className="card-body">
             <h6 style={{color:"maroon", fontWeight:"700"}}>{name}</h6>
             <h5 className="card-title" style={{fontSize:"17px"}}>{title}...</h5>
             <p className="card-text" style={{fontSize:"14px"}}>{description}........</p>
             <a href={newsurl} className="btn btn-sm btn-primary" target='_blank'>Read More</a>
          </div>
      </div>
      
    )
  }
}

export default Newsitems
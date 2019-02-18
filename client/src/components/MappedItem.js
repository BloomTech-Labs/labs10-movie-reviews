import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MappedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('this props in a mapped movie: ', this.props);
    return (
      <div className="singleMovie">
        <Link to={`movie/get/${this.props.item.id}`} className="linksMovie">
          <h3 className="headings noteTitle">{this.props.item.title}</h3>
          <hr />
          {/* <p className="noteBody">{this.props.item.title}</p> */}
        </Link>
      </div>
    );
  }
}

export default MappedItem;

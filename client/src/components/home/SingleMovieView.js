import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gettingMovieId } from '../../actions';

class SingleMovieView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalForm: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
  }

  popModal = () => {
    this.setState({ modalForm: !this.state.modalForm });
  };
  handleNo = () => {
    this.setState({ modalForm: !this.state.modalForm });
    // setTimeout(() => {
    //     this.props.history.push("/");
    // }, 600);
  };
  handleDelete = () => {
    const id = this.props.match.params.id;
    console.log(' id : ', id);
    this.props.deletingNote(id);
    this.props.history.push('/');
  };

  render() {
    console.log(' any props in single view mode?: ', this.props);
    return (
      <div>
        <div className="editDeleteLinks">
          <Link
            className="editDeletelink"
            to={`/note/edit/${this.props.match.params.id}`}
          >
            edit
          </Link>
          <a className="editDeletelink" onClick={this.popModal}>
            delete
          </a>
        </div>
        <div>
          <h3 className="headings mainAreaHeading">{this.props.note.title}</h3>
          <div className="textBody">
            <p> {this.props.movies.title}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state in single movie view: ', state);
  const id = ownProps.match.params.id;
  //   console.log('movie in single: ', state.movies);
  //   return {
  //     movie: state.movies.find(m => {
  //       return m._id === id;
  //     })
  //   };
};

export default connect(
  mapStateToProps,
  { gettingMovieId }
)(SingleMovieView);

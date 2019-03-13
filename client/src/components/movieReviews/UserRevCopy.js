// import React from 'react';
// import { Row, Col } from 'reactstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { currentUser } from '../../services/userURLs';
// import { placeholderUrl } from '../../services/resourceURLs';
// import './UserReview.css';
// import StarRatingComponent from 'react-star-rating-component';

// export default class UserRevCopy extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviewer: '',
//       photo: ''
//     };
//   }

//   componentDidMount = async () => {
//     const res = await axios.get(currentUser, {
//       withCredentials: true
//     });
//     if (res.data) {
//       this.setState({ reviewer: res.data.reviewer, photo: res.data.photo });
//     }
//   };

//   render() {
//     console.log('props in reviews: ', this.props);
//     return (
//       <div>
//         {/* <Row>
//           <div className="container mb-3">
//             <div className="card flex-row flex-wrap">
//               <div className="card-header border-0">
//                 <div className="placeholder">
//                   <a href={`${placeholderUrl}`}>
//                     <img
//                       className="movie-profile-avatar"
//                       src={this.state.photo}
//                       alt="placeholder"
//                     />
//                   </a>
//                 </div>
//                 <p>
//                   Member Status: <br />
//                   {/* Location: <br /> */}
//         {/* Name: {this.state.reviewer}
//                   <br />
//                   Num of Reviews:{' '}
//                 </p>
//               </div> */}
//         {/* <div className="card-block px-2">
//                 <div className="goFlex">
//                   <StarRatingComponent
//                     name="rate2"
//                     editing={false}
//                     renderStarIcon={() => <span>★</span>}
//                     starCount={5}
//                     value={this.props.item.rating}
//                   />
//                   <p className="space"> Date: {this.props.item.created_at}</p>
//                 </div>
//                 <p className="card-text">{this.props.item.textBody}</p>
//               </div>
//             </div>
//           </div> */}
//         {/* </Row>  */}
//         {/* new card */}
//         <Row>
//           <Col lg="4" sm="12">
//             <div className="card-body pt-0">
//               <div className="col-md-4">
//                 <div className="placeholder">
//                   <Link to={`/myreviews`}>
//                     <img
//                       className="movie-profile-avatar"
//                       src={this.state.photo}
//                       alt="placeholder"
//                     />
//                   </Link>
//                   {/* <a href={`${placeholderUrl}`}>
//                     <img
//                       className="myreviews-avatar img-responsive mb-3"
//                       src={this.state.photo}
//                       alt="avatar"
//                     />
//                   </a> */}

//                   <ul className="list-group list-group-flush text-left">
//                     <li className="list-group-item pl-5 bg-white border-info">
//                       <span className="small badge badge-light mr-1">
//                         Status:{' '}
//                       </span>
//                       <span>
//                         {/* {this.state.premium ? ( */}
//                         {/* <h3 className="badge badge-info">Premium</h3>
//                     ) : ( */}
//                         <h3 className="badge badge-info">Standard</h3>
//                         {/* )} */}
//                       </span>
//                     </li>

//                     <li className="list-group-item pl-5 bg-white">
//                       <span className="small badge badge-light mr-1">
//                         Name:{' '}
//                       </span>
//                       {/* <span className="badge badge-dark">{this.state.name}</span> */}
//                     </li>

//                     <li className="list-group-item pl-5 bg-white">
//                       <span className="small badge badge-light mr-1">
//                         {' '}
//                         Email:{' '}
//                       </span>
//                       <span className="badge badge-dark">
//                         {this.state.reviewer}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//                 {/* <p className="card-text">
//                 Member Status: <br /> */}
//                 {/* Name: {this.state.reviewer}
//                 <br />
//                 Num of Reviews:{' '}
//               </p> */}
//               </div>
//             </div>
//           </Col>
//           <Col lg="8" sm="12">
//             <p className="mt-0">
//               <StarRatingComponent
//                 name="rate2"
//                 editing={false}
//                 renderStarIcon={() => <span>★</span>}
//                 starCount={5}
//                 value={this.props.item.rating}
//               />
//             </p>
//             <h4 className="pb-2">Review</h4>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

import React from 'react';

const Jumbotron = (props) => {
  return (
  <div className="jumbotron text-center hoverable p-4">
    <div className="row">
      <div className="col-md-4 offset-md-1 mx-3 my-3">
      <div className="view overlay">
        <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" className="img-fluid" alt="review"/>

        <a href="/">
          <div className="mask rgba-white-slight"></div>
        </a>
    </div>

    </div>

    <div className="col-md-7 text-md-left ml-3 mt-3">

      <a href="#!" className="green-text">
        <h6 className="h6 pb-1"><i className="fas fa-film"></i></h6>
      </a>

      <h4 className="h4 mb-4">Today's Featured Film Review:</h4>
      <h5>Where's the Hulk? </h5>
      <p className="font-weight-normal">
      While the next outing in the Marvel Cinematic Universe has Captain America’s name on it, the movie, Civil War has pretty much every hero we’ve ever seen in the MCU in it, along with a couple that we haven’t. There are a couple of exceptions to this though. One of the characters missing in action is The Hulk.</p>
      
      <p>According to the screenwriters, a large part of the reason for this is that the Hulk really can’t be in the film. It just wouldn’t work, because once the Hulk picks a side, the fight is already over. In the MCU The Hulk has been every bit the overpowering force as his comic book counterpart. He tears through pretty much anything and everything that’s ever been thrown at him. If that included half the Avengers, is there really anything they could do? </p><p>Speaking with Entertainment Weekly, the screenwriters for Captain America: Civil War Christopher Markus and Stephen McFeely see the Hulk as the game over moment. Markus is of the opinion that if the Hulk were to pick a side, everybody else might as well just go home.</p>
      <p className="font-weight-normal">by <a href="/user"><strong>Carine Fox</strong></a>, 02/08/2019</p>

      {/* <a href="/myreviews" className="btn btn-success">Read more</a> */}

    </div>

  </div>

</div>

  );
};

export default Jumbotron;
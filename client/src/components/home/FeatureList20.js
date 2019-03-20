import React from 'react';
 import "./FeatureList20.css";

 const cardObjArray = [
     {
         name: 'Review anywhere', iconClassName: 'fa fa-map-marker-alt icon',
         description: 'Write reviews on any movie from A Trip To The Moon to your box office favorite'  
    },
    {
        name: 'Rate Any Movie',
        iconClassName: 'fas fa-star icon',
        description: 'Rate each film on a five-star scale to record and share your reaction'

    },
    {
        name: 'Keep a Diary',
        iconClassName: 'fas fa-calendar-alt icon',
        description: 'Keep a diary of the films you have seen and share your thoughts on them with others'
    },
    {
        name: 'Find trending movies',
        iconClassName: 'fas fa-video icon',
        description: 'See current list of popular movies so you know what\'s fresh at the box office'
    },
    {
        name: 'Fast',
        iconClassName: 'fas fa-fighter-jet icon',
        description: 'Have fast access to movie reviews by real people just like you'
    },
    {
        name: 'Mobile-First',
        iconClassName: 'fas fa-mobile-alt icon',
        description: 'Access our app on any of your favorite devices'

    }
 ]



const FeatureList = (props) => {
  return (
    <>
        <div className="intro">
                <h4 className="text-center">CineView lets you...</h4>
        </div>
        <div className="feature-list-container">
            {cardObjArray.map(card => {
                return (
                    <div key={card} className="single-card-container">
                        <div className={`${card.iconClassName} font-awesome`}/>
                        <h5>{card.name}</h5>
                        <p>{card.description}</p>
                    </div>
                )
            })}
      
        </div>
    </>
  );
};

export default FeatureList;
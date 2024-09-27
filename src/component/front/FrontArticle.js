import React from 'react';
import './../../App.css';
import article_image_1 from './image/article.jpg';

const articles = [
  {
    title: 'Find a course',
    description: 'Find a Course that best suits your career goal.',
    image: article_image_1,
  },
  {
    title: 'University Rankings',
    description: 'Refer to the world university rankings to help map out your options.',
    image: article_image_1,
  },
  {
    title: 'Study Abroad Intakes',
    description: 'Academic year in universities abroad differ from the ones in Bangladesh.',
    image: article_image_1,
  },
];

const events = [
  {
    title: 'Upcoming events in Bangladesh',
    description: 'Attend our events to interact directly with top universities and make a well-informed decision. All our events are free!',
    image: article_image_1,
  },
  // You can add more events here as needed
];

const Article = ({ title, description, image }) => (
  <div className='row pb-3'>
    <div className='col-3'>
      <img src={image} className="d-block mx-auto bg-transparent w-100 rounded" alt={title} />
    </div>
    <div className='col-9 pt-3'>
      <p className="card-title article_text_blue">{title}</p>
      <p className="card-title article_text_sub">{description}</p>
    </div>
  </div>
);

function FrontArticle() {
  return (
    <div className="m-0 pt-5">
      <div className="container mx-auto">
        <div className="row pb-5">
          <div className="col-5 mx-auto">
            <p className="text-dark text-left fs-3">Popular Articles</p>
            {articles.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </div>
          <div className="col-5 mx-auto">
            <p className="text-dark text-left fs-3">Event & Services</p>
            {events.map((event, index) => (
              <Article key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontArticle;

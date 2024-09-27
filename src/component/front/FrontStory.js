import './../../App.css'; // Import your main CSS styles
import story_image_1 from './image/story_image_1.jpeg'; // Import story images
import story_image_2 from './image/story_image_2.jpeg';
import story_image_3 from './image/story_image_3.jpeg';

function FrontStory() {
  return (
    <div className="m-0 py-5">
      <p className="text-dark text-center pt-5 fs-3">Our students share their stories...</p>
      <div className="container">
        <div className="row">
          {/* Story Card 1 */}
          <div className="card img-fluid story_card p-0 mx-auto">
            <img className="card-img-top" src={story_image_1} alt="Gia - Studying in Australia" />
            <div className="card-img-overlay story_card_overlay px-5 py-4">
              <div className="iner text-white">
                <p className="card-title fw-bold">Gia - Studying in Australia</p>
                <p className="card-title">Studying in Australia</p>
              </div>
            </div>
          </div>

          {/* Story Card 2 */}
          <div className="card img-fluid story_card p-0 mx-auto">
            <img className="card-img-top" src={story_image_2} alt="Ushmi - Studying in Australia" />
            <div className="card-img-overlay story_card_overlay px-5 py-4">
              <div className="iner text-white">
                <p className="card-title fw-bold">Ushmi - Studying in Australia</p>
                <p className="card-title">Studying in Australia</p>
              </div>
            </div>
          </div>

          {/* Story Card 3 */}
          <div className="card img-fluid story_card p-0 mx-auto">
            <img className="card-img-top" src={story_image_3} alt="Anna - Studying in New Zealand" />
            <div className="card-img-overlay story_card_overlay px-5 py-4">
              <div className="iner text-white">
                <p className="card-title fw-bold">Anna - Studying in New Zealand</p>
                <p className="card-title">Studying in New Zealand</p>
              </div>
            </div>
          </div>
        </div>

        <div className="videoLink py-3">
          <a href="#" className="btn text-primary">See More Videos...</a>
        </div>
      </div>
    </div>
  );
}

export default FrontStory;

import './../../App.css'; // Import your main CSS styles
import student_image_1 from './image/quatation.png'; // Import the quotation image

function FrontStudent() {
  const testimonials = [
    {
      quote: "Hats off to all of you at IDP for your commitment, dedication and hard work.",
      name: "Lithin",
      location: "studying in Canada",
    },
    {
      quote: "My counsellor helped me in a way that every step I took was smooth and confident.",
      name: "Dipu Biswas",
      location: "studying in the US",
    },
    {
      quote: "My counsellor at IDP guided and encouraged in a friendly manner at each step.",
      name: "Dushyendra",
      location: "studying in Australia",
    },
  ];

  return (
    <div className="m-0 py-5">
      <p className="text-dark text-center pt-5 fs-3">What DUMATA students say</p>
      <div className="container pt-5">
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-4 mx-auto studentFeature pt-5 pb-3 mx-2 card border-0 text-white">
              <img 
                src={student_image_1} 
                className="studentIcon d-block mx-auto mb-3 p-3 rounded-circle" 
                alt="Quotation icon" 
              />
              <p className="fw-light text-center px-5">"{testimonial.quote}"</p>
              <p className="fw-light text-center text-uppercase pt-4 px-4">{testimonial.name}, {testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrontStudent;

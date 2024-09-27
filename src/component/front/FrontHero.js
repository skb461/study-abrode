import './../../App.css';
import heroImage from './image/hero_study_abrode.jpg';
import heroIconSpeach from './image/speach.png';
import heroIconSearch from './image/search.png';
import heroIconGlobal from './image/global.png';

const features = [
  {
    icon: heroIconSearch,
    title: 'Course search',
    description: 'Could your ideal course be in Australia, Canada, New Zealand, Ireland, the UK, or the US?',
  },
  {
    icon: heroIconSpeach,
    title: 'Come and see us',
    description: 'Got questions? We can help. Book a free appointment with one of our expert teams.',
  },
  {
    icon: heroIconGlobal,
    title: 'Why DUMATA?',
    description: 'As international education experts, we can turn your dreams into plans.',
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="col-4 mx-auto feature p-5 mx-2 card border-0">
    <img src={icon} className="heroIcon d-block mx-auto mb-3" alt={title} />
    <p className="fw-light text-center">{title}</p>
    <p className="fw-light text-center">{description}</p>
  </div>
);

function FrontHero() {
  return (
    <div className="m-0">
      <img src={heroImage} className="heroImage" alt="A student studying abroad" />

      <div className="container" id="featureAllCard">
        <div className="row">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrontHero;

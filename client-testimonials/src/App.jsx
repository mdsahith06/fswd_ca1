
import './App.css'
import TestimonialCard from './components/TestimonialCard';

function App() {
  const Testimony=[
    {
      name:'Rajesh Kumar',
      review:'Very good job done by Rajesh',
    },
    {name:'Simran Kumari',
      review:'Very good job done by Simran',},
    {name:'Sahith Madichedi',
      review:'Very bad work',},
  ];
  return (
    <>
    <h1>Client Testimonials</h1>
    {Testimony.map((data)=>(
      <TestimonialCard name={data.name} review={data.review} />
       
    ))}
      
    </>
  )
}

export default App

import React from 'react'
import ImageSlider from "./Components/ImageSlider";

const App=()=> {
  const slides = [
    {url:'images/image1.jpg',title:'boat'},
    {url:'images/image2.jpg',title:'flower'},
    {url:'images/image3.jpg',title:'clouds'},
    {url:'images/image4.jpg',title:'mountains'},
    {url:'images/image5.jpg',title:'autumn'}
  ]
  const containerStyles={
    width:'700px',
    height:'500px',
    margin:'0 auto'
  }
  return (
    <div>
      <h1>Image Scroller</h1>    
      <div style={containerStyles}>
      <ImageSlider slides={slides}/> 
      </div>   
    </div>
  );
}

export default App;

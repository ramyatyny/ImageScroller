import { useState } from 'react';

 const ImageSlider = ({slides}) => {
    const[currentIndex,setCurrentIndex]=useState(0);
    const sliderStyle={
        height:"100%",
        position:'relative'
    }
    const leftArrow={
        position:"absolute",
        transition:'transform(0,-50%)',
        left:"32px",
        fontSize:"45px",
        color:"#fff",
        top:"50%",
        zIndex:1,
        radius:'10px'

    }
    const rightArrow={
        position:'absolute',
        top:'50%',
        color:'#fff',
        zIndex:1,
        cursor:'pointer',
        transition:"translate(o,-50%)",
        right:'32px',
        fontSize:'45px',
        radius:'10px'
    }
    const dotsContainerStyle={
        display:'flex',
        justifyContent:'center'
    }
    const dotsStyle={
        margin: '0 3px',
        cursor:'pointer',
        fontSize:'20px'
    }
    const slideStyles={
        width:"100%",
        height:"100%",
        borderRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${slides[currentIndex].url})`
    }
    const goToPrevious=()=>{
        const isFirstSlide = currentIndex === 0;
        const  newIndex = isFirstSlide ? slides.length-1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext=()=>{
        const isLastIndex = currentIndex === slides.length-1;
        const nextIndex = isLastIndex ? 0:currentIndex + 1;
        setCurrentIndex(nextIndex);
    }
    const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex)
    }
  return (
    <div style={sliderStyle}>
        <div style={slideStyles}> </div>
        <div style={leftArrow} onClick={goToPrevious}> ( </div>
        <div style={rightArrow} onClick={goToNext}> ) </div>
        
        <div style={dotsContainerStyle}>
            {slides.map((slide,slideIndex)=>(
                <div key={slideIndex} 
                style = {dotsStyle} 
                onClick={()=>goToSlide(slideIndex)}>.</div>
            ))}
                
        </div>
    </div>
  )
}
export default ImageSlider;

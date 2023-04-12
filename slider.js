import React from "react";
import HeroSlider , {Slide} from 'hero-slider';
import image1 from './photo/7.png';
import image2 from './photo/9.png';
import image3 from './photo/8.png';
import image4 from './photo/10.png';
import image5 from './photo/11.png';




const sliding=()=>{
    return(
        <HeroSlider
           slidingAnimation="left_to_right"
           orientation="horizontal"
           initialSlide={1}
           onBeforeChange={(previousSlide,nextSlide)=> console.log("onBeforeChange",previousSlide,nextSlide)}
           onchange={nextSlide => console.log("onchange",nextSlide)}
           onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
           style={{backgroundColor:"white",
                   width:'200px',height:'200px'
        }}
           settings={{
             slidingDuration:250,
             slidingDelay:100,
             shouldAutoplay:true,
             shouldDisplayButtons:true,
             autoplayDuration:3000,
             height:'10vh'
           }}
        >
            <Slide
    background={{
        backgroundImage: `url(${image1})`,
        backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}
/>
    
<Slide
    background={{
        backgroundImage: `url(${image2})`,
        backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }}
/>

<Slide
    background={{
        backgroundImage: `url(${image3})`,
        backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }}
/>


<Slide
    background={{
        backgroundImage: `url(${image4})`,
        backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }}
/>

<Slide
    background={{
        backgroundImage: `url(${image5})`,
        backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }}
/>
            
        </HeroSlider>
        
    )
}
 
export default sliding;
import { useState } from 'react';
import './slider.scss'

function Slider ({images}){
    const [imageIndex,setImggeIndex]=useState(null)
    const ChangeSlide=(direction) => {
        if(direction==='left'){
            if(imageIndex===0){
                setImggeIndex(images.length-1)
            }
            else{
                setImggeIndex(imageIndex-1)
            }
        }
        else{
            if(imageIndex===images.length-1){
                setImggeIndex(0)
            }
            else{
               setImggeIndex(imageIndex+1)
            }
        }
    }
    return (
        <div className='slider'>
            { imageIndex!=null && <div className="fullSlider">
                <div className="arrow" onClick={()=>ChangeSlide("left")}>
                    <img src="/arrow.png" alt=''/>
                </div>
                <div className="imgContainer">
                    <img src={images[imageIndex]} alt=''/>
                </div>
                <div className="arrow" onClick={()=>ChangeSlide("right")}>
                <img
                src="/arrow.png" className="right" alt=''/>
                </div>
                <div className="close" onClick={()=> setImggeIndex(null)}>X</div>
            </div>}
            <div className="bigImage">
                < img src={images[0]} alt='' onClick={()=>setImggeIndex(0)} />
            </div>
            <div className="smallImage">
                {images.slice(1).map((image,index)=>(
                    <img src={image} alt="" key={index} onClick={()=> setImggeIndex(index+1)}/>
                ))}
            </div>
        </div>
    )
}
export default Slider;
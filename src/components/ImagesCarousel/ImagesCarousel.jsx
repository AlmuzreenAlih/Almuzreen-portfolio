import { useState } from 'react'
import './ImagesCarousel.scss'
function ImagesCarousel(props) {
    const [imgSelected, setImgSelected] = useState(0);
    function AllImages() {
        return (
            <img src={props} alt="" />
        )
    }
    function SelectImage(index) {
        setImgSelected(index)
    }
    function Close() {
        props.setCarouselShown(false);
    }
    function Left() {
        if (imgSelected > 0) {setImgSelected((curr)=>(curr - 1))}
    }
    function Right() {
        if (imgSelected < props.images.length-1) {setImgSelected((curr)=>(curr + 1))}
    }
    
    return (
        <div className='carousel-parent'>
            <div className="close" onClick={Close}>x</div>
            <div className="img-selected">
                <div className='left material-symbols-outlined' onClick={Left}>{imgSelected > 0 && <>arrow_back_ios</>}</div>
                <img src={props.images[imgSelected]} alt="" />
                <div className='right material-symbols-outlined' onClick={Right}>{imgSelected < props.images.length-1 && <>arrow_forward_ios</>}</div>

            </div>
            {/* <div className='select'>Select:</div> */}
            <div className="all-images">
                {props.images.map((img, index) => (
                    <img key={index} src={img} alt="" onClick={()=>{SelectImage(index)}} 
                         className={index!==imgSelected ? "dim" : null}/>
                ))
                
                }
            </div>
        </div>
    )
}

export default ImagesCarousel;
import './ImageSlide.css';
import react, {useState, useEffect, useRef} from 'react';
const Slider1 = require('../../exihibition/Jumia-Food.jpg');
const Slider2 = require('../../exihibition/Slider-1.jpg');
const Slider3 = require('../../exihibition/slider-2.jpg');
const Slider4 = require('../../exihibition/slider-3.jpg');
const Slider5 = require('../../exihibition/slider-4.jpg');
const link1 = 'sdf';
const link2 = 'ere';
const link3 = 'dsd';
const link4 = 'sdfsw';
const link5 = 'sdwerf';
const sideimg = require('../../exihibition/model.jpg');
const sideimg2 = require('../../exihibition/everyday.jpg');


function ImageSlide(){
const Arrowleft = useRef('null');
const Arrowright = useRef('null');
const imgSlider = useRef('null');
const imgHref = useRef('null');
const img =  [Slider1,Slider2,Slider3,Slider4,Slider5];
const imgLink =  [link1,link2,link3,link4,link5];
let slideIndex = 0;
let countTimer = 4000;


useEffect(()=>{
    let ddot = document.querySelectorAll('.dot');
        setInterval(()=>{
            if(slideIndex>0){
                ddot[slideIndex-1].style.backgroundColor = '';
            }
            if(slideIndex>img.length-1){
                slideIndex = 0;   
            }
            imgSlider.current.src = img[slideIndex];
            imgHref.current.href = imgLink[slideIndex];
            ddot[slideIndex].style.backgroundColor = 'rgba(0, 0, 0, 0.65)';
            slideIndex++;
        },countTimer)
},[])
function clklft (e){
    e.preventDefault;
    if(slideIndex<=0){
        slideIndex = img.length-1;
    }
    slideIndex--;
    let ddot = document.querySelectorAll('.dot');
    ddot[slideIndex].style.backgroundColor = 'rgba(0, 0, 0, 0.65)';
    if(slideIndex<img.length){
        ddot[slideIndex+1].style.backgroundColor = '';
    }
    imgSlider.current.src = img[slideIndex];
    }

    function clkrgt (e){
        e.preventDefault;
        if(slideIndex>=img.length-1){
            slideIndex = 0;
        }
        slideIndex++;
        let ddot = document.querySelectorAll('.dot');
        ddot[slideIndex].style.backgroundColor = 'rgba(0, 0, 0, 0.65)';
        if(slideIndex>0){
            ddot[slideIndex-1].style.backgroundColor = '';
        }
        imgSlider.current.src = img[slideIndex];      
    }
        
        
    
    function Arrowdisplay (e){
        e.preventDefault;
        Arrowleft.current.classList.add('display')
        Arrowright.current.classList.add('display');
    }
    function ArrowDisappear(e){
        e.preventDefault;
        Arrowleft.current.classList.remove('display');
        Arrowright.current.classList.remove('display');
    }

    return(
        <>
            <a href='' className='imageSliderCon'  ref={imgHref} >
                <div className='imgcon' >         
                    <img src='' alt='' ref={imgSlider}/>
                </div>
                <div  className='dotbox'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </a>
            <div className='btnlftcon' onMouseOver={Arrowdisplay} onMouseLeave={ArrowDisappear}>
                <button type='button' className='arrowleft'  onClick={clklft} ref={Arrowleft}>
                        <i className='bx bx-chevron-left'></i>
                </button>
            </div>
            <div className='btnrgtcon' onMouseOver={Arrowdisplay} onMouseLeave={ArrowDisappear}>
                <button type='button' className='arrowright' onClick={clkrgt} ref={Arrowright}>
                    <i className='bx bx-chevron-right'></i>
                </button>
            </div>
            
            <div className='addCon'>
                <a href='df'>
                    <div className='adds'>
                        <img src={sideimg} alt='sideImage'/>
                    </div>
                </a>
                
                <a href='df'>
                    <div className='adds'>
                        <img src={sideimg2} alt='sideImage'/>
                    </div>
                </a>
            </div>

        </>
    )
}
export default ImageSlide;
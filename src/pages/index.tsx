import Image from 'next/image';
import Header from '../components/header';
import Template from '../components/template';
import ImageGallery from '../components/ImageGallery';


import { FaCloudUploadAlt, FaArrowRight } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Router from 'next/router';


export default function Home() {

  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedButtonValue, setSelectedButtonValue] = useState<string | null>(null);
  const [selectedGenderValue, setSelectedGenderValue] = useState<string | null>(null);

  const handleSelectedTemplate = (imageName: string) =>{
    setSelectedTemplate(imageName);
  };

 

  //handling selection of Size  
  const handleButtononClick =(value: string) => {
    setSelectedButtonValue(value);
    
  };

  //handling selection of gender
  const handleGenderClick = (value: string) => {
    setSelectedGenderValue(value);
  };

 
    const handleContinueClick = () => {
      if(selectedTemplate === null){
        alert("Please select one of the ad banners to proceed!")
      } else{
        Router.push({
          pathname: '/step2',
          query: { template: selectedTemplate}
        })
      }   
    };

    

  return (
    <main>
      <Header />
      
        <div className ="temselection-container">
          <div className = "header-container">
            <h1 className ="h1"> AD BANNER TEMPLATES </h1>
            <p className="sub-text"> Step 1: Choose a banner </p>
          </div>
          <div className="section-container">
            <div className="sub-header-container">
              HORIZONTAL TEMPLATES
            </div>
            <hr className="sidebar-divider"></hr>
            <div className="img-gallery">
              <div className="img-scroller">
                <ImageGallery onImageSelect={handleSelectedTemplate} fileLocation='horizontal' />
              </div>
              
            </div>
            
          </div>
          <div className="section-container">
          <div className="sub-header-container">
              VERTICAL TEMPLATES
            </div>
            <hr className="sidebar-divider"></hr>
            <div className="img-gallery">
              <div className="img-scroller">
                <ImageGallery onImageSelect={handleSelectedTemplate} fileLocation='vertical' />
              </div>
              
            </div>
          </div>
          <div className="section-container">
          <div className="sub-header-container">
              SQUARE TEMPLATES
            </div>
            <hr className="sidebar-divider"></hr>
            <div className="img-gallery">
              <div className="img-scroller">
                <ImageGallery onImageSelect={handleSelectedTemplate} fileLocation='square' />
              </div>
              
            </div>
          </div>

          <div className="button-container">
            <button onClick={handleContinueClick} className="button-align-right work-bench-button">
              <p>Continue</p>
            </button>
          </div>
        </div>
        
      
    </main>
  )
}

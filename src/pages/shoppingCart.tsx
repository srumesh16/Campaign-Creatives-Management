import React, { useState, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import ShoppingCartImages from '../components/ShoppingCartImages';
import { FaArrowLeft  } from 'react-icons/fa';
import SCFileUploadThumb from '@/components/SCFileUploadThumb';


export default function ShoppingCart() {
  const router = useRouter();
  const { query } = router;
  const { url, count } = query;
  const selectedImageCount = parseInt(count, 10) || 0;

  const [offeringMsg, setOfferingMsg] = useState("");
  const [cta, setCTA] = useState("");
  const [pFileUrl, setPFileUrl] = useState<string | null>(null);
  const [bFileUrl, setBFileUrl] = useState<string | null>(null);

  const handleProductFileUpload = (url: string) => {
    // This function will receive the URL from SCFileUpload component
    setPFileUrl(url);
  };

  const handleBrandFileUpload = (url:string) => {
    setBFileUrl(url);
  }
  const handleAssignClick = () =>{}
  
  const urlList = Array.isArray(url) ? url : [url];

  const handleSelectedImagesCountChange = () => {};
  const handleBackClick = () => {
    router.push('/homepage');
  }

  return (
    <div>
      <Header selectedImageCount={selectedImageCount} selectedImages={urlList} />
      <div className="app-container">
        <div className="chat-container2">
        <div className="header-banner">
          <div className="header-heading">CREATIVE BRIEF</div>  
          <FaArrowLeft className="left-arrow2" onClick={handleBackClick}/>    
        </div>
        <div className="space-between"></div>
        <div className="sc-parent-container">
          <div className="sc-sidebar-container">
          <div className="banner-header2">
            <p> CREATIVES </p>
          </div>
            <ShoppingCartImages urls={url} />
            <div className="space-padding"></div>
            <hr className="sidebar-divider"></hr>
            <div className="banner-header2">
            <p> PRODUCT IMAGE </p>
          </div>
          <SCFileUploadThumb  onFileUpload={handleProductFileUpload} />
          <div className="space-padding"></div>
            <hr className="sidebar-divider"></hr>
          <div className="banner-header2">
            <p> BRAND IMAGE </p>
          </div>
          <SCFileUploadThumb  onFileUpload={handleBrandFileUpload} />
          </div>
          <div className="sc-sidebar-container">
            <div className="space-padding"></div>
            <div className="space-padding"></div>
            <div className="form-row">
              <label htmlFor="offeringMsg">Offering Message<span className="required">*</span></label>
              <input className="large-input-field" type="text" id="offeringMsg" value={offeringMsg}></input>
            </div>
            <div className="form-row">
              <label htmlFor="cta">Click to Action<span className="required">*</span></label>
              <input className="basic-input-field" type="text" id="cta" value={cta}></input>
            </div>
            <div className="space-padding"></div>
            <div className="form-row">
              <label htmlFor="asignee">Asignee Email<span className="required">*</span></label>
              <input className="basic-input-field" type="text" id="cta" value={cta}></input>
            </div>
            <div className="form-row">
              <div className="uploadContainer2">
                <button onClick={handleAssignClick} className="button-align-right work-bench-button">
                <p>Assign</p>
                 </button>
            </div>
            </div>
          </div>
        </div>
        
        
        
        </div>
      </div>
    </div>
  );
}

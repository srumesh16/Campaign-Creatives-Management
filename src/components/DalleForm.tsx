import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeneratedImages2 from '../components/generatedImages2';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { time } from 'console';

interface DalleFormProps {
  folderName: string;
  template: string;
  onSessionComplete: (success:boolean) => void;
  
  
}
interface ImageData {
  url: string;
}

interface ApiResponse {
  created: number;
  data: ImageData[];
}
const DalleForm: React.FC<DalleFormProps> = ({ folderName, template, onSessionComplete }) => {
  const [messageError, setMessageError] = useState("");
   const [loading, setLoading] = useState(0);
  const [noiError, setNOIError] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState('');
  const [ta, setTa] = useState('');
  const [noi, setNoi] = useState('');
  const [selectedSizeValue, setSelectedSizeValue] = useState<string | null>(null);
  const [selectedGenderValue, setSelectedGenderValue] = useState<string | null>(null);
  const [selectedContentType, setContentType] = useState<string | null>(null);
  const [selectedColor, setColor] = useState<string | null>(null);
  let dimensions: string = "";
  const [result, setResult] = useState<ApiResponse | null>(null);
  const {data:session} = useSession();
  const userName = session?.user?.email as string;

  
  // handling selection of Size
  const handleSizeonClick = (value: string) => {
    setSelectedSizeValue(value);
  };
//handling selection of gender
const handleGenderClick = (value: string) => {
    setSelectedGenderValue(value);
  };
  // handling selection of Content Type
  const handleContentTypeonClick = (value: string) => {
    setContentType(value);
  };

  const handleColoronClick = (value: string) => {
    setColor(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;

    // Use a switch statement or if-else to determine which input field to update
    switch (id) {
      case 'message':
        setMessage(value);
        break;
      case 'theme':
        setTheme(value);
        break;
      case 'noi':
        setNoi(value);
        break;
      case 'ta':
        setTa(value);
        break;
      default:
        break;
    }
  };
  
  //Dalle 2 Edit Images API Call
  const handleButtonClick = async () => {
    
    /*if (!message) {
      console.log("inside message: "  + message);
      setMessageError("Please fill in this fields.");
    }
    if(!noi){
      console.log("inside !noi : " + noi);
      setNOIError("Please fill in this field.");
    }
    if(Number(noi) > 10){
      console.log("inside noi > 10: " + Number(noi));
      setNOIError("Image count cannot be more than 10");
    }
    if(!selectedSizeValue){
      console.log("inside size: " + selectedSizeValue);
      setSizeError("Please fill in this field.");
    }
    if(message && noi && noi <= '10' && selectedSizeValue){*/
    
   
    setLoading(1);
    setMessageError('');
    setSizeError('');
    setNOIError('');
    try {


      const response = await axios.get('http://localhost:3000/api/imageEditorApi', {
        params: {
          folerName: folderName,
          image: template,
          size: selectedSizeValue,
          n: noi,
          prompt: "A " + selectedColor + " toned picture of " + message + "The Content Type is " + selectedContentType + ". This picture should be targetted to an audience with an age range between " + ta + " and toward  " + selectedGenderValue + " gender(s). The theme of this picture is " + theme,
        },
      });
      setResult(response.data);
      
      setLoading(2);
    } catch (error) {
      console.error('Error making Edit Image API call:', error);
      setLoading(3);
      //onSessionComplete(false);
    }

    try {
      
      await axios.get('http://localhost:3000/api/storeUserSessions', {
        params: {
          userName: userName.split("@")[0],
          message: message,
          llm: "DALLE2",
          theme: theme,
          audience: ta,
          gender: selectedGenderValue,
          size: selectedSizeValue,
          n: noi,
          contentType: selectedContentType,
          color: selectedColor,
          folderName: folderName,
          template: template,
          result: JSON.stringify(result?.data)
        },
      });
      onSessionComplete(true);
    } catch (error){
      console.log("Error making store user session call", error);
      onSessionComplete(false);
    }
   // }
  };

  return (
    <div>

    
    <div className="form-container">

    <div className="form-row">
      <label className="form-label" htmlFor="messgae">
        Message
      </label>
      <div className="space-padding"></div>
      <div className="input-container">
      <input
        className={`form-largeinput ${messageError && 'error'}`}
        type="text"
        id="message"
        placeholder="enter your prompt"
        value={message}
        onChange={handleInputChange}
      />
      {messageError && (
        <div className="error-message">{messageError}</div>
      )}
      </div>
    
    </div>

    <div className="form-row">
      <label className="form-label" htmlFor="theme">
        Theme
      </label>
      <div className="space-padding2"></div>
      <input className="form-input" type="text" id="theme" placeholder="enter the theme of your campaign" value={theme} onChange={handleInputChange}></input>            
    </div>

    <div className="form-row">
    <label className="form-label" htmlFor="messgae">
        Target audience
      </label>
      <div className="space-padding"></div>
      <input className="form-input" type="text" id="ta" placeholder="20-30" value={ta} onChange={handleInputChange}></input>
      <div className="space-padding"></div>
      <label className="form-label" htmlFor="gender">
        Gender
      </label>
      <div className="space-padding"></div>
      <div className="input-container">
      <div className="radiobuttonGroup">

        <button className={selectedGenderValue === 'Male' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleGenderClick('Male')}>
          Male
        </button>
        <button className={selectedGenderValue === 'Female' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleGenderClick('Female')}>
          Female
        </button>

        <button className={selectedGenderValue === 'Both' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleGenderClick('Both')}>
          Both
        </button>
      </div>     
      </div> 
    </div>

    <div className="form-row">
      <label className="form-label" htmlFor="size">
        Size
      </label>
      <div className="space-padding2"></div>
      
      <div className="space-padding"></div>
      <div className="input-container">
      <div className="radiobuttonGroup">

        <button className={selectedSizeValue === '256x256' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSizeonClick('256x256')}>
          256x256
        </button>
        <button className={selectedSizeValue === '512x512' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSizeonClick('512x512')}>
          512x512
        </button>

        <button className={selectedSizeValue === '1024x1024' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSizeonClick('1024x1024')}>
          1024x1024
        </button>
        {sizeError && (
        <div className="error-message">{sizeError}</div>
      )}
      </div>
      </div>
     
    </div>
    <div className="form-row">
    <label className="form-label" htmlFor="messgae">
        Image Count
      </label>
      
      <div className="input-container">
      <input className={`form-input ${noiError && 'error'}`} type="text" id="noi" placeholder="4 [ maximum is 10 ]" value={noi} onChange={handleInputChange}></input>
      {noiError && (
        <div className="error-message">{noiError}</div>
      )}
      </div>
    </div>
    <div className="form-row">
      <label className="form-label" htmlFor="contentType">
        Content Type
      </label>
      <div className="input-container">
      <div className="radiobuttonGroup">

        <button className={selectedContentType === 'none' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleContentTypeonClick('none')}>
          None
        </button>
        <button className={selectedContentType === 'photo' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleContentTypeonClick('photo')}>
          Photo
        </button>

        <button className={selectedContentType === 'art' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleContentTypeonClick('art')}>
          Art
        </button>

        <button className={selectedContentType === 'graphic' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleContentTypeonClick('graphic')}>
          Graphic
        </button>
      </div>
      </div>
    </div>
    <div className="form-row">
      <label className="form-label" htmlFor="contentType">
        Color
      </label>
      
      <div className="radiobuttonGroup">

        <button className={selectedColor === 'none' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleColoronClick('none')}>
          None
        </button>
        <button className={selectedColor === 'black & white' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleColoronClick('black & white')}>
          B&W
        </button>

        <button className={selectedColor === 'muted' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleColoronClick('muted')}>
          Muted
        </button>

        <button className={selectedColor === 'warm' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleColoronClick('warm')}>
          Warm
        </button>
        <button className={selectedColor === 'cool' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleColoronClick('cool')}>
          Cool
        </button>
        <button className={selectedColor === 'vibrant' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleColoronClick('vibrant')}>
          Vibrant
        </button>
        <button className={selectedColor === 'pastels' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleColoronClick('pastels')}>
          Pastels
        </button>
      </div>
    </div>
    
      
    </div>

    <div className="form-container2">
            <div className="uploadContainer2">
              <button onClick={handleButtonClick} className="button-align-right work-bench-button">
                <p>Generate</p>
              </button>
            </div>

            <div>

              <div className="form-container">
                {loading === 0 ? (
                  <h2 style={{ color: 'black', textAlign: 'center' }}>Generated images will appear here...</h2>
                ) : loading === 1 ? (
                  <h2 style={{ color: 'black', textAlign: 'center' }}>Generating images for "A {selectedColor} toned picture of {message}. The Content Type is {selectedContentType}. This picture should be targetted to an audience with an age range between {ta} and toward {selectedGenderValue} genders. The theme of this picture is {theme}"</h2>
                ) : loading === 2 && result !== null ? (
                  <GeneratedImages2 data={result.data} />
                ) : (
                  <h2 style={{ color: 'black' }}>Error while calling API</h2>
                )
                }

              </div>
            </div>


          </div>
    </div>
    
  
  );
};

export default DalleForm;

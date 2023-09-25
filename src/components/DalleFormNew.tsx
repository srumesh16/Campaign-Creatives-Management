import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeneratedImages2 from './generatedImages2';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { time } from 'console';

interface DalleFormProps {
  onSessionComplete: (success: boolean) => void;


}
interface ImageData {
  url: string;
}

interface ApiResponse {
  created: number;
  data: ImageData[];
}
const DalleFormNew: React.FC<DalleFormProps> = ({ onSessionComplete }) => {
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
  const [selectedSeasonalValue, setSelectedSeasonalValue] = useState<string | null>(null);
  const [selectedRegionalValue, setSelectedRegionalValue] = useState<string | null>(null);
  const [selectedOccasionValue, setSelectedOccasionValue] = useState<string | null>(null);
  const [selectedContentType, setContentType] = useState<string | null>(null);
  const [selectedColor, setColor] = useState<string | null>(null);
  let dimensions: string = "";
  const [result, setResult] = useState<ApiResponse | null>(null);
  const { data: session } = useSession();
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

  const handleSeasonalClick = (value: string) => {
    setSelectedSeasonalValue(value);
  }

  const handleRegionalClick = (value: string) => {
    setSelectedRegionalValue(value);
  }

  const handleOccasionClick = (value: string) => {
    setSelectedOccasionValue(value);
  }
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


      const response = await axios.get('http://localhost:3000/api/imageGeneratorApioai', {
        params: {
          size: selectedSizeValue,
          n: noi,
          prompt: "A " + selectedColor + " toned picture of " + message + 
          ". This picture should be targetted to an audience with an age range between " + ta +
           " and toward  " + selectedGenderValue + 
           " gender(s). The picture's theme is " + selectedSeasonalValue + 
           " applicable to audience living in " + selectedRegionalValue + " regions." +
           "The Content Type is " + selectedContentType,
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
          result: JSON.stringify(result?.data)
        },
      });
      onSessionComplete(true);
    } catch (error) {
      console.log("Error making store user session call", error);
      onSessionComplete(false);
    }
    // }
  };

  return (
    <div>
      <div className="form-container">
        <div className="label-section">
          AUDIENCE
        </div>
        <div className="form-contents">
          <div className="form-row">
            <label htmlFor="targetAudience">Target Audience</label>
            <input className="basic-input-field" type="text" id="ta" placeholder="20-30 or 35-65" value={ta} onChange={handleInputChange}></input>
          </div>

          <div className="form-row">
            <label htmlFor="gender">Gender</label>
            <div className="radiobuttonGroup2">
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
      </div>
      <div className="space-padding"></div>
      <div className="form-container">
        <div className="label-section">
          THEME
        </div>
        <div className="form-contents">
          <div className="form-row">
            <label htmlFor="seasonal">Seasonal</label>
            <div className="radiobuttonGroup2">

              <button className={selectedSeasonalValue === 'new years' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSeasonalClick('new years')}>
                New Years
              </button>
              <button className={selectedSeasonalValue === 'valentines day' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSeasonalClick('valentines day')}>
                Valentines Day
              </button>
              <button className={selectedSeasonalValue === 'easter' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSeasonalClick('easter')}>
                Easter
              </button>
              <button className={selectedSeasonalValue === 'July 4th' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSeasonalClick('July 4th')}>
                July 4th
              </button>
              <button className={selectedSeasonalValue === 'labor day' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSeasonalClick('labor day')}>
                Labor Day
              </button>
              <button className={selectedSeasonalValue === 'halloween' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSeasonalClick('halloween')}>
                Halloween
              </button>
              <button className={selectedSeasonalValue === 'thanksgiving' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSeasonalClick('thanksgiving')}>
                Thanksgiving
              </button>
              <button className={selectedSeasonalValue === 'christmas' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSeasonalClick('christmas')}>
                Christmas
              </button>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="seasonal">Regional</label>
            <div className="radiobuttonGroup2">

              <button className={selectedRegionalValue === 'north america' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleRegionalClick('north america')}>
                North America
              </button>
              <button className={selectedRegionalValue === 'south america' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleRegionalClick('south america')}>
                South America
              </button>
              <button className={selectedRegionalValue === 'europe' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleRegionalClick('europe')}>
                Europe
              </button>
              <button className={selectedRegionalValue === 'asia' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleRegionalClick('asia')}>
                Asia
              </button>
              <button className={selectedRegionalValue === 'africa' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleRegionalClick('africa')}>
                Africa
              </button>
              <button className={selectedRegionalValue === 'australia' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleRegionalClick('australia')}>
                Australia
              </button>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="seasonal">Occasion (Restaurants)</label>
            <div className="radiobuttonGroup3">

              <button className={selectedOccasionValue === 'north america' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleOccasionClick('north america')}>
                Breakfast
              </button>
              <button className={selectedOccasionValue === 'south america' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleOccasionClick('south america')}>
                Lunch
              </button>
              <button className={selectedOccasionValue === 'europe' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleOccasionClick('europe')}>
                Dinner
              </button>
              <button className={selectedOccasionValue === 'asia' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleOccasionClick('asia')}>
                Office Party
              </button>
              <button className={selectedOccasionValue === 'africa' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleOccasionClick('africa')}>
                Birthday Party
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="space-padding"></div>
      <div className="form-container">
        <div className="label-section">
          CONCEPT
        </div>
        <div className="form-contents">
          <div className="form-row">
            <label htmlFor="description">Describe your creative<span className="required">*</span></label>
            <input className="large-input-field" type="text" id="message" placeholder="Realistic painting of a dystopian industrial city..." value={message} onChange={handleInputChange}></input>
          </div>
        </div>
      </div>

      <div className="space-padding"></div>
      <div className="form-container">
        <div className="label-section">
          SPECIFICATION
        </div>
        <div className="form-contents">
        <div className="form-row">
            <label htmlFor="size">Size<span className="required">*</span></label>
            <div className="radiobuttonGroup2">
              <button className={selectedSizeValue === '256x256' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSizeonClick('256x256')}>
                256x256
              </button>
              <button className={selectedSizeValue === '512x512' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSizeonClick('512x512')}>
                512x512
              </button>
              <button className={selectedSizeValue === '1024x1024' ? "radiobuttonselected" : "radiobutton"} onClick={() => handleSizeonClick('1024x1024')}>
                1024x1024
              </button>
            </div>
          </div>
          
          <div className="form-row">
            <label htmlFor="contentType">Content Type</label>
            <div className="radiobuttonGroup2">
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
          <div className="form-row">
            <label htmlFor="color">Color</label>
            <div className="radiobuttonGroup4">
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
          <div className="form-row">
            <label htmlFor="count">Image Count<span className="required">*</span></label>
            <input className="basic-input-field" type="text" id="noi" placeholder="4 [maximum: 10]" value={noi} onChange={handleInputChange}></input>
          </div>
        </div>
      </div>

      
      <div className="form-container2">
        <div className="uploadContainer2">
          <button onClick={handleButtonClick} className="button-align-right work-bench-button">
            <p>Generate</p>
          </button>
        </div>
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
    


  );
};

export default DalleFormNew;

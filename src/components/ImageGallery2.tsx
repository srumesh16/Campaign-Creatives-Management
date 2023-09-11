import React, { useEffect, useState } from 'react';

interface ImageGalleryProps {
    onImageSelect: (imageName: string) => void;
    fileLocation: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ onImageSelect, fileLocation }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filesFound, setFilesFound] = useState<boolean>(false);

    useEffect(() => {
        async function fetchImageUrls() {
            try {
                const response = await fetch('/api/images?fileLocation=' + fileLocation);
                const data = await response.json();
                if(data.imageUrls === undefined){
                    console.log("inside imageUrls undefined");
                    setFilesFound(false);
                } else {
                    console.log("inside imageUrls undefined");
                    setImageUrls(data.imageUrls);
                    setFilesFound(true);
                }
                
            } catch (error) {
                console.error('Error fetching image URLs:', error);
            }
        }
        fetchImageUrls();
    }, []);


    const handleImageClick = (imageUrl: string) => {
        const imageName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
        setSelectedImage(imageName);
        onImageSelect(imageName);
    };

    

    return (
        <div>
            {filesFound ? (
                <div>
                {imageUrls.map((imageUrl, index) => (
                    <img
                        className="img"
                        key={index}
                        src={imageUrl}
                        alt={`Image ${index}`}
                        onClick={() => handleImageClick(imageUrl)}
                    />
                ))}
            </div> ):
             (
                <p className="bold-white-center ">NO TEMPLATES AVAILABLE</p>
            )
        }

        </div>
    );
};

export default ImageGallery;

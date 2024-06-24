
// import React, { useState } from 'react';
// import './Gallery.css';
// import CloseIcon from '@mui/icons-material/Close'; 


// import Img1 from '../../assets/img1.png';
// import Img2 from '../../assets/img2.png';
// import Img3 from '../../assets/img3.png';
// import Img4 from '../../assets/img4.png';
// import Img5 from '../../assets/img5.png';
// import Img6 from '../../assets/img6.png';
// import Img7 from '../../assets/img7.png';
// import Img8 from '../../assets/img8.jpg';
// import Img9 from '../../assets/img9.jpg';
// import Img10 from '../../assets/img10.png';
// import Img11 from '../../assets/img11.png';
// import Img12 from '../../assets/img12.png';
// import Img13 from '../../assets/img13.png';
// import Img14 from '../../assets/img14.png';
// import Img15 from '../../assets/img15.png';
// import Img16 from '../../assets/img16.png';
// import Img17 from '../../assets/img17.png';
// import Img18 from '../../assets/img18.png';
// import Img19 from '../../assets/img19.png';
// import Img20 from '../../assets/img20.png';
// import Img21 from '../../assets/img21.png';
// import Img22 from '../../assets/img22.png';
// import Img23 from '../../assets/img23.png';
// import Img24 from '../../assets/img24.png';

// const Gallery = () => {
//     const data = [
//         { id: 1, imgSrc: Img1 },
//         { id: 2, imgSrc: Img2 },
//         { id: 3, imgSrc: Img3 },
//         { id: 4, imgSrc: Img4 },
//         { id: 5, imgSrc: Img5 },
//         { id: 6, imgSrc: Img6 },
//         { id: 7, imgSrc: Img7 },
//         { id: 8, imgSrc: Img8 },
//         { id: 9, imgSrc: Img9 },
//         { id: 10, imgSrc: Img10 },
//         { id: 11, imgSrc: Img11 },
//         { id: 12, imgSrc: Img12 },
//         { id: 13, imgSrc: Img13 },
//         { id: 14, imgSrc: Img14 },
//         { id: 15, imgSrc: Img15 },
//         { id: 16, imgSrc: Img16 },
//         { id: 17, imgSrc: Img17 },
//         { id: 18, imgSrc: Img18 },
//         { id: 19, imgSrc: Img19 },
//         { id: 20, imgSrc: Img20 },
//         { id: 21, imgSrc: Img21 },
//         { id: 22, imgSrc: Img22 },
//         { id: 23, imgSrc: Img23 },
//         { id: 24, imgSrc: Img24 },
//     ];

//     const [model, setModel] = useState(false); 
//     const [tempImgSrc, setTempImgSrc] = useState('');

//     const getImg = (imgSrc) => {
//         setTempImgSrc(imgSrc);
//         setModel(true);
//     };

//     return (
//         <>
//             <div className={model ? 'model open' : 'model'}>
//                 <img src={tempImgSrc} alt="" />
//                 <CloseIcon onClick={() => setModel(false)} />
//             </div>
//             <br />
//             <h2>GALLERY</h2>
//             <br />
//             <div className='gallery'>
//                 {data.map((item, index) => (
//                     <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
//                         <img src={item.imgSrc} alt={`Slide ${item.id}`} />
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Gallery;

import React from 'react';
import LightGallery from 'lightgallery/react';
import './Gallery.css';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

// Import images
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';
import Img4 from '../../assets/img4.png';
import Img5 from '../../assets/img5.png';
import Img6 from '../../assets/img6.png';
import Img7 from '../../assets/img7.png';
import Img8 from '../../assets/img8.jpg';
import Img9 from '../../assets/img9.jpg';
import Img10 from '../../assets/img10.png';
import Img11 from '../../assets/img11.png';
import Img12 from '../../assets/img12.png';
import Img13 from '../../assets/img13.png';
import Img14 from '../../assets/img14.png';
import Img15 from '../../assets/img15.png';
import Img16 from '../../assets/img16.png';
import Img17 from '../../assets/img17.png';
import Img18 from '../../assets/img18.png';
import Img19 from '../../assets/img19.png';
import Img20 from '../../assets/img20.png';
import Img21 from '../../assets/img21.png';
import Img22 from '../../assets/img22.png';
import Img23 from '../../assets/img23.png';
import Img24 from '../../assets/img24.png';

const images = [
    { src: Img1, alt: "1" },
    { src: Img2, alt: "2" },
    { src: Img3, alt: "3" },
    { src: Img4, alt: "4" },
    { src: Img5, alt: "5" },
    { src: Img6, alt: "6" },
    { src: Img7, alt: "7" },
    { src: Img8, alt: "8" },
    { src: Img9, alt: "9" },
    { src: Img10, alt: "10" },
    { src: Img11, alt: "11" },
    { src: Img12, alt: "12" },
    { src: Img13, alt: "13" },
    { src: Img14, alt: "14" },
    { src: Img15, alt: "15" },
    { src: Img16, alt: "16" },
    { src: Img17, alt: "17" },
    { src: Img18, alt: "18" },
    { src: Img19, alt: "19" },
    { src: Img20, alt: "20" },
    { src: Img21, alt: "21" },
    { src: Img22, alt: "22" },
    { src: Img23, alt: "23" },
    { src: Img24, alt: "24" },
];

const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="App">
            <h2>GALLERY</h2>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {images.map((image, index) => (
                    <a href={image.src} key={index}>
                        <img alt={image.alt} src={image.src} />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
};

export default Gallery;

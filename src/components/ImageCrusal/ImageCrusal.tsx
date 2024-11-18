import React,{useState,useEffect} from 'react'

const ImageCrusal = () => {
 const [CurrentImage, setCurrentImage] = useState<number>(0)

  let images = [
    {
      imageName : 'first',
      imageURL  :'https://verpex.com/assets/uploads/images/blog/How-to-Create-a-Website-Template.webp?v=1692783183'
    },
    {
      imageName : 'first',
      imageURL  :'https://kinsta.com/wp-content/uploads/2024/06/wp-create-wordpress-post-template-1024x512.jpg'
    },
    {
      imageName : 'first',
      imageURL  :'https://imgv3.fotor.com/images/share/Fotor-free-online-photo-design-and-graphic-design-maker.jpg'
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => 
        prev + 1 === images.length ? 0 : prev + 1
      );
    }, 1500);
  
    return () => clearInterval(interval);
  }, [images.length]);
  
  
    return (
    <div className='image'>
 {
   <img 
    src={images[CurrentImage].imageURL}
    alt={images[CurrentImage].imageName}
    loading="lazy"
  />
  
 }
    </div>
  )
}

export default ImageCrusal
import React, {useState, useEffect} from 'react'

import PuffLoader from "react-spinners/PuffLoader";


function Home(props) {
    const [images,setImages ]= useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const fetchImages = async () =>{
        const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLACH_API}`)
            const data = await res.json()
            setImages(data)
            setLoading(false)
        }
        fetchImages()
    },[])
    const img = images.map(image => <img src={image.urls.full} className='img' alt='for you'/>)
  return (
    <div className='home'>
        <h1 className={props.dark?'dark--title':'home--title'}>For You . . .</h1>
        {
            loading ?
            <div className="loader">
                <PuffLoader color="#60935D" loading={loading} />
            </div>
            :
            
            <main className='img--container'>

            {img}
        </main>
        }
      
      
    </div>
  )
}
export default Home

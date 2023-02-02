import React,{useState} from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Search(props) {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const getResult = async () =>{
        const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_UNSPLACH_API}`)
        const data = await res.json()
    setResult(data.results)
    setLoading(load =>!load)
        
    }

    
    const handleChange = (e) =>{
        setQuery(e.target.value)
    }
    const showImages = result.map(img => <img src={img.urls.full} className='img--result' alt='result'/> )
    
  return (
    <div className='search'>
    <div className="search--container">

      <input type='text' value={query} onChange={handleChange} className='search--bar' placeholder='search for images' />
      <button onClick={getResult} type='submit'className='search--btn' >search</button>
    </div>
      {

        loading ?
        <div className="loader">
          <ClimbingBoxLoader color="#60935D" loading={loading} />
          <p className={props.dark?'dark-items':''}>search for anything</p>
        </div>
        :
        <main className='result--container'>
     

        {showImages}
      
      </main>
      }
    </div>
  )
}

export default Search

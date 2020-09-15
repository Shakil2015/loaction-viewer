import React, { useState,useEffect} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { usePosition } from 'use-position';

const LocationViewer = ()=>{
  const {
    latitude,
    longitude
  } = usePosition(true, {enableHighAccuracy: true})
  const [lat,setLat]=useState(23.810331)
  const [lng,setLng]=useState(90.412521)
  const [name,setName]= useState('')
  const [coordinate,setCoordinate]=useState('')
   
  useEffect(()=>{
   latitude && longitude && setTimeout(()=>{
      setLat(latitude)
      setLng(longitude)
    },1000)  
  },[latitude,longitude])
    
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Name:',name)
    console.log('Coordinate:',coordinate)
  }

  return (
      <Map center={{lat: lat,lng: lng}} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{lat: lat,lng: lng}}>
          <Popup>
            <form onSubmit={handleSubmit}>
              <label>
                coordinate:
                <input
                  name="name"
                  type="text"
                  value={`${lat},  ${lng}`}
                  onChange={e=>setCoordinate(e.target.value)}
                   />
              </label>
              <br/>
              <br/>
              <label>
                Name:
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={e=>setName(e.target.value)} 
                  />
              </label>
              <br/>
              <br/>
              <button  type="submit"   >send</button>
           </form>
         </Popup>
        </Marker>
      </Map>
    )
  
}
export default LocationViewer
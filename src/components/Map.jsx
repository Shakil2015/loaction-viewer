import React, { useState,useEffect} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { usePosition } from 'use-position';
import { useForm } from "react-hook-form";


const LocationViewer = ()=>{
  const {
    latitude,
    longitude
  } = usePosition(true, {enableHighAccuracy: true})
  console.log(latitude,longitude)
  const [lat,setLat]=useState(23.810331)
  const [lng,setLng]=useState(90.412521)
  const [name,setName]= useState('')
   
  useEffect(()=>{
   latitude && longitude && setTimeout(()=>{
      setLat(latitude)
      setLng(longitude)
    },1000)  
  },[latitude,longitude])

// const handleSubmit = (e)=>{
//   e.preventDefault()
//   console.log('clicked',e.target.value)


// }
const { handleSubmit, register, errors } = useForm();
const onSubmit = values => values && console.log('clicked',values,name);
//console.log(name)
  return (
      <Map center={{lat: lat,lng: lng}} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{lat: lat,lng: lng}}>
          <Popup>
          <form onSubmit={handleSubmit(onSubmit)}>
              <label>Latitude: </label>
              <input
                name="Latitude"
                value={lat}
              />
                <br/>
                <br/>
              <label>Longitude: </label>
              <input
                name="Longitude"
                value={lng}
              />
                <br/>
                <br/>
                <label>My Name: </label>
              <input
                 name='name1'
                 value={name}
                onChange={e=>setName(e.target.value)}

              />
                <br/>
                <br/>
              <button type="submit">Submit</button>
           </form>
          </Popup>
        </Marker>
      </Map>
    )
  
}
export default LocationViewer
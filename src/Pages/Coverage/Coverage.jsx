import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const Coverage = () => {
    const position = [51.505, -0.09]
    return (
        <div className='bg-white rounded-4xl'>
            <h1 className='font-extrabold text-[56px] text-secondary ml-[109px]'>We are available in 64 districts</h1>
            <div></div>
            <div className=' h-[426px] max-w-[1282px] mx-auto'>
                <h1 className=''>We deliver almost all over Bangladesh</h1>
                <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={false}
                className='h-[426px] max-w-[1282px] mx-auto'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
    );
};

export default Coverage;
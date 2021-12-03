import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import PopupCard from './PopupCard';

function Map({ searchResults }) {
  //select location
  const [selectedLocation, setSelectedLocation] = useState({});

  //transform the search results object from json file
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/juliemayak/ckwp1neaj6boa14nzpml96gph"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <div className="bg-white py-1 px-3 text-sm rounded-xl font-semibold border-gray-400 cursor-pointer shadow-lg hover:scale-105 transition duration-200 ease-out group ">
              <p onClick={() => setSelectedLocation(result)}>{result.price} ₽</p>
            </div>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              closeButton={false}
              closeOnMove={true}
              className="z-10 h-60 w-72"
            >
              <PopupCard
                img={result.img}
                title={result.title}
                price={result.price}
                star={result.star}
                location={result.location}
              />
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

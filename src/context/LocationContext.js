import {createContext, useState, useEffect, useContext} from "react";

const LocationContext = createContext();

export const LocationProvider = ({children}) => {
    const [latitude, setLatitude] = useState(38.41);
    const [longitude, setlongitude] = useState(27.12);

    const locationData = {
        latitude, longitude, setLatitude, setlongitude
    }
    useEffect(() => {
        //kullanıcı konumu
        let data = require("../cities.json");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // latitude ve longitude kullanıcının konumundan alınır
                    setLatitude(position.coords.latitude.toFixed(2))
                    setlongitude( position.coords.longitude.toFixed(2))
                    data.push(
                        {
                            "id": 99,
                            "name": "Konumunuz",
                            "latitude": position.coords.latitude.toFixed(2),
                           "longitude": position.coords.longitude.toFixed(2)
                        })
                },
                (error) => {
                    alert("Lütfen konum izni verin ya da bir konum seçin")
                },
            )
        } else {
            alert('Your browser does not support location information.')
        }
    }, [])

    return (
        <LocationContext.Provider value={locationData}>{children}</LocationContext.Provider>
    )
}

export const useLocation = () => useContext(LocationContext)
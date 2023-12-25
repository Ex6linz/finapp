// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;

        const google = window.google;
        new google.maps.Map(mapRef.current, {
            center: { lat: 52.2297, lng: 21.0122 },
            zoom: 13,
        });

    }, []);

    return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default GoogleMap;
import { Container, Grid } from "@mui/material";
import Map, { Marker } from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Title from "../../Shared/Title/Title";
import 'mapbox-gl/dist/mapbox-gl.css'
const Mapbox = () => {
    return (
        <Container >
            <Title heading={'Find Us On Map'} subheading={"Gulsan-1, Dhaka, pulses with cultural vibrancy, bustling markets, and diverse street flavors. Its energetic streets teem with local crafts, fresh produce, and aromatic street food, embodying a dynamic fusion of tradition and modernity, creating an electric ambiance at the heart of Bangladesh's capital."}></Title>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden',border:'1px solid #2196f3', borderRadius:'10px' }}>
                <Map
                    mapLib={import('mapbox-gl')}
                    initialViewState={{
                        longitude: 90.3474517,
                        latitude: 23.7986041,
                        zoom: 8
                    }}
                    style={{ maxWidth: '100%', height: 500,  }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}

                >
                    <Marker longitude={90.3474517} latitude={23.7986041} anchor="bottom" zoom={8}>
                        <LocationOnIcon></LocationOnIcon>
                    </Marker>
                </Map>
            </Grid>
        </Container>
    );
};

export default Mapbox;
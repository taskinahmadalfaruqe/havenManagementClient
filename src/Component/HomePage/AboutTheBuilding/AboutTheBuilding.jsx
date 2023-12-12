import Box from '@mui/material/Box';
import Title from '../../Shared/Title/Title';
import { Container, Grid, Typography } from '@mui/material';
import './building.css'
const AboutTheBuilding = () => {
    return (
        <Container>
            <Box>
                <Title heading={'About The Building'} subheading={'Are You Want To know About More Please Scrole Down'}></Title>
                <Box sx={{ display: 'grid', gap: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Security System:</span> Your building might have a robust security system in place, including surveillance cameras, access control systems, and security personnel. This ensures the safety of residents and the premises.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Electricity Redundancy:</span> Buildings often have backup power systems such as generators or uninterruptible power supplies (UPS) to ensure continuous electricity supply, especially during outages or emergencies.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Fire Safety Measures:</span> Fire alarms, sprinkler systems, fire extinguishers, and fire exits are crucial features to protect against fire hazards and ensure the safety of occupants.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">HVAC Systems:</span> Heating, ventilation, and air conditioning systems maintain comfortable temperatures and air quality throughout the building, ensuring a pleasant environment for residents.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Elevators and Lifts:</span> Especially in taller buildings, elevators provide convenient access and mobility. Regular maintenance and safety checks are crucial for their proper functioning.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Water Supply and Plumbing:</span> Adequate water supply and efficient plumbing systems ensure residents have access to clean water and proper drainage.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Internet Connectivity:</span> Modern buildings often offer high-speed internet connections, either through wired or wireless networks, catering to the connectivity needs of residents.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Waste Management:</span> Proper waste disposal and recycling facilities contribute to maintaining cleanliness and sustainability within the building premises.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Common Area Amenities:</span> Gyms, swimming pools, lounges, or communal spaces are additional features that enhance residents quality of life and foster a sense of community.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                <span className="building">Structural Integrity and Maintenance:</span> Regular inspections and maintenance ensure the building is structural integrity, preventing issues like leaks, cracks, or other structural concerns that might compromise safety.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant="body1" mt={'20px'}>
                    Each of these features contributes to the overall functionality, safety, and comfort of your building, making it a more desirable place for residents to live.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutTheBuilding;
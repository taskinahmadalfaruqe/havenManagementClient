
import { Box, Button, Grid, TextField } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PostAApeartment = () => {

    // eslint-disable-next-line no-unused-vars
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate();

    const handelAddApartment = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const apartment_image = formData.get('apartment_image');
        const floor_no = formData.get('floor_no');
        const block_name = formData.get('block_name');
        const apartment_no = formData.get('apartment_no');
        const rent = formData.get('rent');
        const total_rooms = formData.get('total_rooms');
        const wash_room = formData.get('wash_room');
        const kitchen_room = formData.get('kitchen_room');
        const drawing_room = formData.get('drawing_room');

        const addApartmentInfo = {
            apartment_image: apartment_image,
            floor_no: floor_no,
            block_name: block_name,
            apartment_no: apartment_no,
            rent: rent,
            total_rooms: total_rooms,
            wash_room: wash_room,
            kitchen_room: kitchen_room,
            drawing_room: drawing_room,
            status:"Available"
        }
        axiosSecure.post("/apartmentData", addApartmentInfo)
            .then(res => {
                console.log(res.data)
                navigate('/dasboard');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SuccessFully Post",
                    text: `'Post ID Is:'${res.data?.insertedId}`,
                    showConfirmButton: true,
                    timer: 2000,
                });

            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: `${err}`,
                    showConfirmButton: true,
                    timer: 5000,
                });
            });

    };

    return (
        <Box display={"flex"}
            gap={5}
            flexDirection={"column"}
            mt={2}>
            <Box
                border={'1px solid #42a5f5'}
                borderRadius={1}
                padding={3}
                component="form"
                sx={{ mx: 'auto' }}
                noValidate
                autoComplete="off"
                onSubmit={handelAddApartment}
            >
                <h2>Add A New Apeatment</h2>
                <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Apartment Image"
                            variant="outlined"
                            name="apartment_image"
                            type="text"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Apartment Name"
                            variant="outlined"
                            name="block_name"
                            type="text"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Apartment Floor Number"
                            variant="outlined"
                            name="floor_no"
                            type="number"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Apartment Number"
                            variant="outlined"
                            name="apartment_no"
                            type="text"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Apartment Rent"
                            variant="outlined"
                            name="rent"
                            type="number"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Apartment Total Room"
                            variant="outlined"
                            name="total_rooms"
                            type="number"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Apartment Total Washroom"
                            variant="outlined"
                            name="wash_room"
                            type="number"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Number Of Kitchen Room"
                            variant="outlined"
                            name="kitchen_room"
                            type="number"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Number Of Drawing Room "
                            variant="outlined"
                            name="drawing_room"
                            type="number"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                           Add An Apeartment
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default PostAApeartment;
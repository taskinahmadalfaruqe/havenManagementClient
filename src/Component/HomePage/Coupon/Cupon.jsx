import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';
import Title from '../../Shared/Title/Title';
import useCupon from '../../../Hooks/useCupon';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Cupon = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cupondata] = useCupon();

    return (
        <Container>
            <Title heading='Cupon Card' subheading='Have Exciting Deals For You Just Join Us Now' />
            <div style={{ display:'flex', gap:'15px', justifyContent:'center', alignItems:'center', flexWrap: 'wrap'}}>
                {cupondata.map((data, index) => (
                    <div key={index}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Button onClick={handleOpen} variant="contained">{data.cuponTitle}</Button>
                        </Box>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {data.cuponTitle}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {data.CuponDescription}
                                </Typography>
                                <Box>
                                    <Typography id="modal-modal-description" sx={{ mt: 2, color:'#42a5f5' }}>
                                        Code Is: {data.cuponCard}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Percentage: {data.percentage}%
                                    </Typography>
                                </Box>
                            </Box>
                        </Modal>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Cupon;





// <Box>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//         {data.cuponTitle}
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//         {data.CuponDescription}
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//         {data.cuponCard}
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//         {data.percentage}
//     </Typography>
// </Box>

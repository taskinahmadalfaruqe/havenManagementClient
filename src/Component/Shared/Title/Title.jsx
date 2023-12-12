import PropTypes from 'prop-types'
import { Typography, Box } from '@mui/material';

const Title = ({ heading, subheading }) => {
    return (
        <Box maxWidth={'550px'} marginX={'auto'} textAlign={'center'} my={'30px'} >
            <Typography color={'#2196f3'} variant="h2" fontWeight={'bold'} mb={'12px'} fontSize={{xs:'30px', md:'50px', lg:'60px'}}>{heading}</Typography>
            <Typography variant="body1">{subheading}</Typography>
        </Box>
    )
}
Title.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
}

export default Title
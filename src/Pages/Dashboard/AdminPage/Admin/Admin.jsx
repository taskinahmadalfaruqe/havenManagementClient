import { makeStyles } from '@material-ui/core/styles';
import useUser from "../../../../Hooks/useUser";
import useCupon from "../../../../Hooks/useCupon";
import useAuth from "../../../../Hooks/useAuth";
import useMemberRequest from "../../../../Hooks/useMemberRequest";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useAvailableRooms from "../../../../Hooks/useAvailableRooms";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    card: {
        minWidth: 200,
        minHeight: 155,
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#eee',
        borderTop: '1px solid #42a5f5',
    },
}));

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ title, value, percenttange }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography variant="h4" component="p">
                    {value}
                </Typography>
                <Typography variant="h4" component="p">
                    {percenttange}
                </Typography>
            </CardContent>
        </Card>
    );
};

const Admin = () => {
    const classes = useStyles(); 
    const [users] = useUser();
    const [cupons] = useCupon();
    const { user } = useAuth();
    const [memberRequest] = useMemberRequest();
    const [totalAvailableRooms] = useAvailableRooms();

    const makePercentage =
        totalAvailableRooms?.availavailRooms / totalAvailableRooms?.total || 0;
    const percentage = (makePercentage * 100).toFixed(2) + '%';

    return (
        <Box mt={3}>
            <Box mb={3}>
                <Box fontSize={25} color={'#42a5f5'} mb={2}>Hi! {user?.displayName}..</Box>
                <Box>Email:{user?.email}</Box>
            </Box>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard title="Total Users" value={users?.length || 0} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard title="Active Cupon" value={cupons?.length || 0} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard
                            title="Member Request"
                            value={memberRequest?.length || 0}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard
                            title="Total Rooms"
                            value={totalAvailableRooms?.total || 0}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard
                            title="Available Rooms"
                            value={totalAvailableRooms?.availavailRooms || 0}
                            percenttange={percentage || 0}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard
                            title="Booked Rooms"
                            value={totalAvailableRooms?.bookedRooms || 0}
                        >
                        </DashboardCard>
                       
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};

export default Admin;

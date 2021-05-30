import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {},
});

export default function CustomizedTables({ anomalies }) {
    const classes = useStyles();

    return (
        <div className="tableCss" style={{ marginBottom: "2%" }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead color="red">
                        <TableRow>
                            <StyledTableCell>Correlative Features</StyledTableCell>
                            <StyledTableCell align="right" margin="5px">From Line</StyledTableCell>
                            <StyledTableCell align="right">Until Line</StyledTableCell>
                            <StyledTableCell align="right">Anomaly #</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            anomalies.length !== 0 ? Object.keys(anomalies).map((row, index) => {
                                console.log(anomalies)
                                return (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            {anomalies[row].Description}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{anomalies[row].start}</StyledTableCell>
                                        <StyledTableCell align="right">{anomalies[row].end}</StyledTableCell>
                                        <StyledTableCell align="right">{row}</StyledTableCell>
                                    </StyledTableRow>
                                )
                            }) : <span>No Anomalies</span>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

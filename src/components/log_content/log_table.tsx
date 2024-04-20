
import { useRecoilState } from "recoil";
import { toolcodeValueSate } from "../RecoilState";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React from "react";



function createData(
    name: string,
    level: string,
    eventTime: string,
    elapsedTime: number,
    packageName: string,
) {
    return {
        name,
        level,
        eventTime,
        elapsedTime,
        packageName,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.level}</TableCell>
                <TableCell align="right">{row.eventTime}</TableCell>
                <TableCell align="right">{row.elapsedTime}</TableCell>
                <TableCell align="right">{row.packageName}</TableCell>
                <TableCell align="right">
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('RecvPayloadLog', "DEBUG", "Apr 19, 2024, 03:33:04 PM", 1713558784052, "com.tibco.bw.palette.generalactivities.Log.workflow.RecvPayloadLog"),
    //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    //   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function LogViewTable({ trcakingKey }: { trcakingKey: string }) {
    return (
        <>
            <h1>log view table, search Key: {trcakingKey}</h1>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Log Name</TableCell>
                            <TableCell align="right">Log Level</TableCell>
                            <TableCell align="right">Event Time</TableCell>
                            <TableCell align="right">ElapsedTime (ms)</TableCell>
                            <TableCell align="right">Package</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
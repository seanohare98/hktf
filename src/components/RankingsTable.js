import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {styled} from '@material-ui/core/styles';
import React from "react";
import RankingsRow from './RankingsRow';
import constants from '../constants';
import Loader from "react-loader-spinner";

const PerformanceTable = styled(Table)({
    maxWidth: '50%',
    margin: 'auto',
    borderRadius: '6px',
    border: '1px inset #9395A8',
});

const TableHeaderRow = styled(TableRow)({
    backgroundColor: '#9395A8',
});

const TableRowHighlighted = styled(TableRow)({
    "&:hover": {
        backgroundColor: "#6262CB !important"
    },
    cursor: 'pointer',
});

const get_event_type = event => {
    event = event.toLowerCase();
    if (constants.field_events.includes(event))
        return 'field';
    if (constants.track_events.includes(event))
        return 'track';
};

export default class RankingsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            dataArray: null,
            url: this.props.url
        };
    };

    async componentDidMount() {
        let result = await fetch(this.state.url);
        const data = await result.json();
        if (data)
            this.setState({dataArray: data, isLoading: false}, () => this.props.onTableLoad());
        else
            this.setState({...this.state, isLoading: true});
    };


    render() {
        let RenderedTable;
        let event = this.state.url.split('event=').pop();
        if (!this.state.isLoading)
            RenderedTable = this.state.dataArray.map((row, i) => {
                return <TableRowHighlighted onClick={() => this.props.onAthleteSelect(row.name)} key={i}><RankingsRow
                    type={get_event_type(event)} key={i}
                    data={row}/></TableRowHighlighted>;
            });

        return (
            <div>
                <PerformanceTable>
                    <TableHead>
                        <TableHeaderRow>
                            <TableCell style={{fontWeight: 'bold'}}>NAME</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>RESULT</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>MEET</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>DATE</TableCell>
                        </TableHeaderRow>
                    </TableHead>
                    <TableBody>{RenderedTable}</TableBody>
                </PerformanceTable>
                <Loader style={{margin: 'auto'}} type="ThreeDots" color="#6262CB" height={80} width={80}
                        visible={this.state.isLoading}/>
            </div>
        )
    }
}
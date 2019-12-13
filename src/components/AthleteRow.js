import React from 'react';
import {TableCell} from "@material-ui/core";

export default class ReportRow extends React.Component {

    buildRow = ({event, result, meet, date}) => {
        let unit = (this.props.type === 'field') ? ' (m)' : ' (s)';
        return [event, result + unit, meet, date];
    };

    render() {
        let rowInfo = this.buildRow(this.props.data);
        return (
            rowInfo.map((data, i) => {
                if(i === 1) {
                    return (
                        < TableCell key={i} style={{wordBreak: 'break-all', fontWeight: 'bold'}}>
                            {data}
                        </TableCell>
                    );
                }
                else {
                    return (
                        < TableCell key={i} style={{wordBreak: 'break-all'}}>
                            {data}
                        </TableCell>
                    );
                }
            }));
    }
}

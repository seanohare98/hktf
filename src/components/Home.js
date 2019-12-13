import React, {Component} from 'react';
import Nav from './Nav';
import RankingsTable from "./RankingsTable";
import Button from "@material-ui/core/Button";
import NativeSelects from "./NativeSelects";
import constants from '../constants';
import AthleteTable from "./AthleteTable";
import {styled} from "@material-ui/core";

const ReturnButton = styled(Button)({
    display: 'block',
    margin: 'auto',
    width: '50%',
    marginTop: '1%',
});

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            tableLoading: true,
            renderAthlete: false,
            athleteName: null,
            event: 'All',
            gender: 'Men',
            season: 2019,
            top: 10,
        };
    }

    onTableLoad = () => {
        this.setState({tableLoading: false});
    };

    onDisplayChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    onAthleteSelect = athlete => {
        this.setState({renderAthlete: true, athleteName: athlete});
    };

    handleReturn = () => {
        this.setState({renderAthlete: false, athleteName: null})
    };

    handleTextField = e => {
        if (e.keyCode === 13)
            this.setState({renderAthlete: true, athleteName: e.target.value})
    };

    render() {
        let display;
        if (this.state.renderAthlete && this.state.athleteName) {
            let athleteURL = `http://64.225.36.241/athletes/${this.state.athleteName}`;
            display = <div><h2 style={{margin: '1% auto 0 auto', maxWidth: '50%', textTransform: 'capitalize'}}>
                {this.state.athleteName}</h2>
                <AthleteTable key={athleteURL} onTableLoad={this.onTableLoad}
                              url={athleteURL}/>
            </div>
        } else if (this.state.event === 'All') {
            display = constants.events[this.state.gender].map(eventName => {
                let simplifiedName = eventName.replace(this.state.gender.toLowerCase() + 's', "");
                let url;
                (simplifiedName === 'decathlon' || simplifiedName === 'heptathlon') ?
                    url = `http://64.225.36.241/results/` +
                        `${this.state.season}?top=${this.state.top}` +
                        `&event=${simplifiedName}` :
                    url = `http://64.225.36.241/results/` +
                        `${this.state.season}?top=${this.state.top}` +
                        `&event=${this.state.gender.toLowerCase().replace(/\s/g, '')}s` +
                        `${simplifiedName}`;
                return (
                    <div><h2 style={{margin: '1% auto 0 auto', maxWidth: '50%'}}>
                        {simplifiedName.replace(this.state.gender, "").toUpperCase()} ({this.state.gender.toUpperCase()})</h2>
                        < RankingsTable
                            key={url}
                            onTableLoad={this.onTableLoad}
                            onAthleteSelect={this.onAthleteSelect}
                            url={url}
                        />
                    </div>
                )
            })
        } else {
            let url;
            (this.state.event === 'Decathlon' || this.state.event === 'Heptathlon') ? url = `http://64.225.36.241/results/` +
                `${this.state.season}?top=${this.state.top}` +
                `&event=${this.state.event}` :
                url = `http://64.225.36.241/results/` +
                    `${this.state.season}?top=${this.state.top}` +
                    `&event=${this.state.gender.toLowerCase().replace(/\s/g, '')}s` +
                    `${this.state.event.toLowerCase().replace(/\s/g, '')}`;
            display = <div><h2 style={{margin: '1% auto 0 auto', maxWidth: '50%'}}>
                {this.state.event.toUpperCase()} ({this.state.gender.toUpperCase()})</h2>
                < RankingsTable
                    key={url}
                    onTableLoad={this.onTableLoad}
                    onAthleteSelect={this.onAthleteSelect}
                    url={url}
                />
            </div>
        }

        return (
            <div style={{marginBottom: '1%'}}>
                <Nav key={this.state.athleteName} handleTextField={this.handleTextField}/>
                {!this.state.renderAthlete ?
                    <NativeSelects top={this.state.top} gender={this.state.gender} event={this.state.event}
                                   season={this.state.season}
                                   onDisplayChange={this.onDisplayChange}/> :
                    <ReturnButton variant='outlined' color='secondary' onClick={this.handleReturn}>Return To
                        Rankings</ReturnButton>}
                {display}

            </div>

        );

    }

}

export default Home;
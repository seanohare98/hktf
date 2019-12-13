import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        marginTop: '1%',
    },
    formControl: {
        margin: 'auto',
        minWidth: '12%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    nativeSelect: {
        '&:hover:not(.Mui-disabled):before': {
            borderColor: '#6262CB',
        },
        "&:after": {
            // changes the bottom textbox border when clicked/focused.  thought it would be the same with input label
            borderColor: '#6262CB',
        }
    },
    inputLabel: {
        "&$inputFocused": {
            color: "#6262CB"
        }
    },
    inputFocused: {},
}));

export default function NativeSelects(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel}
                            classes={{focused: classes.inputFocused}} shrink>
                    Event
                </InputLabel>
                <NativeSelect
                    className={classes.nativeSelect}
                    value={props.event}
                    onChange={props.onDisplayChange('event')}
                    inputProps={{
                        name: 'event'
                    }}
                >
                    <option value='All'>All Events</option>
                    <option value='100m'>100 Meters</option>
                    <option value='200m'>200 Meters</option>
                    <option value='400m'>400 Meters</option>
                    <option value='800m'>800 Meters</option>
                    <option value='1500m'>1500 Meters</option>
                    <option value='3000m'>3000 Meters</option>
                    <option value='5000m'>5000 Meters</option>
                    <option value='10000m'>10000 Meters</option>
                    {(props.gender === 'Women') ? <option value='100mh'>100 Hurdles</option> :
                        <option value='110mh'>110 Hurdles</option>}
                    <option value='400mh'>400 Hurdles</option>
                    <option value='3000msc'>3000 SteepleChase</option>
                    <option value='5000mrw'>5000 Race Walk</option>
                    <option value='Pole Vault'>Pole Vault</option>
                    <option value='High Jump'>High Jump</option>
                    <option value='Long Jump'>Long Jump</option>
                    <option value='Triple Jump'>Triple Jump</option>
                    <option value='Discus Throw'>Discus</option>
                    <option value='Shot Put'>Shot Put</option>
                    <option value='Javelin Throw'>Javelin Throw</option>
                    <option value='Hammer Throw'>Hammer Throw</option>
                    {(props.gender === 'Women') ? <option value='Heptathlon'>Heptathlon</option> :
                        <option value='Decathlon'>Decathlon</option>}
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel}
                            classes={{focused: classes.inputFocused}} shrink>
                    Gender
                </InputLabel>
                <NativeSelect
                    className={classes.nativeSelect}
                    value={props.gender}
                    onChange={props.onDisplayChange('gender')}
                    inputProps={{
                        name: 'gender'
                    }}
                >
                    <option value='Men'>Men</option>
                    <option value='Women'>Women</option>
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel}
                            classes={{focused: classes.inputFocused}} shrink>
                    Season
                </InputLabel>
                <NativeSelect
                    className={classes.nativeSelect}
                    value={props.season}
                    onChange={props.onDisplayChange('season')}
                    inputProps={{
                        name: 'season'
                    }}
                >
                    <option value={2019}>2018 - 2019</option>
                    <option value={2020}>2019 - 2020</option>
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel}
                            classes={{focused: classes.inputFocused}} shrink>
                    Displaying Top
                </InputLabel>
                <NativeSelect
                    className={classes.nativeSelect}
                    value={props.top}
                    onChange={props.onDisplayChange('top')}
                    inputProps={{
                        name: 'top'
                    }}
                >
                    <option value='*'>All</option>
                    <option value={25}>25</option>
                    <option value={10}>10</option>
                    <option value={5}>5</option>
                </NativeSelect>
            </FormControl>
        </div>
    );
}
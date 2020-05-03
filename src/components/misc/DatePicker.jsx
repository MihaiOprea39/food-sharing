import 'date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";

export default function FoodShareDatePicker({label, value, onChange}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label={label}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                onChange={onChange}
                value={value}
            />
        </MuiPickersUtilsProvider>
    );
}


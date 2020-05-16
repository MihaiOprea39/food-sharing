import 'date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";

export default function FoodShareDatePicker({label, placeholder, value, onChange}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                autoOk
                format="MMM dd, yyyy"
                margin="normal"
                id="date-picker-inline"
                label={label}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </MuiPickersUtilsProvider>
    );
}


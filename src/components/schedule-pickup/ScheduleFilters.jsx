import React, {useEffect, useState} from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import FoodShareDatePicker from "../reusable/DatePicker";
import './schedule-filters.scss';
import format from "date-fns/format";
import firebase from "../../firebase";

const defaultFilters = {
    restaurant: null,
    date: null
}

export default function SchedulePickUpFilters({onFiltersSubmit}) {
    const [filters, setFilters] = useState(defaultFilters);
    const [source, setSource] = useState([]);

    const fetchAutocompleteSource = async () => {
        const query = await firebase
            .firestore().collection('restaurants')
            .orderBy('name', 'asc');

        const snapshot = await query.get();
        const data = snapshot.docs.map(document => document.data());

        setSource(data);
    };

    const onRestaurantChange = (_, value) => {
        setFilters({
            ...filters,
            restaurant: value
        })
    };

    const onDateChange = (value) => {
        const simplifiedDate = value ? format(value, 'MMM dd, yyyy') : null;
        const formattedDate = new Date(simplifiedDate).getTime();

        setFilters({
            ...filters,
            date: formattedDate
        })
    }

    const onScheduleInteract = () => {
        onFiltersSubmit(filters);
    }

    const isSubmitAllowed = () => {
        return !!(filters.date && filters.restaurant);
    };

    useEffect(() => {
        (async function asyncFn() {
            await fetchAutocompleteSource();
        })();
    }, []);

    return (
        <div className="foodshare-schedule-filters-wrapper card card-body"
             style={{display: 'flex', flexDirection: 'row'}}>
            <div className="col-12 col-lg-5">
                <div className="form-group mb-lg-0">
                    <Autocomplete
                        id="autocomplete-input-container"
                        options={source}
                        getOptionLabel={(option) => option.name}
                        fullWidth
                        value={filters && filters.restaurant}
                        onChange={onRestaurantChange}
                        renderInput={(params) => <TextField {...params} label="Restaurant"/>}
                    />
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <FoodShareDatePicker placeholder="Available date" value={filters.date} onChange={onDateChange}/>
            </div>
            <div className="col-12 col-lg-3">
                <button
                    className={`btn btn-lg btn-primary btn-block mt-3 mt-md-0 animate-up-2 ${isSubmitAllowed() ? '' : 'not-allowed-element'}`}
                    onClick={onScheduleInteract}>Schedule pick-up
                </button>
            </div>
        </div>
    );
}

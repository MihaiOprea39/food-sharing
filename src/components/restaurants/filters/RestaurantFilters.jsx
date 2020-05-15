import React, {useEffect, useState} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import './restaurant-filters.scss';
import {useLocation} from "react-router-dom";

const initialFilters = {
    rating: [],
    location: ''
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function RestaurantFilters({locations, onFiltersChange}) {
    const [filters, setFilters] = useState(initialFilters);
    const queryString = useQuery();

    const setLocationFilterFromUrl = () => {
        initialFilters.location = queryString.get('location') || '';
    }

    const handleRatingChange = (event) => {
        const {target: {name: stars}} = event;

        event.persist();

        setFilters({
            ...filters,
            rating: filters.rating.includes(stars) ?
                filters.rating.filter(item => item !== stars) :
                [...filters.rating, stars]
        });
    };

    const handleLocationChange = (event) => {
        event.persist();

        setFilters({
            ...filters,
            location: event.target.value || ''
        });
    };

    useEffect(() => {
        onFiltersChange(filters);
    }, [filters]);

    useEffect(setLocationFilterFromUrl, []);

    return (
        <aside className="col-12 col-lg-3 mt-3 mt-lg-0 z-2 order-lg-2 restaurant-filters-wrapper">
            <div id="filters-sidebar" className="d-none d-lg-block">
                <div className="card shadow-sm border-soft mt-4 restaurant-filter-card">
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <Typography>Ratings</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <ul id="reviews" className="list-group list-group list-group-flush ratings-list-container"
                                style={{marginTop: '-32px'}}>
                                <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                    <div className="form-check">
                                        <label className="form-check-label rating-item-container">
                                            <Checkbox
                                                checked={filters.rating.includes('5')}
                                                color="primary"
                                                onChange={handleRatingChange}
                                                inputProps={{
                                                    'aria-label': 'primary checkbox',
                                                    'name': '5'
                                                }}
                                            />
                                            <span className="d-flex rating-stars">
                                                <i className="star fas fa-star text-warning"/>
                                                <i className="star fas fa-star text-warning"/>
                                                <i className="star fas fa-star text-warning"/>
                                                <i className="star fas fa-star text-warning"/>
                                                <i className="star fas fa-star text-warning"/>
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                    <div className="form-check">
                                        <label className="form-check-label rating-item-container">
                                            <Checkbox
                                                checked={filters.rating.includes('4')}
                                                color="primary"
                                                onChange={handleRatingChange}
                                                inputProps={{
                                                    'aria-label': 'primary checkbox',
                                                    'name': '4'
                                                }}
                                            />
                                            <span className="d-flex rating-stars">
                                                        <i className="star fas fa-star text-warning"/>
                                                        <i className="star fas fa-star text-warning"/>
                                                        <i className="star fas fa-star text-warning"/>
                                                        <i className="star fas fa-star text-warning"/>
                                                        <i className="star fas fa-star text-grey"/>
                                                    </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                    <div className="form-check">
                                        <label className="form-check-label rating-item-container">
                                            <Checkbox
                                                checked={filters.rating.includes('3')}
                                                color="primary"
                                                onChange={handleRatingChange}
                                                inputProps={{
                                                    'aria-label': 'primary checkbox',
                                                    'name': '3'
                                                }}
                                            />
                                            <span className="d-flex rating-stars">
                                                        <i className="star fas fa-star text-warning"/>
                                                        <i className="star fas fa-star text-warning"/>
                                                        <i className="star fas fa-star text-warning"/>
                                                        <i className="star fas fa-star text-grey"/>
                                                        <i className="star fas fa-star text-grey"/>
                                                    </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                    <div className="form-check">
                                        <label className="form-check-label rating-item-container">
                                            <Checkbox
                                                checked={filters.rating.includes('2')}
                                                color="primary"
                                                onChange={handleRatingChange}
                                                inputProps={{
                                                    'aria-label': 'primary checkbox',
                                                    'name': '2'
                                                }}
                                            />
                                            <span className="d-flex rating-stars">
                                                <i className="star fas fa-star text-warning"/>
                                                <i className="star fas fa-star text-warning"/>
                                                <i className="star fas fa-star text-grey"/>
                                                <i className="star fas fa-star text-grey"/>
                                                <i className="star fas fa-star text-grey"/>
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                    <div className="form-check">
                                        <label className="form-check-label rating-item-container">
                                            <Checkbox
                                                checked={filters.rating.includes('1')}
                                                color="primary"
                                                onChange={handleRatingChange}
                                                inputProps={{
                                                    'aria-label': 'primary checkbox',
                                                    'name': '1'
                                                }}
                                            />
                                            <span className="d-flex rating-stars">
                                                <i className="star fas fa-star text-warning"/>
                                                <i className="star fas fa-star text-grey"/>
                                                <i className="star fas fa-star text-grey"/>
                                                <i className="star fas fa-star text-grey"/>
                                                <i className="star fas fa-star text-grey"/>
                                            </span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>

                <div className="card shadow-sm border-soft mt-4  restaurant-filter-card">
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <Typography>Location</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <select className="custom-select custom-select" style={{marginTop: '-15px'}} value={filters.location} onChange={handleLocationChange}>
                                <option value="">None</option>
                                {locations && locations.map((location, key) => (
                                    <option key={key} value={location.id}>{location.name}</option>
                                ))}
                            </select>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        </aside>
    );
}

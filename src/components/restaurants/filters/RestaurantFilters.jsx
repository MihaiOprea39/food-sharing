import React, {useEffect, useState} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import './restaurant-filters.scss';

const initialFilters = {
    rating: []
};

export default function RestaurantFilters({onFiltersChange}) {
    const [filters, setFilters] = useState(initialFilters);

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

    useEffect(() => {
        onFiltersChange(filters);
    }, [filters]);

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
                            <Typography>Expansion Panel 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>

                <div className="card shadow-sm border-soft mt-4 p-3 restaurant-filter-card">
                    <a href="#" data-target="#amenities-1"
                       className="accordion-panel-header w-100 d-flex align-items-center justify-content-between"
                       data-toggle="collapse" role="button" aria-expanded="false"
                       aria-controls="amenities-1">
                        <span className="icon-title h6 mb-0 font-weight-bold">Amenities</span>
                        <span className="icon"><i className="fas fa-plus"></i></span>
                    </a>
                    <ul id="amenities-1"
                        className="collapse list-group list-group list-group-flush">
                        <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"/>
                                    <span className="form-check-sign"></span> Kitchen
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"/>
                                    <span className="form-check-sign"></span> Conference Room
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"/>
                                    <span className="form-check-sign"></span> Coffee & Drinks
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"/>
                                    <span className="form-check-sign"></span> Bike Parking
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

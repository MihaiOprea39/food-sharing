import React, {useState} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import './restaurant-filters.scss';

const ratingInitialObject = {
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false
};

export default function RestaurantFilters() {
    const [ratingFilter, setRatingFilter] = useState(ratingInitialObject);


    const handleRatingFilterChange = (event) => {
        event.persist();
        setRatingFilter({
            ...ratingFilter,
            [event.target.name]: event.target.checked
        })
    }

    console.log(ratingFilter);

    return (
        <aside className="col-12 col-lg-3 mt-3 mt-lg-0 z-2 order-lg-2 restaurant-filters-wrapper">
            <div id="filters-sidebar" className="d-none d-lg-block">
                <form action="#" method="get" className="sidebar-inner">

                    <div className="card shadow-sm border-soft mt-4 restaurant-filter-card">
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
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

                    <div className="card shadow-sm border-soft mt-4 restaurant-filter-card">
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>Ratings</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <ul id="reviews" className="list-group list-group list-group-flush ratings-list-container" style={{marginTop: '-32px'}}>
                                    <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                        <div className="form-check">
                                            <label className="form-check-label rating-item-container">
                                                <Checkbox
                                                    checked={ratingFilter.fiveStars}
                                                    color="primary"
                                                    onChange={handleRatingFilterChange}
                                                    inputProps={{
                                                        'aria-label': 'primary checkbox',
                                                        'name': 'fiveStars'
                                                    }}
                                                />
                                                <span className="d-flex rating-stars">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                    </span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                        <div className="form-check">
                                            <label className="form-check-label rating-item-container">
                                                <Checkbox
                                                    checked={ratingFilter.fourStars}
                                                    color="primary"
                                                    onChange={handleRatingFilterChange}
                                                    inputProps={{
                                                        'aria-label': 'primary checkbox',
                                                        'name': 'fourStars'
                                                    }}
                                                />
                                                <span className="d-flex rating-stars">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                    </span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                        <div className="form-check">
                                            <label className="form-check-label rating-item-container">
                                                <Checkbox
                                                    checked={ratingFilter.threeStars}
                                                    color="primary"
                                                    onChange={handleRatingFilterChange}
                                                    inputProps={{
                                                        'aria-label': 'primary checkbox',
                                                        'name': 'threeStars'
                                                    }}
                                                />
                                                <span className="d-flex rating-stars">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                    </span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                        <div className="form-check">
                                            <label className="form-check-label rating-item-container">
                                                <Checkbox
                                                    checked={ratingFilter.twoStars}
                                                    color="primary"
                                                    onChange={handleRatingFilterChange}
                                                    inputProps={{
                                                        'aria-label': 'primary checkbox',
                                                        'name': 'twoStars'
                                                    }}
                                                />
                                                <span className="d-flex rating-stars">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                    </span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                        <div className="form-check">
                                            <label className="form-check-label rating-item-container">
                                                <Checkbox
                                                    checked={ratingFilter.oneStar}
                                                    color="primary"
                                                    onChange={handleRatingFilterChange}
                                                    inputProps={{
                                                        'aria-label': 'primary checkbox',
                                                        'name': 'oneStar'
                                                    }}
                                                />
                                                <span className="d-flex rating-stars">
                                                        <i className="star fas fa-star text-warning"/>
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
                                expandIcon={<ExpandMoreIcon />}
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



                    <div className="card list-group list-group-flush shadow-sm border-soft p-3 restaurant-filter-card">
                        <a href="#" data-target="#price"
                           className="accordion-panel-header w-100 d-flex align-items-center justify-content-between"
                           data-toggle="collapse" role="button" aria-expanded="false"
                           aria-controls="price">
                            <span className="icon-title h6 mb-0 font-weight-bold">Price range</span>
                            <span className="icon"><i className="fas fa-plus"></i></span>
                        </a>
                        <div id="price" className="collapse">
                            <div className="pt-5">
                                <div id="input-slider-range" data-range-value-min="100"
                                     data-range-value-max="500"></div>
                                <div className="row d-none">
                                    <div className="col-6">
                                                        <span className="range-slider-value value-low"
                                                              data-range-value-low="200"
                                                              id="input-slider-range-value-low"></span>
                                    </div>
                                    <div className="col-6 text-right">
                                                        <span className="range-slider-value value-high"
                                                              data-range-value-high="400"
                                                              id="input-slider-range-value-high"></span>
                                    </div>
                                </div>
                                <span className="font-xs text-gray">*Prices are in USD</span>
                            </div>
                        </div>
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



                    <button className="btn btn-sm btn-block btn-primary animate-up-2 mt-4"
                            type="submit">Apply filters
                    </button>
                </form>
            </div>
        </aside>
    );
}

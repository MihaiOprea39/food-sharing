import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './breadcrumbs.scss';

export default function FoodShareBreadcrumbs({children}) {
    return (
        <div className="foodshare-breadcrumbs-wrapper">
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                {children}
            </Breadcrumbs>
        </div>
    );
}

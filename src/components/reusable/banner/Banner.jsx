import React from 'react';
import FoodShareBreadcrumbs from "../breadcrumbs/Breadcrumbs";
import './banner.scss';

export default function Banner({children, title, subtitle, cover}) {
    return (
        <div className="foodshare-banner-wrapper section section-header bg-primary overlay-dark text-white" style={{backgroundImage: `url(${cover})`}}>
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-12">
                        <FoodShareBreadcrumbs>
                            {children}
                        </FoodShareBreadcrumbs>
                        {title &&
                        <h1 className="display-2">
                            <span className="font-weight-light">{title}</span>
                        </h1>
                        }
                        {subtitle &&
                        <p className="lead text-muted mt-4">
                            {subtitle}
                        </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';


export default function Banner() {
    return (
        <div className="section section-header bg-primary overlay-dark text-white" data-background="../../assets/img/hero.jpg">
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-transparent">
                                <li className="breadcrumb-item"><a href="../../index.html">Home</a></li>
                                <li className="breadcrumb-item active">United States</li>
                            </ol>
                        </nav>
                        <h1 className="display-2">
                            Spaces in <span className="font-weight-light">United States</span>
                        </h1>
                        <p className="lead text-muted mt-4">
                            12,000+ coworking spaces with desks, offices & meeting rooms in 165+ countries. <br/>Discover
                            and reserve space today.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
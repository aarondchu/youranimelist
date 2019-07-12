import * as React from "react";
import { Link } from "react-router-dom"
export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout-wrapper layout-1 layout-without-sidenav">
                <div className="layout-inner">
                    <nav className="layout-navbar navbar navbar-expand-lg align-items-lg-center container-p-x bg-navbar-theme" id="layout-navbar">

                        <a href="index.html" className="navbar-brand app-brand demo d-lg-none py-0 mr-4">
                            <span className="app-brand-logo demo bg-primary">
                            </span>
                            <span className="app-brand-text demo font-weight-normal ml-2">Appwork</span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse collapse" id="layout-navbar-collapse">
                            <hr className="d-lg-none w-100 my-2" />

                            <div className="navbar-nav align-items-lg-center">

                                <div className="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>

                                <div className="demo-navbar-user nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                        <span className="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                                            <img src="/products/appwork/v110/assets_/img/avatars/1.png" alt="" className="d-block ui-w-30 rounded-circle" />
                                            <span className="px-1 mr-lg-2 ml-2 ml-lg-0">Mike Greene</span>
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="javascript:void(0)" className="dropdown-item">
                                            <i className="ion ion-ios-person text-lightest"></i> &nbsp; My profile</a>
                                        <a href="javascript:void(0)" className="dropdown-item">
                                            <i className="ion ion-ios-mail text-lightest"></i> &nbsp; Messages</a>
                                        <a href="javascript:void(0)" className="dropdown-item">
                                            <i className="ion ion-md-settings text-lightest"></i> &nbsp; Account settings</a>
                                        <div className="dropdown-divider"></div>
                                        <a href="javascript:void(0)" className="dropdown-item">
                                            <i className="ion ion-ios-log-out text-danger"></i> &nbsp; Log Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="layout-container">
                        <div className="layout-content">
                            {/* <div id="layout-sidenav" className="layout-sidenav-horizontal sidenav sidenav-horizontal flex-grow-0 container-p-x bg-dark" style={{ position: "fixed", height: "4rem" }}>
                                <div className="sidenav-horizontal-wrapper">
                                    <ul className="sidenav-inner" style={{ marginLeft: "0px" }}>
                                        <li className="sidenav-item">
                                            <Link to="/home" className="sidenav-link">
                                                <h2>YourAnimeList</h2>
                                            </Link>
                                        </li>
                                        <li className="sidenav-item">
											<a href="javascript:void(0)" type="button" data-toggle="dropdown" className="sidenav-link sidenav-toggle dropdown-toggle">
												noraa<span className="caret"></span>
											</a>
											<ul className="sidenav-menu dropdown-menu">
												<li className="sidenav-item">
													<Link to="#" className="list-group-item list-group-item-danger">
														Change Username
													</Link>
												</li>
												<li className="sidenav-item">
													<Link to="#" className="list-group-item list-group-item-danger">
														Delete Account
													</Link>
												</li>
											</ul>
											<div className="dropdown">
												<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span className="caret"></span></button>
												<ul className="dropdown-menu">
													<li><a href="#">HTML</a></li>
													<li><a href="#">CSS</a></li>
													<li><a href="#">JavaScript</a></li>
												</ul>
											</div>
										</li>
                                    </ul>
                                </div>
                            </div>*/}
                            <div className="bg-dark card anime-card" style={{ position: "fixed", right: "0", height: "100%", width: "20rem", zIndex: "1", overflowX: "hidden", top: "0", paddingTop: "4rem" }}>
                                <div className="card-header">
                                    <h5>Anime News</h5>
                                </div>
                                <ul id="news" style={{ listStyle: "none" }} className="list-group list-group-flush">
                                </ul>
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-sidenav-toggle"></div>
            </div >
        )
    }
}
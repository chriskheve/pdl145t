import React, { Component } from 'react';
import { connect } from 'react-redux';
import MetisMenu from 'react-metismenu';
import { Switch, Route, NavLink } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import DefaultLink from './DefaultLink';
import  drc from '../../assets/images/flags/democratic-republic-of-congo.png'


import {
	darkModeAction, darkHeaderAction, fixNavbarAction,
	darkMinSidebarAction, darkSidebarAction, iconColorAction,
	gradientColorAction, rtlAction, fontAction,
	subMenuIconAction,
	menuIconAction,
	boxLayoutAction,
	statisticsAction, friendListAction,
	statisticsCloseAction, friendListCloseAction, toggleLeftMenuAction
} from '../../actions/settingsAction';

import {
	toggleProvinceSidebar
} from '../../actions/sidebarAction';
import Routes from '../Route';


const masterNone = {
	display: 'none',
};

const masterBlock = {
	display: 'block',
};

class Menu extends Component {
	constructor(props) {
		super(props);
		this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
		this.toggleUserMenu = this.toggleUserMenu.bind(this);
		this.toggleRightSidebar = this.toggleRightSidebar.bind(this);
		this.toggleSubMenu = this.toggleSubMenu.bind(this);
		this.handleDarkMode = this.handleDarkMode.bind(this);
		this.handleFixNavbar = this.handleFixNavbar.bind(this);
		this.handleDarkHeader = this.handleDarkHeader.bind(this);
		this.handleMinSidebar = this.handleMinSidebar.bind(this);
		this.handleSidebar = this.handleSidebar.bind(this);
		this.handleIconColor = this.handleIconColor.bind(this);
		this.handleGradientColor = this.handleGradientColor.bind(this);
		this.handleRtl = this.handleRtl.bind(this);
		this.handleFont = this.handleFont.bind(this);
		this.handleStatistics = this.handleStatistics.bind(this);
		this.handleFriendList = this.handleFriendList.bind(this);
		this.closeFriendList = this.closeFriendList.bind(this);
		this.closeStatistics = this.closeStatistics.bind(this);
		this.handleBoxLayout = this.handleBoxLayout.bind(this);
		this.handler = this.handler.bind(this);
		this.state = {
			isToggleLeftMenu: false,
			isOpenUserMenu: false,
			isOpenRightSidebar: false,
			isBoxLayout: false,
			parentlink: null,
			childlink: null,
		};
	}

	componentDidMount() {
		const { location } = this.props;
		const links = location.pathname.substring(1).split(/-(.+)/);
		const parentlink = links[0];
		const nochildlink = links[1];

		if (parentlink && nochildlink && nochildlink === 'dashboard') {
			this.handler(parentlink, `${parentlink}${nochildlink}`);
		} else if (parentlink && nochildlink && nochildlink !== 'dashboard') {
			this.handler(parentlink, nochildlink);
		} else if (parentlink) {
			this.handler(parentlink, '');
		} else {
			this.handler('hr', 'dashboard');
		}
	}

	componentDidUpdate(prevprops, prevstate) {
		const { location } = this.props;
		const links = location.pathname.substring(1).split(/-(.+)/);
		const parentlink = links[0];
		const nochildlink = links[1];
		if (prevprops.location !== location) {
			if (parentlink && nochildlink && nochildlink === 'dashboard') {
				this.handler(parentlink, `${parentlink}${nochildlink}`);
			} else if (parentlink && nochildlink && nochildlink !== 'dashboard') {
				this.handler(parentlink, nochildlink);
			} else if (parentlink) {
				this.handler(parentlink, '');
			} else {
				this.handler('hr', 'dashboard');
			}
		}
	}

	
	toggleProvinceSidebar(param) {
		this.props.toggleProvinceSidebar(param)
	}

	handler(parentlink, nochildlink) {
		this.setState({
			parentlink: parentlink,
			childlink: nochildlink,
		});
	}
	

	handleDarkMode(e) {
		this.props.darkModeAction(e.target.checked)
	}
	handleFixNavbar(e) {
		this.props.fixNavbarAction(e.target.checked)
	}
	handleDarkHeader(e) {
		this.props.darkHeaderAction(e.target.checked)
	}
	handleMinSidebar(e) {
		this.props.darkMinSidebarAction(e.target.checked)
	}
	handleSidebar(e) {
		this.props.darkSidebarAction(e.target.checked)
	}
	handleIconColor(e) {
		this.props.iconColorAction(e.target.checked)
	}
	handleGradientColor(e) {
		this.props.gradientColorAction(e.target.checked)
	}
	handleRtl(e) {
		this.props.rtlAction(e.target.checked)
	}
	handleFont(e) {
		this.props.fontAction(e)
	}
	handleFriendList(e) {
		this.props.friendListAction(e)
	}
	handleStatistics(e) {
		this.props.statisticsAction(e)
	}
	closeFriendList(e) {
		this.props.friendListCloseAction(e)
	}
	closeStatistics(e) {
		this.props.statisticsCloseAction(e)
	}
	handleSubMenuIcon(e) {
		this.props.subMenuIconAction(e)
	}
	handleMenuIcon(e) {
		this.props.menuIconAction(e)
	}
	handleBoxLayout(e) {
		this.props.boxLayoutAction(e.target.checked)
	}
	toggleLeftMenu(e) {
		console.log(e, 'asdasdada')
		this.props.toggleLeftMenuAction(e)
	}
	toggleRightSidebar() {
		this.setState({ isOpenRightSidebar: !this.state.isOpenRightSidebar })
	}
	toggleUserMenu() {
		this.setState({ isOpenUserMenu: !this.state.isOpenUserMenu })
	}
	toggleSubMenu(e) {
		let menucClass = ''
		if (e.itemId) {
			const subClass = e.items.map((menuItem, i) => {
				if (menuItem.to === this.props.location.pathname) {
					menucClass = "in";
				} else {
					menucClass = "collapse";
				}
				return menucClass
			})
			return subClass
			// return "collapse";
		} else {
			return e.visible ? "collapse" : "metismenu";
		}
	}

	render() {
		const content = [
			// {
			// 	"id": 'Directories',
			// 	"label": "Directories"
			// },
			{
				"id": 1,
				"icon": "",
				"label": "PDL145T",
				"to": "/",
				// content: [
					// {
					// 	"id": 3,
					// 	"label": "Accueil",
					// 	"to": "/"
					// },
					// {
					// 	"id": 4,
					// 	"label": "Utilisateurs",
					// 	"to": "/hr-users"
					// },
					// {
					// 	"id": 5,
					// 	"label": "Centre partenaire ",
					// 	"to": "/hr-partnaire"
					// },
					// {
					// 	"id": 6,
					// 	"label": "Employee",
					// 	"to": "/hr-assure"
					// },
					// {
					// 	"id": 7,
					// 	"label": "Activities",
					// 	"to": "/hr-activities"
					// },
					// {
					// 	"id": 8,
					// 	"label": "Holidays",
					// 	"to": "/hr-holidays"
					// },
					// {
					// 	"id": 9,
					// 	"label": "Events",
					// 	"to": "/hr-events"
					// },
					// {
					// 	"id": 10,
					// 	"label": "Payroll",
					// 	"to": "/hr-payroll"
					// },
					// {
					// 	"id": 11,
					// 	"label": "Accounts",
					// 	"to": "/hr-accounts"
					// },
					// {
					// 	"id": 12,
					// 	"label": "Report",
					// 	"to": "/hr-report"
					// }
				// ]
			},
			
			{
				"id": 2,
				"icon": "fa fa-folder",
				"label": "Kasai-Central",
				content: [
					{
						"id": 3,
						"label": "Dibaya",
						"to": "/territoire-dibaya"
					},
					{
						"id": 4,
						"label": "Demba",
						"to": "/territoire-demba"
					},
					{
						"id": 5,
						"label": "Kazumba",
						"to": "/territoire-kazumba"
					},
					{
						"id": 6,
						"label": "Luiza",
						"to": "/territoire-luiza"
					},
					{
						"id": 7,
						"label": "Dimbelenge",
						"to": "/territoire-dimbelenge"
					},
				]
			},
			
			{
				"id": 10,
				"icon": "fa fa-folder",
				"label": "Kasai",
				content: [
					{
						"id": 11,
						"label": "Luebo",
						"to": "/territoire-luebo"
					},
					{
						"id": 12,
						"label": "Tshikapa",
						"to": "/territoire-tshikapa	"
					},
					{
						"id": 13,
						"label": "Ilebo",
						"to": "/territoire-ilebo"
					},
					{
						"id": 14,
						"label": "Mweka",
						"to": "/territoire-mweka"
					},
					{
						"id": 15,
						"label": "Dekese",
						"to": "/territoire-dekese"
					},
				]
			},
			
			{
				"id": 20,
				"icon": "fa fa-folder",
				"label": "Kasai-oriental",
				content: [
					{
						"id": 21,
						"label": "Miabi",
						"to": "/territoire-miabi"
					},
					{
						"id": 22,
						"label": "Kabeya-Kamwanga",
						"to": "/territoire-kabeya-kamwanga"
					},
					{
						"id": 23,
						"label": "Lupatapata",
						"to": "/territoire-lupatapata"
					},
					{
						"id": 24,
						"label": "Katanda",
						"to": "/territoire-katanda"
					},
					{
						"id": 25,
						"label": "Tshilenge",
						"to": "/territoire-tshilenge"
					},
				]
			},
			
			{
				"id": 30,
				"icon": "fa fa-folder",
				"label": "Lomami",
				content: [
					{
						"id": 31,
						"label": "Luilu",
						"to": "/territoire-luilu"
					},
					{
						"id": 32,
						"label": "Kamiji",
						"to": "/territoire-kamiji"
					},
					{
						"id": 33,
						"label": "Ngandajika",
						"to": "/territoire-ngandajika"
					},
					{
						"id": 34,
						"label": "Kabinda",
						"to": "/territoire-kabinda"
					},
					{
						"id": 35,
						"label": "Lubao",
						"to": "/territoire-lubao"
					},
					{
						"id": 36,
						"label": "Mwene-Ditu",
						"to": "/territoire-mwene-ditu"
					},
				]
			},
			
			{
				"id": 40,
				"icon": "fa fa-folder",
				"label": "Nord-Kivu",
				content: [
					{
						"id": 41,
						"label": "Nyiragongo",
						"to": "/territoire-nyiragongo"
					},
					{
						"id": 42,
						"label": "Beni",
						"to": "/territoire-beni"
					},
					{
						"id": 43,
						"label": "Lubero",
						"to": "/territoire-lubero"
					},
					{
						"id": 44,
						"label": "Masisi",
						"to": "/territoire-masisi"
					},
					{
						"id": 45,
						"label": "Rutshuru",
						"to": "/territoire-rutshuru"
					},
					{
						"id": 46,
						"label": "Walikale",
						"to": "/territoire-walikale"
					},
				]
			},
			
			{
				"id": 50,
				"icon": "fa fa-folder",
				"label": "Ituri",
				content: [
					{
						"id": 51,
						"label": "Irumu",
						"to": "/territoire-irumu"
					},
					{
						"id": 52,
						"label": "Mambasa",
						"to": "/territoire-mambasa"
					},
					{
						"id": 53,
						"label": "Djugu",
						"to": "/territoire-djugu"
					},
					{
						"id": 54,
						"label": "Mahagi",
						"to": "/territoire-mahagi"
					},
					{
						"id": 55,
						"label": "Aru",
						"to": "/territoire-Aru"
					},
				]
			},
			
			{
				"id": 60,
				"icon": "fa fa-folder",
				"label": "Sud-Kivu",
				content: [
					{
						"id": 61,
						"label": "Fizi",
						"to": "/territoire-fizi"
					},
					{
						"id": 62,
						"label": "Kabare",
						"to": "/territoire-kabare"
					},
					{
						"id": 63,
						"label": "Kelehe",
						"to": "/territoire-kelehe"
					},
					{
						"id": 64,
						"label": "Mwenga",
						"to": "/territoire-mwenga"
					},
					{
						"id": 65,
						"label": "Shabunda",
						"to": "/territoire-Shabunda"
					},
					{
						"id": 66,
						"label": "Uvira",
						"to": "/territoire-uvira"
					},
					{
						"id": 67,
						"label": "Walungu",
						"to": "/territoire-walungu"
					},
				]
			},
			// Kk
			{
				"id": 70,
				"icon": "fa fa-folder",
				"label": "Haut-Lomami",
				content: [
					{
						"id": 71,
						"label": "Kamina",
						"to": "/territoire-kamina"
					},
					{
						"id": 72,
						"label": "Kaniama",
						"to": "/territoire-kaniama"
					},
					{
						"id": 73,
						"label": "Kabongo",
						"to": "/territoire-kabongo"
					},
					{
						"id": 74,
						"label": "Malemba-Nkulu",
						"to": "/territoire-malemba-Nkulu"
					},
					{
						"id": 75,
						"label": "Bukama",
						"to": "/territoire-Bukama"
					},
				]
			},
			{
				"id": 80,
				"icon": "fa fa-folder",
				"label": "Lualaba",
				content: [
					{
						"id": 81,
						"label": "Mutshatsha",
						"to": "/territoire-mutshatsha"
					},
					{
						"id": 82,
						"label": "Lubudi",
						"to": "/territoire-lubudi"
					},
					{
						"id": 83,
						"label": "Dilolo",
						"to": "/territoire-dilolo"
					},
					{
						"id": 84,
						"label": "Sandoa",
						"to": "/territoire-sandoa"
					},
					{
						"id": 85,
						"label": "Kapanga",
						"to": "/territoire-kapanga"
					},
				]
			},

			// Haut-Kkatanga
			{
				"id": 90,
				"icon": "fa fa-folder",
				"label": "Haut-Katanga",
				content: [
					{
						"id": 91,
						"label": "Kipushi",
						"to": "/territoire-kipushi"
					},
					{
						"id": 92,
						"label": "Sakania",
						"to": "/territoire-sakania"
					},
					{
						"id": 93,
						"label": "Kasenga",
						"to": "/territoire-kasenga"
					},
					{
						"id": 94,
						"label": "Mitwaba",
						"to": "/territoire-mitwaba"
					},
					{
						"id": 95,
						"label": "Pweto",
						"to": "/territoire-Pweto"
					},
					{
						"id": 96,
						"label": "Kambove",
						"to": "/territoire-kambove"
					},
				]
			},
			
		];
		const { isOpenRightSidebar, isOpenUserMenu } = this.state
		const { darkMinSidebar, istoggleLeftMenu, friendListOpen, statisticsOpen, statisticsClose, friendListClose, isOpen, provinceDataState  } = this.props
		const pageHeading = Routes.filter((route) => route.path === this.props.location.pathname)
		
		return (
			<>
				<div className={`${istoggleLeftMenu ? "offcanvas-active" : ""}`}>
					<div style={this.state.parentlink === 'login' ? masterNone : masterBlock}>
						<div id="header_top" className={`header_top ${darkMinSidebar && 'dark'}`}>
							<div className="container">
								<div className="hleft">
									<NavLink
										to="/"
										onClick={() => this.handler('hr', 'accueil')}
										className="header-brand"
									>
										{/* <i className="fe fe-command brand-logo" /> */}
										<img src={drc} style={{width: "35px" }} alt="drc" /> 
									</NavLink> 
									{/* <div className="dropdown">
										<NavLink to="/page-search" className="nav-link icon">
											<i className="fa fa-search" />
										</NavLink>
										<NavLink to="/app-calendar" className="nav-link icon app_inbox">
											<i className="fa fa-calendar" />
										</NavLink>
										<NavLink to="/app-contact" className="nav-link icon xs-hide">
											<i className="fa fa-id-card-o" />
										</NavLink>
										<NavLink to="/app-chat" className="nav-link icon xs-hide">
											<i className="fa fa-comments-o" />
										</NavLink>
										<NavLink to="/app-filemanager" className="nav-link icon app_file xs-hide">
											<i className="fa fa-folder-o" />
										</NavLink>
									</div> */}
								</div>
								<div className="hright">
									<div className="dropdown">
										{/* <a href="#!" class="nav-link icon theme_btn">
										<i
											class="fa fa-paint-brush"
											data-toggle="tooltip"
											data-placement="right"
											title="Themes"
										></i>
									</a> */}
										{/* <span className="nav-link icon settingbar" onClick={this.toggleRightSidebar}>
											<i
												className="fa fa-gear fa-spin"
												data-toggle="tooltip"
												data-placement="right"
												title="Settings"
											/>
										</span> */}
										{/* <p className="nav-link user_btn" onClick={this.toggleUserMenu}>
											<img
												className="avatar"
												src="/assets/images/user.png"
												alt="fake_alr"
												data-toggle="tooltip"
												data-placement="right"
												title="User Menu"
											/>
										</p> */}
										<p className="nav-link icon menu_toggle" onClick={() => this.toggleLeftMenu(!istoggleLeftMenu)}>
											<i className="fa  fa-align-left" />
										</p>
									</div>
								</div>
							</div>
						</div>
						<div id="rightsidebar" className={`right_sidebar ${isOpenRightSidebar && "open"}`}>
							<span className="p-3 settingbar float-right" onClick={this.toggleRightSidebar}>
								<i className="fa fa-close" />
							</span>
							<ul className="nav nav-tabs" role="tablist">
								{/* <li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#Settings" aria-expanded="true">
										Settings
								</a>
								</li> */}
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#activity" aria-expanded="false">
										Activity
								</a>
								</li>
							</ul>
							<div className="tab-content">
								<div
									role="tabpanel"
									className="tab-pane vivify fadeIn active"
									id="Settings"
									aria-expanded="true"
								>
									<div className="mb-4">
										<h6 className="font-14 font-weight-bold text-muted">Font Style</h6>
										<div className="custom-controls-stacked font_setting">
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="font"
													defaultChecked
													defaultValue="font-opensans"
													onChange={() => this.handleFont('font-opensans')}
												/>
												<span className="custom-control-label">Open Sans Font</span>
											</label>
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="font"
													defaultValue="font-montserrat"
													onChange={() => this.handleFont('font-montserrat')}
												/>
												<span className="custom-control-label">Montserrat Google Font</span>
											</label>
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="font"
													onChange={() => this.handleFont('font-roboto')}
												/>
												<span className="custom-control-label">Robot Google Font</span>
											</label>
										</div>
									</div>
									<div className="mb-4">
										<h6 className="font-14 font-weight-bold text-muted">Selected Menu Icon</h6>
										<div className="custom-controls-stacked arrow_option">
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="marrow"
													defaultValue="arrow-a"
													onChange={() => this.handleMenuIcon('list-a')}
												/>
												<span className="custom-control-label">A</span>
											</label>
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="marrow"
													defaultValue="arrow-b"
													onChange={() => this.handleMenuIcon('list-b')}
												/>
												<span className="custom-control-label">B</span>
											</label>
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="marrow"
													defaultValue="arrow-c"
													defaultChecked
													onChange={() => this.handleMenuIcon('list-c')}
												/>
												<span className="custom-control-label">C</span>
											</label>
										</div>

										<h6 className="font-14 font-weight-bold mt-4 text-muted">SubMenu List Icon</h6>
										<div className="custom-controls-stacked list_option">
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="listicon"
													defaultValue="list-a"
													defaultChecked
													onChange={() => this.handleSubMenuIcon('list-a')}
												/>
												<span className="custom-control-label">A</span>
											</label>
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="listicon"
													defaultValue="list-b"
													onChange={() => this.handleSubMenuIcon('list-b')}
												/>
												<span className="custom-control-label">B</span>
											</label>
											<label className="custom-control custom-radio custom-control-inline">
												<input
													type="radio"
													className="custom-control-input"
													name="listicon"
													defaultValue="list-c"
													onChange={() => this.handleSubMenuIcon('list-c')}
												/>
												<span className="custom-control-label">C</span>
											</label>
										</div>
									</div>
									<div>
										<h6 className="font-14 font-weight-bold mt-4 text-muted">General Settings</h6>
										<ul className="setting-list list-unstyled mt-1 setting_switch">
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Night Mode</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-darkmode"
														onChange={(e) => this.handleDarkMode(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Fix Navbar top</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-fixnavbar"
														onChange={(e) => this.handleFixNavbar(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Header Dark</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-pageheader"
														onChange={(e) => this.handleDarkHeader(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Min Sidebar Dark</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-min_sidebar"
														onChange={(e) => this.handleMinSidebar(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Sidebar Dark</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-sidebar"
														onChange={(e) => this.handleSidebar(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Icon Color</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-iconcolor"
														onChange={(e) => this.handleIconColor(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Gradient Color</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-gradient"
														onChange={(e) => this.handleGradientColor(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>

											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">RTL Support</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-rtl"
														onChange={(e) => this.handleRtl(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>

										</ul>
									</div>
									<hr />
									<div className="form-group">
										<label className="d-block">
											Storage <span className="float-right">77%</span>
										</label>
										<div className="progress progress-sm">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow={77}
												aria-valuemin={0}
												aria-valuemax={100}
												style={{ width: '77%' }}
											/>
										</div>
										<button type="button" className="btn btn-primary btn-block mt-3">
											Upgrade Storage
									</button>
									</div>
								</div>
								<div role="tabpanel" className="tab-pane vivify fadeIn" id="activity" aria-expanded="false">
									<ul className="new_timeline mt-3">
										<li>
											<div className="bullet pink" />
											<div className="time">11:00am</div>
											<div className="desc">
												<h3>Attendance</h3>
												<h4>Computer Class</h4>
											</div>
										</li>
										<li>
											<div className="bullet pink" />
											<div className="time">11:30am</div>
											<div className="desc">
												<h3>Added an interest</h3>
												<h4>“Volunteer Activities”</h4>
											</div>
										</li>
										<li>
											<div className="bullet green" />
											<div className="time">12:00pm</div>
											<div className="desc">
												<h3>Developer Team</h3>
												<h4>Hangouts</h4>
												<ul className="list-unstyled team-info margin-0 p-t-5">
													<li>
														<img src="/assets/images/xs/avatar1.jpg" alt="Avatar" />
													</li>
													<li>
														<img src="/assets/images/xs/avatar2.jpg" alt="Avatar" />
													</li>
													<li>
														<img src="/assets/images/xs/avatar3.jpg" alt="Avatar" />
													</li>
													<li>
														<img src="/assets/images/xs/avatar4.jpg" alt="Avatar" />
													</li>
												</ul>
											</div>
										</li>
										<li>
											<div className="bullet green" />
											<div className="time">2:00pm</div>
											<div className="desc">
												<h3>Responded to need</h3>
												<a href="#!">“In-Kind Opportunity”</a>
											</div>
										</li>
										<li>
											<div className="bullet orange" />
											<div className="time">1:30pm</div>
											<div className="desc">
												<h3>Lunch Break</h3>
											</div>
										</li>
										<li>
											<div className="bullet green" />
											<div className="time">2:38pm</div>
											<div className="desc">
												<h3>Finish</h3>
												<h4>Go to Home</h4>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="theme_div">
							<div className="card">
								<div className="card-body">
									<ul className="list-group list-unstyled">
										<li className="list-group-item mb-2">
											<p>Default Theme</p>
											<a href="../main/index.html">
												<img
													src="/assets/images/themes/default.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Night Mode Theme</p>
											<a href="../dark/index.html">
												<img
													src="/assets/images/themes/dark.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>RTL Version</p>
											<a href="../rtl/index.html">
												<img
													src="/assets/images/themes/rtl.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Theme Version2</p>
											<a href="../theme2/index.html">
												<img
													src="/assets/images/themes/theme2.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Theme Version3</p>
											<a href="../theme3/index.html">
												<img
													src="/assets/images/themes/theme3.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Theme Version4</p>
											<a href="../theme4/index.html">
												<img
													src="/assets/images/themes/theme4.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Horizontal Version</p>
											<a href="../horizontal/index.html">
												<img
													src="/assets/images/themes/horizontal.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={`right_sidebar ${isOpen && 'open'}`}>
							<h5 className="brand-name mb-4">
								
							<p className="user_btn" onClick={()=>{this.toggleProvinceSidebar(false)}}>
									<i className="icon-login" />
								</p>
							</h5>
							<div className="card">
								<div className="card-body">
									<div className="media">
										<img
											className="avatar avatar-xl mr-3"
											src="/assets/images/user.png"
											alt="avatar"
										/>
										<div className="media-body">
											<h5 className="m-0">
												{provinceDataState && provinceDataState.nom}
											</h5>
											<p className="text-muted mb-0">{provinceDataState && provinceDataState.chef_lieu}</p>
											<ul className="social-links list-inline mb-0 mt-2">
												<li className="list-inline-item">
													<a
														href="#!"
														title="fake_title"
														data-toggle="tooltip"
														data-original-title="Facebook"
													>
														<i className="fa fa-facebook" />
													</a>
												</li>
												<li className="list-inline-item">
													<a
														href="#!"
														title="fake_title"
														data-toggle="tooltip"
														data-original-title="Twitter"
													>
														<i className="fa fa-twitter" />
													</a>
												</li>
												<li className="list-inline-item">
													<a
														href="#!"
														title="fake_title"
														data-toggle="tooltip"
														data-original-title={1234567890}
													>
														<i className="fa fa-phone" />
													</a>
												</li>
												<li className="list-inline-item">
													<a
														href="#!"
														title="fake_title"
														data-toggle="tooltip"
														data-original-title="@skypename"
													>
														<i className="fa fa-skype" />
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{statisticsClose ?
								<div className={`card ${statisticsOpen ? 'card-collapsed' : ""}`}>
									< div className="card-header">
										<h3 className="card-title">Statistiques</h3>
										<div className="card-options">
											<span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleStatistics(!statisticsOpen)}>
												<i className="fe fe-chevron-up" />
											</span>
											<span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeStatistics(false)}>
												<i className="fe fe-x" />
											</span>
										</div>
									</div>
									<div className="card-body">
										<div className="text-center">
											<div className="row">
												<div className="col-6 pb-3">
													<label className="mb-0">Ouvrages</label>
													<h4 className="font-30 font-weight-bold">$545</h4>
												</div>
												<div className="col-6 pb-3">
													<label className="mb-0">Pourcentage</label>
													<h4 className="font-30 font-weight-bold">27%</h4>
												</div>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Total Income<span className="float-right">77%</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-blue"
													role="progressbar"
													aria-valuenow={77}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '77%' }}
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Total Expenses <span className="float-right">50%</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-danger"
													role="progressbar"
													aria-valuenow={50}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '50%' }}
												/>
											</div>
										</div>
										<div className="form-group mb-0">
											<label className="d-block">
												Gross Profit <span className="float-right">23%</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-green"
													role="progressbar"
													aria-valuenow={23}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '23%' }}
												/>
											</div>
										</div>
									</div>
								</div> : ""}
							{friendListClose ?
								<div className={`card ${friendListOpen ? 'card-collapsed' : ""}`}>
									<div className="card-header">
										<h3 className="card-title">Friends</h3>
										<div className="card-options">
											<span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleFriendList(!friendListOpen)}>
												<i className="fe fe-chevron-up" />
											</span>
											<span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeFriendList(false)}>
												<i className="fe fe-x" />
											</span>
										</div>
									</div>
									<div className="card-body">
										<ul className="right_chat list-unstyled">
											<li className="online">
												<a href="#!">
													<div className="media">
														<img className="media-object " src="../assets/images/xs/avatar4.jpg" alt="fake_alr" />
														<div className="media-body">
															<span className="name">Donald Gardner</span>
															<span className="message">Designer, Blogger</span>
															<span className="badge badge-outline status" />
														</div>
													</div>
												</a>
											</li>
											<li className="online">
												<a href="#!">
													<div className="media">
														<img
															className="media-object "
															src="/assets/images/xs/avatar5.jpg"
															alt="fake_alr"
														/>
														<div className="media-body">
															<span className="name">Wendy Keen</span>
															<span className="message">Java Developer</span>
															<span className="badge badge-outline status" />
														</div>
													</div>
												</a>
											</li>
											<li className="offline">
												<a href="#!">
													<div className="media">
														<img
															className="media-object "
															src="/assets/images/xs/avatar2.jpg"
															alt="fake_alr"
														/>
														<div className="media-body">
															<span className="name">Matt Rosales</span>
															<span className="message">CEO, Epic Theme</span>
															<span className="badge badge-outline status" />
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								: ""}
							<div className="card b-none">
								<ul className="list-group">
									<li className="list-group-item d-flex">
										<div className="box-icon sm rounded bg-blue">
											<i className="fa fa-credit-card" />{' '}
										</div>
										<div className="ml-3">
											<div>+$29 New sale</div>
											<a href="#!">Admin Template</a>
											<div className="text-muted font-12">5 min ago</div>
										</div>
									</li>
									<li className="list-group-item d-flex">
										<div className="box-icon sm rounded bg-pink">
											<i className="fa fa-upload" />{' '}
										</div>
										<div className="ml-3">
											<div>Project Update</div>
											<a href="#!">New HTML page</a>
											<div className="text-muted font-12">10 min ago</div>
										</div>
									</li>
									<li className="list-group-item d-flex">
										<div className="box-icon sm rounded bg-teal">
											<i className="fa fa-file-word-o" />{' '}
										</div>
										<div className="ml-3">
											<div>You edited the file</div>
											<a href="#!">reposrt.doc</a>
											<div className="text-muted font-12">11 min ago</div>
										</div>
									</li>
									<li className="list-group-item d-flex">
										<div className="box-icon sm rounded bg-cyan">
											<i className="fa fa-user" />{' '}
										</div>
										<div className="ml-3">
											<div>New user</div>
											<a href="#!">Puffin web - view</a>
											<div className="text-muted font-12">17 min ago</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div id="left-sidebar" className="sidebar ">
							<h5 className="brand-name">BCECO</h5>
							<nav id="left-sidebar-nav" className="sidebar-nav">
								<MetisMenu className=""
									content={content}
									noBuiltInClassNames={true}
									classNameContainer={(e) => this.toggleSubMenu(e)}
									classNameContainerVisible="in"
									classNameItemActive="active"
									classNameLinkActive="active"
									// classNameItemHasActiveChild="active"
									classNameItemHasVisibleChild="active"
									classNameLink="has-arrow arrow-c"
									// classNameIcon
									// classNameStateIcon

									iconNamePrefix=""
									// iconNameStateHidden=""
									LinkComponent={(e) => <DefaultLink itemProps={e} />}
								// toggleSubMenu={this.toggleSubMenu}
								/>

							</nav>
						</div>
					</div>

					<div className="page">
						<Header dataFromParent={this.props.dataFromParent} dataFromSubParent={pageHeading[0].pageTitle} />
						<Switch>
							{Routes.map((layout, i) => {
								return <Route key={i} exact={layout.exact} path={layout.path} component={layout.component}></Route>
							})}
							{/* <Dashboard action={this.handler} dataFromParent={'dark'} /> */}
							{/* <Route exact path="/hr-users" component={Users}>
					</Route>
					<Route exact path="/hr-department">
						<Departments dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-assure">
						<Employee dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-events">
						<Events dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-holidays">
						<Holidays dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-activities">
						<Activities dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-payroll">
						<Payroll dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-accounts">
						<Accounts dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-report">
						<Report dataFromParent={'dark'} />
					</Route>

					<Route exact path="/project-dashboard">
						<ProjectDashboard dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-list">
						<ProjectList dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-taskboard">
						<Taskboard dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-ticket">
						<TicketList dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-ticket-details">
						<TicketDetails dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-clients">
						<Clients dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-todo">
						<TodoList dataFromParent={'dark'} />
					</Route>

					<Route exact path="/jobportal-dashboard">
						<JobPortalDashboard dataFromParent={'dark'} />
					</Route>
					<Route exact path="/jobportal-applicants">
						<Applicants dataFromParent={'dark'} />
					</Route>
					<Route exact path="/jobportal-positions">
						<Positions dataFromParent={'dark'} />
					</Route>
					<Route exact path="/jobportal-resumes">
						<Resumes dataFromParent={'dark'} />
					</Route>
					<Route exact path="/jobportal-settings">
						<Settings dataFromParent={'dark'} />
					</Route>

					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/forgotpassword" component={ForgotPassword} />
					<Route path="/notfound" component={NotFound} />
					<Route path="/internalserver" component={InternalServer} />

					<Route exact path="/icons">
						<Icons dataFromParent={''} />
					</Route>
					<Route exact path="/icons-feather">
						<IconsFeather dataFromParent={''} />
					</Route>
					<Route exact path="/icons-line">
						<IconsLine dataFromParent={''} />
					</Route>
					<Route exact path="/icons-flag">
						<IconsFlags dataFromParent={''} />
					</Route>
					<Route exact path="/icons-payments">
						<IconsPayments dataFromParent={''} />
					</Route>

					<Route exact path="/charts">
						<Charts dataFromParent={''} />
					</Route>
					<Route exact path="/charts-e">
						<ChartsE dataFromParent={''} />
					</Route>
					<Route exact path="/charts-c3">
						<ChartsC3 dataFromParent={''} />
					</Route>
					<Route exact path="/charts-knob">
						<ChartsKnob dataFromParent={''} />
					</Route>
					<Route exact path="/charts-sparkline">
						<ChartsSparkline dataFromParent={''} />
					</Route>

					<Route exact path="/forms">
						<Forms dataFromParent={''} />
					</Route>
					<Route exact path="/form-advanced">
						<FormAdvanced dataFromParent={''} />
					</Route>
					<Route exact path="/form-validation">
						<FormValidation dataFromParent={''} />
					</Route>
					<Route exact path="/form-wizard">
						<FormWizard dataFromParent={''} />
					</Route>
					<Route exact path="/form-summernote">
						<FormSummernote dataFromParent={''} />
					</Route>

					<Route exact path="/gallery">
						<Gallery dataFromParent={'dark'} />
					</Route>
					<Route exact path="/maps">
						<Maps dataFromParent={'dark'} />
					</Route> */}

							{/* <Route exact path="/tables">
						<Tables dataFromParent={''} />
					</Route>
					<Route exact path="/tables-datatable">
						<DataTables dataFromParent={''} />
					</Route>
					<Route exact path="/tables-color">
						<TablesColor dataFromParent={''} />
					</Route>
					<Route exact path="/tables-basic">
						<TablesBasic dataFromParent={''} />
					</Route>

					<Route exact path="/widgets">
						<Widgets dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-card">
						<WCard dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-statistics">
						<WStatistics dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-data">
						<WData dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-social">
						<WSocial dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-other">
						<WOther dataFromParent={'dark'} />
					</Route>

					<Route exact path="/page-search">
						<Search dataFromParent={''} />
					</Route>
					<Route exact path="/profile">
						<Profile dataFromParent={'dark'} />
					</Route>

					<Route exact path="/app-calendar">
						<AppCalender dataFromParent={'dark'} />
					</Route>
					<Route exact path="/app-contact">
						<AppContact dataFromParent={'dark'} />
					</Route>
					<Route exact path="/app-chat">
						<AppChart dataFromParent={'dark'} />
					</Route>
					<Route exact path="/app-filemanager">
						<AppFileManager dataFromParent={'dark'} />
					</Route>
					<Route exact path="/app-setting">
						<AppSetting dataFromParent={'dark'} />
					</Route> */}
						</Switch>
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	darkMinSidebar: state.settings.isMinSidebar,
	statisticsOpen: state.settings.isStatistics,
	friendListOpen: state.settings.isFriendList,
	statisticsClose: state.settings.isStatisticsClose,
	friendListClose: state.settings.isFriendListClose,
	istoggleLeftMenu: state.settings.isToggleLeftMenu,
	isOpen: state.updateSidebarState.isOpen,
	provinceDataState: state.updateProvinceState.provinceDataState 
})

const mapDispatchToProps = dispatch => ({
	darkModeAction: (e) => dispatch(darkModeAction(e)),
	darkHeaderAction: (e) => dispatch(darkHeaderAction(e)),
	fixNavbarAction: (e) => dispatch(fixNavbarAction(e)),
	darkMinSidebarAction: (e) => dispatch(darkMinSidebarAction(e)),
	darkSidebarAction: (e) => dispatch(darkSidebarAction(e)),
	iconColorAction: (e) => dispatch(iconColorAction(e)),
	gradientColorAction: (e) => dispatch(gradientColorAction(e)),
	rtlAction: (e) => dispatch(rtlAction(e)),
	fontAction: (e) => dispatch(fontAction(e)),
	subMenuIconAction: (e) => dispatch(subMenuIconAction(e)),
	menuIconAction: (e) => dispatch(menuIconAction(e)),
	boxLayoutAction: (e) => dispatch(boxLayoutAction(e)),
	statisticsAction: (e) => dispatch(statisticsAction(e)),
	friendListAction: (e) => dispatch(friendListAction(e)),
	statisticsCloseAction: (e) => dispatch(statisticsCloseAction(e)),
	friendListCloseAction: (e) => dispatch(friendListCloseAction(e)),
	toggleLeftMenuAction: (e) => dispatch(toggleLeftMenuAction(e)),
	toggleProvinceSidebar: (e) => dispatch(toggleProvinceSidebar(e)) 
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
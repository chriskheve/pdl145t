import React, { Component } from 'react';
import { connect } from 'react-redux';
import MetisMenu from 'react-metismenu';
import { Switch, Route, NavLink } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import DefaultLink from './DefaultLink';
import  drc from '../../assets/images/flags/democratic-republic-of-congo.png'
import  bcecoBlue from '../../assets/images/bceco-blue.PNG'
// bcecoBlue


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
								</div>
								<div className="hright">
									<div className="dropdown">
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
											src={bcecoBlue}
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
													<h4 className="font-30 font-weight-bold">0</h4>
												</div>
												<div className="col-6 pb-3">
													<label className="mb-0">Pourcentage</label>
													<h4 className="font-30 font-weight-bold">0</h4>
												</div>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Ecole<span className="float-right">0</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-blue"
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '0%' }}
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Energie <span className="float-right">0</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-danger"
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '0%' }}
												/>
											</div>
										</div>
										<div className="form-group mb-0">
											<label className="d-block">
												Forage <span className="float-right">0</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-green"
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '0%' }}
												/>
											</div>
										</div>
										
										<div className="form-group">
											<label className="d-block">
												Centre de santé<span className="float-right">0</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-blue"
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '0%' }}
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Bâtiment administratif<span className="float-right">0</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-blue"
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '0%' }}
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Logement<span className="float-right">0</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-blue"
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '0%' }}
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Marché communautaire<span className="float-right">0</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-blue"
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '0%' }}
												/>
											</div>
										</div>
									</div>
								</div> : ""}
							{/* {friendListClose ?
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
								: ""} */}

							{/* <div className="card b-none">
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
							</div> */}
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
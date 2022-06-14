import React from 'react'
import { connect, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../helpers/auth';
import './Header.css'


const Header = (props) => {
	
	let current = new Date();
	const event = new Date(Date.now());
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	let history = useHistory() 
	const notificationState = useSelector(state=> state.updateNotificationState.notificationState)  
	
	const { fixNavbar, darkHeader } = props;
	

    const handleLogout = e =>{
		e.preventDefault()
        logout(()=>{
            history.push('/signin')
        })
    }
  return (
	<div>
		<div
			id="page_top"
			// className={isFixNavbar ? "sticky-top" : "" + this.props.dataFromParent === 'dark' ? 'section-body top_dark' : 'section-body'}
			className={`section-body ${fixNavbar ? "sticky-top" : ""} ${darkHeader ? "top_dark" : ""}`}
		>
			<div className="container-fluid">
				<div className="page-header text-white">
					<div className="left">
						<h1 className="page-title white-color "  >{props.dataFromSubParent}</h1>
					</div>
					<div className="right">
					<h1 className="page-title white-color "  >{event.toLocaleDateString("Fr-fr", options)} | {current.getHours()}:{current.getMinutes()} </h1>
						<div className="notification d-flex">
							{/* <div className="dropdown d-flex">
								<a
									href="/#"
									className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
									data-toggle="dropdown"
								>
									<i className="fa fa-envelope" />
									<span className="badge badge-success nav-unread" />
								</a>
								<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
									<ul className="right_chat list-unstyled w250 p-0">
										<li className="online">
											<a href="fake_url">
												<div className="media">
													<img
														className="media-object "
														src="../assets/images/xs/avatar4.jpg"
														alt="fake_url"
													/>
													<div className="media-body">
														<span className="name">Donald Gardner</span>
														<span className="message">Designer, Blogger</span>
														<span className="badge badge-outline status" />
													</div>
												</div>
											</a>
										</li>
										<li className="online">
											<a href="fake_url">
												<div className="media">
													<img
														className="media-object "
														src="../assets/images/xs/avatar5.jpg"
														alt="fake_url"
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
											<a href="fake_url">
												<div className="media">
													<img
														className="media-object "
														src="../assets/images/xs/avatar2.jpg"
														alt="fake_url"
													/>
													<div className="media-body">
														<span className="name">Matt Rosales</span>
														<span className="message">CEO, Epic Theme</span>
														<span className="badge badge-outline status" />
													</div>
												</div>
											</a>
										</li>
										<li className="online">
											<a href="fake_url">
												<div className="media">
													<img
														className="media-object "
														src="../assets/images/xs/avatar3.jpg"
														alt="fake_url"
													/>
													<div className="media-body">
														<span className="name">Phillip Smith</span>
														<span className="message">Writter, Mag Editor</span>
														<span className="badge badge-outline status" />
													</div>
												</div>
											</a>
										</li>
									</ul>
									<div className="dropdown-divider" />
									<a

										className="dropdown-item text-center text-muted-dark readall"
									>
										Mark all as read
									</a>
								</div>
							</div> */}
							<div className="dropdown d-flex">
								<a
									href="/#"
									className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
									data-toggle="dropdown"
								>
									<i className="fa fa-bell" />
									{notificationState && <span className="badge badge-success nav-unread" />}
								</a>
								<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
									<ul className="list-unstyled feeds_widget">
										{notificationState ?
											<li>
												<div className="feeds-left">
													<i className="fa fa-user" />
												</div>
												<div className="feeds-body">
													<h4 className="title">
														Nouvel utilisateurs{' '}
														<small className="float-right text-muted">10:45</small>
													</h4>
													<small>Un nouvel utilisateur s'est présenté. </small>
												</div>
											</li>
											:
											<li>
												<div className="feeds-body">
													<h4 className="title">
													Aucune notification{' '}
													</h4>
													{/* <small>Aucune notification. </small> */}
												</div>
											</li>

										}
									</ul>
									<div className="dropdown-divider" />
									{/* <a
										href="fake_url"
										className="dropdown-item text-center text-muted-dark readall"
									>
										Mark all as read
									</a> */}
								</div>
							</div>
							<div className="dropdown d-flex">
								<a
									href="/#"
									className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
									data-toggle="dropdown"
								>
									<i className="fa fa-user" />
								</a>
								<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
									{/* <NavLink to="/profile" className="dropdown-item">
										<i className="dropdown-icon fe fe-user" /> Profile
									</NavLink>
									<a className="dropdown-item" >
										<i className="dropdown-icon fe fe-settings" /> Settings
									</a>
									<a className="dropdown-item">
										<span className="float-right">
											<span className="badge badge-primary">6</span>
										</span>
										<i className="dropdown-icon fe fe-mail" /> Inbox
									</a>
									<a className="dropdown-item" >
										<i className="dropdown-icon fe fe-send" /> Message
									</a>
									<div className="dropdown-divider" />
									<a className="dropdown-item" >
										<i className="dropdown-icon fe fe-help-circle" /> Need help?
									</a> */}
									<a onClick={(e) =>handleLogout(e)} className="dropdown-item">
										<i className="dropdown-icon fe fe-log-out" /> Sign out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar,
	darkHeader: state.settings.isDarkHeader
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
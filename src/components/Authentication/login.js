import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isAuthentificated, setAuthentification } from '../../helpers/auth'
import { showErrorMsg } from '../../helpers/message'
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import { signup } from '../../api/login'



const login = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	let history = useHistory()

	// eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        
        if ( isAuthentificated()) {
            history.push('/')
        }
    }, [history])
	
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = useState({
        telephone: '',
        matricule: '',
        errorMsg: false,
        loading: false,
    })
	
    const {
        telephone, 
        matricule,  
        errorMsg, 
        loading,
    
    } = formData;
	
    /*****************************
     * EVENT HANDLERS
     *****************************/ 
	 const handleChange= evt =>{
        // console.log(evt.target.value);
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value,
            errorMsg:''
        })
    }

	const handleSubmit =e=>{
		e.preventDefault()
		
		// client side validation
		if(isEmpty(telephone) || isEmpty(matricule)){
			setFormData({
				...formData, errorMsg: 'Tous les champs sont requis'
			})
		} else {
            const {  telephone, matricule } = formData
            const data = { telephone, matricule}
			setFormData({...formData, loading: true})

			signup(data)
				.then(response=>{
					console.log(response)
					setAuthentification(response.data.token, response.data.user)

					if (isAuthentificated()) {
						history.push('/')
					}
				})
				.catch(err=>{
					console.log('login api error on : ', err)
                    setFormData({
                        ...formData,
                        loading: false,
                        errorMsg: "Echec, veuillez recommencer"
                    })
				})
		}
	}

	
  return (
		<div className="auth">
			<div className="auth_left">
				<div className="card">
					<div className="text-center mb-2">
						<Link className="header-brand" to="/">
							<i className="fe fe-command brand-logo" />
						</Link>
					</div>
					<div className="card-body">
						<div className="card-title">Se connecter</div>
						{errorMsg && showErrorMsg(errorMsg)}
						{/* <div className="form-group">
							<select className="custom-select">
								<option>HR Dashboard</option>
								<option>Project Dashboard</option>
								<option>Job Portal</option>
							</select>
						</div> */}
						<form onSubmit={handleSubmit} noValidate>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Nom d'utilisateur  "
									name='telephone'
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label className="form-label">
									Mot de passe
									<Link className="float-right small" to="/forgotpassword">
										Mot de passe oublié
									</Link>
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Matricule "
									name='matricule'
									onChange={handleChange}
								/>
							</div>
							{/* <div className="form-group">
								<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<span className="custom-control-label">Remember me</span>
								</label>
							</div> */}
							<div className="form-footer">
								<button className="btn btn-primary btn-block" disabled={loading} type='submit'>
									{loading 
										? 
										<Fragment>
											<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> 
											<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> 
											<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> 
										</Fragment>
										: 
										"Connexion"} 
								</button>
							</div>
						</form>
					</div>
					{/* <div className="text-center text-muted">
						Don't have account yet? <Link to="/signup">Sign Up</Link>
					</div> */}
				</div>
			</div>
			<div className="auth_right">
				<div className="carousel slide" data-ride="carousel" data-interval={3000}>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="assets/images/slider1.svg" className="img-fluid" alt="login page" />
							<div className="px-4 mt-4">
								<h4>Plateforme responsive</h4>
								<p>L'application est compatible à n'importe quel type d'écran.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="assets/images/slider2.svg" className="img-fluid" alt="login page" />
							<div className="px-4 mt-4">
								<h4>statistiques général </h4>
								<p>Offre des données statistiques.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="assets/images/slider3.svg" className="img-fluid" alt="login page" />
							<div className="px-4 mt-4">
								<h4>visibilité territoriale </h4>
								<p>Permet une vision détaillé du territoire Congolais.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
   )
}

export default login
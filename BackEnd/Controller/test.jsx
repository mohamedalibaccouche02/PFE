import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginEmployee.css';
import logoenova from '../assets/logo enova.png';
import { Button, Modal, Result } from 'antd';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [userInfo, setUserInfo] = useState(null); // Add this line
    const navigate = useNavigate();

    const navigateBasedOnRole = (role) => {
        if (role === 'employe') {
            navigate('/employe');
        } else if (role === 'RH') {
            navigate('/RH');
        } else if (role === 'superviseur') {
            navigate('/superviseur');
        } else {
            console.log('Role invalide');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user/login', { email, password });
            if (response.data.status === 'success') {
                console.log("API response:", response);

                localStorage.setItem('userInfo', JSON.stringify(response.data.data));
                setUserInfo(response.data.data); // Set user info in state
                navigateBasedOnRole(response.data.data.role);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Erreur lors de la connexion. Veuillez réessayer.');
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <img src={logoenova} alt="Logo Enova" className="login-logo" />
                <h2>Connexion</h2>
                <div className="form-group">
                    <label className="email" htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label className="password" htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group remember-me">
                    <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                    <h4>Se souvenir de moi</h4>
                </div>
                <button type="submit" className="connexion-btn">Se connecter</button>
                <div className="prob-link">
                    <p>Un problème de connexion ?
                        <span style={{ color: '#7892f3', cursor: 'pointer' }} onClick={showModal}>Cliquez ici</span>
                        <Modal title="Envoyez un Email" open={isModalOpen} onEnvoyer={handleOk} onCancel={handleCancel} okText="Envoyez" cancelText="Annuler">
                            <div>
                                <div>
                                    <div className="AddressMail">
                                        <label className="mail-label">Address Mail</label>
                                        <input type="email" className="place-hold1" placeholder="RH@enova.com" />
                                    </div>
                                    <div className="Objet">
                                        <label className="form-label">Objet</label>
                                        <textarea className="place-hold2" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
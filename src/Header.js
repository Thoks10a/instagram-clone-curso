import react from 'react';

import { useEffect,useState } from 'react';
import { auth, storage } from './firebase.js';


function Header(props) {
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);
    


  useEffect(() => {
    
  },[]);
    function abrirModalCriarConta(e) {
        e.preventDefault();
        let modal = document.querySelector('.modalCriarConta');
        modal.style.display = "block";
  }
    function fecharModalCriar() {
        let modal = document.querySelector('.modalCriarConta');
        modal.style.display = "none";
  }
    function criarConta(e) {
        e.preventDefault();
        //Recuperando o email / senha / username
        let email = document.getElementById('email-cadastro').value;
        let username = document.getElementById('username-cadastro').value;
        let senha = document.getElementById('senha-cadastro').value;
        //Criando conta firebase

        auth.createUserWithEmailAndPassword(email, senha).then((authUser) => {
            authUser.user.updateProfile({
                displayName: username
            })
            alert('Conta criada com sucesso!');
            let modal = document.querySelector('.modalCriarConta');
            modal.style.display = "none";
        }).catch((error) => {
            alert(error.message);
        });
  }
    function logar(e) {
        e.preventDefault();
        //Recuperar login / senha
        let login = document.getElementById('login-login').value;
        let senha = document.getElementById('login-senha').value;
        //Verificando login
        auth.signInWithEmailAndPassword(login, senha).then((auth) => {
            props.setUser(auth.user.displayName);
            alert('Logado com sucesso!');
        }).catch((error) => {
            alert(error.message);
        });

  }
    function abrirModalUpload(e) {
        e.preventDefault();
        let modal = document.querySelector('.modalUpload');
        modal.style.display = "block";
  }
    function fecharModalUpload(e) {
        e.preventDefault();
        let modal = document.querySelector('.modalUpload');
        modal.style.display = "block";
  }
    function uploadPost(e) {
        e.preventDefault();
        let tituloPost = document.getElementById('titulo-upload').value;
        let progressEl = document.getElementById('progress-upload').value;


  }
    return (

        <div className='header'>
            <div className='modalCriarConta'>
                <div className='formCriarConta'>
                    <div onClick={()=>fecharModalCriar()} className='close-modal-criar'>X</div>
                    <h2>Criar Conta!</h2>
                    <form onSubmit={(e)=>criarConta(e)}>
                        <input id='email-cadastro' type="text" placeholder="Seu e-mail..."/>
                        <input id='username-cadastro' type="text" placeholder="Seu username..."/>
                        <input id='senha-cadastro' type="password" placeholder="Sua senha..."/>
                        <input type="submit" value="Criar conta!"/>
                    </form>
                </div>
            </div>
            <div className='modalUpload'>
                <div className='formUpload'>
                    <div onClick={()=>fecharModalUpload()} className='close-modal-criar'>X</div>
                    <h2>Fazer Upload</h2>
                    <form onSubmit={(e)=>uploadPost(e)}>
                        <progress id='progress-upload' value={progress}></progress>
                        <input id='titulo-upload' type="text" placeholder="Nome da sua foto..."/>
                        <input onChange={(e)=>setFile(e.target.files[0])} type='file' name='file'/>
                        <input type="submit" value="Fazer Upload!"/>
                    </form>
                </div>
            </div>
            <div className='center'>
                <div className='header__logo'>
                    <a href='all'><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'></img></a>
                </div>
                {(props.user) ? <div className='header__logadoInfo'>
                    <span>Bem Vindo, {props.user}!</span>
                    <a onClick={(e)=>abrirModalUpload(e)} href='#'>Postar!</a>
                </div>
                    :
                    <div className='header__loginForm'>
                        <form onSubmit={(e)=>logar(e)}>
                            <input id='login-login' type="text" placeholder="Login..."></input>
                            <input id='login-senha' type="password" placeholder="Senha..."></input>
                            <input type="submit" name='acao' value="Logar!"></input>
                        </form>
                        <div className='btn__criarConta'>
                            <a onClick={(e)=>abrirModalCriarConta(e)} href='#'>Criar Conta!</a>
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default Header;

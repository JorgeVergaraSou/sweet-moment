import { useState } from "react";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { createUser } from "../../redux/states/user";
import { registerService } from "../../services/register.service";
import { PublicRoutes } from "../../models";
//import { getRoleRoute } from "../../utilities";
//import { DecodedToken } from "../../interfaces/decode.token.interface";
//import { Roles } from "../../models";


function RegisterPage() {

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [secretWord, setSecretWordInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordRepeatInput, setPasswordRepeatInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailInput || !passwordInput || !nameInput || !secretWord) {
      return setError('Todos los campos son obligatorios');
    }
    if (passwordInput !== passwordRepeatInput) {
      return setError('Las contraseñas no coinciden');
    }
    setLoading(true);
    setError('');
    try {
      const response = await registerService(nameInput, emailInput, passwordInput, secretWord);
     
      alert(response.message); 
      if (response.success) {
        alert(response.message);

        navigate(`/${PublicRoutes.LOGIN}`);
      } else {
        alert(response.message);
      }

    } catch (error: any) {
    
      alert(error.message); 
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div>
        <div></div>
        <div>
          <h2>Registrarse</h2>
          <form onSubmit={handleRegister} >
            <div>
              <label htmlFor='name'>Nombre</label>
              <input
                name='name'
                id='name'
                type='text'
                placeholder='John'
                onChange={(e) => setNameInput(e.target.value)}
              />
              <label htmlFor='email'>
                Correo electrónico
              </label>
              <input
                name='email'
                id='email'
                type='text'
                placeholder='email@email.com'
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <label htmlFor='secretWord'>
                Palabra secreta
              </label>
              <input
                name='secretWord'
                id='secretWord'
                type='password'
                placeholder='******'
                onChange={(e) => setSecretWordInput(e.target.value)}
              />
              <label htmlFor='password'>
                Contraseña
              </label>
              <input
                name='password'
                id='password'
                type='password'
                placeholder='******'
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <label htmlFor='passwordRepeat'>
                Repite la contraseña
              </label>
              <input
                name='passwordRepeat'
                id='passwordRepeat'
                type='password'
                placeholder='******'
                onChange={(e) => setPasswordRepeatInput(e.target.value)}
              />
            </div>
            <button type="submit" disabled={loading}>Crear cuenta</button>

            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default RegisterPage;
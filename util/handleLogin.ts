import { signInWithEmail } from '../services/authService';

export const handleLogin = async (
    usuario: string, 
    contrasenia: string,
    setLoggedIn: (value: boolean) => void,
    setUsername: (name: string) => void,
    setUsuario: (value: string) => void,
    setContrasenia: (value: string) => void
) => {
    if (!usuario.trim()) {
        alert('Por favor ingresa el usuario');
        return;
    }

    if (!contrasenia.trim()) {
        alert('Por favor ingresa la contraseña');
        return;
    }

    if (contrasenia.length < 4) {
        alert('La contraseña debe tener al menos 4 caracteres');
        return;
    }

    try {
      const result = await signInWithEmail(usuario, contrasenia);
      
      if (result.success) {
        setUsername(usuario);
        setLoggedIn(true);
        setUsuario('');
        setContrasenia('');
      } else {
        console.error('Error de login:', result.error);
        alert(result.error || 'Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error en login:', error);
      alert('Error inesperado en el inicio de sesión');
    }
};
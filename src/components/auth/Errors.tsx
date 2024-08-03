export function ValidateLogin(email: string, password: string, ) {
    let validationErrors = {email : '', password : ''};

    if (!email) {validationErrors.email = 'El email es obligatorio.'
     } else if (!/\S+@\S+\.\S+/.test(email)) {
        validationErrors.email = "El correo electrónico no es válido, faltan signos o puntos";
    }
   
    if (!password) {
        validationErrors.password = 'La contraseña es obligatoria.';
    } else if (password.length < 6) {
        validationErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
   
    // } else if ( !/(?=.*[a-z])(?=.*)(?=.*\d)(?=.*[@$!%*?&])\d@$!%*?&]{6,}$/.test(password) ) {
    //     validationErrors.password = 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial.';
    }
    return validationErrors;
}


export const ValidateUserRegister = (name: string, email: string, password: string, address: string, phone: string) => {
    let errors: { [key: string]: string } = {};

    if (!name) {
        errors.name = "el nombre es obligatorio"
    }

    if (!email) {
        errors.email = "El nombre es requerido.";
    }

    if (!email) {
        errors.email = "El correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "El correo electrónico no es válido.";
    }

    if (!password) {
        errors.password = "La contraseña es requerida.";
    } else if (password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (!address) {
        errors.address = "La dirección es requerida.";
    }

    if (!phone) {
        errors.phone = "El teléfono es requerido.";
    } else if (!/^\d+$/.test(phone)) {
        errors.phone = "El teléfono solo puede contener números.";
    }

    return errors;
};

export const ValidateUserRegister = (name: string, email: string, password: string, address: string, phone: string) => {
    let errors: { [key: string]: string } = {};

    if (!name) {
        errors.name = "El nombre es requerido.";
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

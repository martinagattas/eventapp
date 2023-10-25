export const validateEmail = (email: string): string | undefined => {
    if (!email.includes('@') || !email.includes('.com')) {
        return 'Por favor, ingresa un correo electrónico válido.';
    }
    return undefined;
}

export const validatePasswordLength = (password: string): string | undefined => {
    if (password.length < 8) {
        return 'La contraseña debe contener al menos 8 caracteres.';
    }
    return undefined;
}

export const comparePassword = (password: string, confirmPassword: string): string | undefined => {
    if (password !== confirmPassword) {
        return 'Las contraseñas deben coincidir.';
    }
    return undefined;
}
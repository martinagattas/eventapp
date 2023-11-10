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

// export const validateTitleLength = (title: string): string | undefined => {
//     if (!title || title.length < 5) {
//         return 'El título debe tener al menos 5 caracteres';
//     }
//     return undefined;
// }

// export const validateShortDescriptionLength = (shortDescription: string): string | undefined => {
//     if (!shortDescription) {
//         return 'La descripción corta no puede estar vacía';
//     }

//     const wordCount = shortDescription.split(" ").length -1;
//     if (wordCount < 2 || wordCount > 30) {
//         return 'La descripción corta debe tener más de 1 palabra y 30 palabras o menos.';
//     }

//     return undefined;
// }

export const validateLongDescriptionLength = (longDescription: string): string | undefined => {
    
    if (!longDescription) {
        return 'La descripción larga no puede estar vacía';
    }

    const wordCount = longDescription.split(" ").length -1;
    if (wordCount < 10 || wordCount > 200) {
        return 'La descripción larga debe tener más de 10 palabras y 200 palabras o menos.';
    }
    return undefined;
}

export const validatePrice = (price: string): string | undefined => {

    if (!price) {
        return 'El precio no puede estar vacío';
    }

    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
        return 'El precio debe ser un número válido mayor a cero.';
    }
    return undefined;
}
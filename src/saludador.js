import getHour from './hora.js';

export default function saludar(nombre, genero, edad, idioma = 'español') {
    const hora = getHour();
    let saludo;

    if (idioma === 'español') {
        if (hora < 12) {
            saludo = 'Buenos días ';
        } else if (hora < 19) {
            saludo = 'Buenas tardes ';
        } else {
            saludo = 'Buenas noches ';
        }
    } else if (idioma === 'english') {
        if (hora < 12) {
            saludo = 'Good morning ';
        } else if (hora < 19) {
            saludo = 'Good afternoon ';
        } else {
            saludo = 'Good evening ';
        }
    }

    if (idioma === 'español') {
        if (edad > 30) {
            if (genero === 'femenino') {
                saludo += 'Sra. ' + nombre;
            } else if (genero === 'masculino') {
                saludo += 'Sr. ' + nombre;
            }
        } else {
            if (genero === 'femenino') {
                saludo += 'señorita ' + nombre;
            } else if (genero === 'masculino') {
                saludo += 'joven ' + nombre;
            }
        }
    } else if (idioma === 'english') {
        if (edad > 30) {
            if (genero === 'femenino') {
                saludo += 'Mrs. ' + nombre;
            } else if (genero === 'masculino') {
                saludo += 'Mr. ' + nombre;
            }
        } else {
            if (genero === 'femenino') {
                saludo += 'Miss ' + nombre;
            } else if (genero === 'masculino') {
                saludo += 'young man ' + nombre;
            }
        }
    }

    return saludo;
}

import getHour from './hora.js';
export default function saludar(nombre, genero, edad)
{
    const hora = getHour();
    let saludo;

    if (hora < 12) {
        saludo = 'Buenos días ' ;
    } else if (hora < 19) {
        saludo = 'Buenas tardes ';
    } else {
        saludo = 'Buenas noches ';
    }

    saludo += '' ;
    if (edad > 30)
    {
        if (genero === 'femenino') {
            saludo += ' Sra. ' + nombre;
        } else if (genero === 'masculino') {
            saludo += ' Sr. ' + nombre;
        }
    }
    else {
        if (genero === 'femenino') {
            saludo += ' señorita ' + nombre;
        } else if (genero === 'masculino') {
            saludo += ' joven ' + nombre;
        }
    }
    return saludo;
}
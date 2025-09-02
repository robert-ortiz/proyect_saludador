import getHour from './hora';
export default function saludar(nombre, genero)
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

    if (genero === 'femenino') {
        saludo += ' señorita ' + nombre;
    } else if (genero === 'masculino') {
        saludo += ' joven ' + nombre;
    }

    return saludo;
}


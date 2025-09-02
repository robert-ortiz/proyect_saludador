import getHour from './hora';
function saludar(nombre)
{
    const hora = getHour();

    if (hora < 12) {
        return 'Buenos días ' + nombre;
    } else if (hora < 19) {
        return 'Buenas tardes ' + nombre;
    } else {
        return 'Buenas noches ' + nombre;
    }
}

export default saludar;

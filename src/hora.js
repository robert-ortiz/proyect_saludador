function getHour()
{
    const fecha = new Date();
    const horaactual = fecha.getHours();
    return horaactual;
}

export default getHour;
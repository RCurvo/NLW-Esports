export function convertMinutesToHourString (totalMinutes: number){
    const hours = Math.floor(totalMinutes/60);
    const minutes = totalMinutes % 60;
    const hourString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    return hourString
}
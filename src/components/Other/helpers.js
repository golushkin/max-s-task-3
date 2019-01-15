export const configDate = (date) => {
    const n_date = new Date(date);
    return `${n_date.getDay()}.${n_date.getMonth()+1}.${n_date.getFullYear()}`
}
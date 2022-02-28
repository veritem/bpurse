import moment from "moment";

export const updateJavaScriptObject = (details1, details2) => {
    const outputObject = {};
    Object.keys(details1)
        .forEach(obj => outputObject[obj] =
            (details2.hasOwnProperty(obj) ? details2[obj] : details1[obj]));
    return outputObject;
}

export const dateFormat = (date) => ({
    fromNow() {
        return moment(date).fromNow();
    },

    onlyDate() {
        return moment(date).format("MMM Do YY")
    }
})

export const getFormattedDate = (date) => {
    return dateFormat(date)
}

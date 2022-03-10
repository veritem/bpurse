import moment from "moment";

export const updateJavaScriptObject = (details1:any, details2:any) => {
    const outputObject:any = {};
    Object.keys(details1)
        .forEach((obj:any) => outputObject[obj] =
            (details2.hasOwnProperty(obj) ? details2[obj] : details1[obj]));
    return outputObject;
}

export const dateFormat = (date:any) => ({
    fromNow() {
        return moment(date).fromNow();
    },

    onlyDate() {
        return moment(date).format("MMM Do YY")
    }
})

export const getFormattedDate = (date:any) => {
    return dateFormat(date)
}

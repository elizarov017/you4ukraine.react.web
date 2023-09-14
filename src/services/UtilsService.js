
export default class UtilsService {

    static onlyLatinCharacters(str) {
        return /^[a-zA-Z\s.,]+$/i.test(str);
    }

    static validateEmail(mail) {
        // eslint-disable-next-line no-useless-escape
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
    }
}
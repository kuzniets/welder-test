import {FAVOURITE_REPOS_LIST} from "../settings/constants";

export const initLocalStorage = () => {
    if (localStorage.getItem(FAVOURITE_REPOS_LIST)) return

    localStorage.setItem(FAVOURITE_REPOS_LIST, JSON.stringify([]))
}
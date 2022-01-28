import {FAVOURITE_REPOS_LIST} from "../../settings/constants";

export const toggleFavourite = (repos, repo) => {
    const repoIndex = repos.findIndex((savedRepo) => savedRepo.id === repo.id)

    if (repoIndex >= 0) {
        repos.splice(repoIndex, 1)

        return repos
    }

    repos.push(repo)
    return repos
}

export const getIsFavourite = (repos, currentRepo) => {
    if (repos) return repos.findIndex((repo) => repo.id === currentRepo.id) >= 0

    const favouriteRepos = JSON.parse(localStorage.getItem(FAVOURITE_REPOS_LIST));
    return favouriteRepos.findIndex((repo) => repo.id === currentRepo.id) >= 0
}
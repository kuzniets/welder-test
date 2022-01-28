import { toggleFavourite } from '../../../components/RepoItem/helpers'

describe('test toggleFavourite()', () => {
    it('adds new repo to favourite list', () => {
        const repoToAdd = {id: 3}

        const favouriteRepos = [{id: 1}, {id: 2}]
        const result = toggleFavourite(favouriteRepos, repoToAdd)
        const expectedResult = [{id: 1}, {id: 2}, {id: 3}]
        expect(result).toEqual(expectedResult)
    })

    it('should delete existing repo in the list', () => {
        const repoToAdd = {id: 2}

        const favouriteRepos = [{id: 1}, {id: 2}]
        const result = toggleFavourite(favouriteRepos, repoToAdd)
        const expectedResult = [{id: 1}]
        expect(result).toEqual(expectedResult)
    })

    it('should add repo to the empty list', () => {
        const repoToAdd = {id: 1}

        const favouriteRepos = []
        const result = toggleFavourite(favouriteRepos, repoToAdd)
        const expectedResult = [{id: 1}]
        expect(result).toEqual(expectedResult)
    })

    it('deletes last item from favourites lists', () => {
        const repoToAdd = {id: 1}

        const favouriteRepos = [{id: 1}]
        const result = toggleFavourite(favouriteRepos, repoToAdd)
        const expectedResult = []
        expect(result).toEqual(expectedResult)
    })
})


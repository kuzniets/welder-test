import {render, fireEvent, screen} from '@testing-library/react';

import {initLocalStorage} from '../../../helpers/localStorage';
import RepoItem from '../../../components/RepoItem';

test('tests RepoItem components content view', async () => {
    const repo = {
        id: 1,
        full_name: 'test repo',
        stargazers_count: 300,
        language: 'JavaScript',
        description: 'some description of the repo'
    };
    initLocalStorage()

    render(<RepoItem repo={repo}/>)

    const fullName = screen.getByText(/test repo/i);
    const starsCount = screen.getByText(/300/i);
    const language = screen.getByText(/JavaScript/i);
    const description = screen.getByText(/some description of the repo/i)
    expect(fullName).toBeInTheDocument();
    expect(starsCount).toBeInTheDocument();
    expect(language).toBeInTheDocument();
    expect(description).toBeInTheDocument()
})

test('tests RepoItem components "like" icon state On', async () => {
    const repo = {
        id: 1,
        full_name: 'test repo',
        stargazers_count: 300,
        language: 'JavaScript',
        description: 'some description of the repo'
    };
    initLocalStorage()

    render(<RepoItem repo={repo}/>)

    fireEvent.click(screen.getByLabelText('add to favorites'))
    expect(screen.getByTestId('FavoriteIcon').classList.contains('MuiSvgIcon-colorError')).toBe(true)

})

test('tests RepoItem components "like" icon state OFF', async () => {
    const repo = {
        id: 1,
        full_name: 'test repo',
        stargazers_count: 300,
        language: 'JavaScript',
        description: 'some description of the repo'
    };
    initLocalStorage()

    render(<RepoItem repo={repo}/>)

    fireEvent.click(screen.getByLabelText('add to favorites'))
    fireEvent.click(screen.getByLabelText('add to favorites'))
    expect(screen.getByTestId('FavoriteIcon').classList.contains('MuiSvgIcon-colorError')).toBe(false)
})
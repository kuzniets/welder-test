import {useEffect, useState} from 'react';
import axios from "../../settings/axios";
import api from "../../api";
import {FAVOURITE_REPOS_LIST, FILTERS} from "../../settings/constants";
import { getParams } from "./helpers";

const useReposFilter = (filter, language) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        if (filter === FILTERS.POPULAR) {
            const params = getParams({language})
            axios.get(api.search.repositories, {params})
                .then((res) => {
                    setRepos(res.data.items)
                }, (err) => {
                    console.log(err);
                })
        } else if (filter === FILTERS.FAVOURITE) {
            setRepos(JSON.parse(localStorage.getItem(FAVOURITE_REPOS_LIST))
                .sort((a, b) => b.stargazers_count - a.stargazers_count))
        }
    }, [filter, language])

    return repos
}

export default useReposFilter;
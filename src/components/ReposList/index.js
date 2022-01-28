import React, { useState } from "react";
import {Grid} from "@mui/material";
import useReposFilter from "../Filter";
import {FILTERS} from "../../settings/constants";
import RepoItem from "../RepoItem";
import FiltersToolbar from "./FiltersToolbar";

const ReposList = () => {
    const [selectedFilter, setSelectedFilter] = useState(FILTERS.POPULAR)
    const [language, setLanguage] = useState('')
    const repos = useReposFilter(selectedFilter, language)

    return(
        <>
            <FiltersToolbar
                onFilterSelect={setSelectedFilter}
                onLanguageSet={setLanguage}
            />
            <Grid container spacing={2} direction="column">
                {repos.map((repo) => (
                    <Grid key={repo.full_name} item xs={12}>
                        <RepoItem repo={repo}/>
                    </Grid>

                ))}
            </Grid>
        </>
    )
}

export default ReposList;
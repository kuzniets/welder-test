import React, {useState} from "react";
import {Card, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import { Favorite } from '@mui/icons-material';
import {FAVOURITE_REPOS_LIST} from "../../settings/constants";
import {toggleFavourite, getIsFavourite} from "./helpers";

const RepoItem = ({repo}) => {
    const [isFavourite, setIsFavourite] = useState(getIsFavourite(null, repo));

    const buttonClick = (repo) => {
        const favouriteRepos = JSON.parse(localStorage.getItem(FAVOURITE_REPOS_LIST));
        const updatedFavouriteRepos = toggleFavourite(favouriteRepos, repo);
        localStorage.setItem(FAVOURITE_REPOS_LIST, JSON.stringify(updatedFavouriteRepos));

        if (getIsFavourite(updatedFavouriteRepos, repo)) {
            setIsFavourite(true)
        } else {
            setIsFavourite(false)
        }
    }

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                title={repo.full_name}
                action={
                    <IconButton aria-label="add to favorites" onClick={() => buttonClick(repo)}>
                        <Favorite color={isFavourite ? 'error' : 'primary'}/>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Stars: {repo.stargazers_count}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Language: {repo.language}
                </Typography>
                <Typography variant="body2">
                    {repo.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RepoItem
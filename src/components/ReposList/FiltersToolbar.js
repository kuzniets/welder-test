import React from "react";
import {Button, TextField} from "@mui/material";
import {FILTERS} from "../../settings/constants";

const FiltersToolbar = ({onFilterSelect, onLanguageSet}) => {
    return(
        <div className="toolbar">
            <TextField
                autoFocus
                color="primary"
                label="Language"
                size="small"
                variant="filled"
                onBlur={(e) => onLanguageSet(e.target.value)}
            />
            <Button onClick={() => onFilterSelect(FILTERS.POPULAR)} variant="outlined">Most popular</Button>
            <Button onClick={() => onFilterSelect(FILTERS.FAVOURITE)} variant="outlined">Favourite</Button>
        </div>
    )
}

export default FiltersToolbar;
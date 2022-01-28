import {DateTime} from "luxon";

const getDate = () => {
    return DateTime.now().minus({days: 7}).toFormat('yyyy-MM-dd')
}

export const getParams = (settings) => {
    const params = {
        q: `created:>${getDate()}`,
        sort: 'stars',
        order: 'desc'
    }

    if (settings.language) {
        params.q = `${params.q} language:${settings.language}`
    }

    return params
}
const GITHUB_URL = 'https://api.github.com'

//<-------Search Users------->
export const searchUsers = async (text) =>{

    const params = new URLSearchParams({
        q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`)

    const {items} = await response.json()
    
    return items
}

//<-------Single User------------>
export const getUser = async (login) =>{

    const response = await fetch(`${GITHUB_URL}/users/${login}`)

    if(response.status === 404){
        window.location = '/notfound'
    }else{
        const data = await response.json()

        return data
    }

    
}

//<--------Get single user repos--------->
export const getUserRepos = async (login) =>{

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)

    const data = await response.json()
    
    return data
}
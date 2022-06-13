import { createContext , useReducer} from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
const GITHUB_URL = 'https://api.github.com'


export const GithubProvider = ({children}) =>{
    
    const initialState = {
        users: [],
        user: {},
        repos:[],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
   

    

    //<-------Single User------------>
    const getUser = async (login) =>{
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`)

        if(response.status === 404){
            window.location = '/notfound'
        }else{
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }

        
    }

    //<--------Get single user repos--------->
    const getUserRepos = async (login) =>{
        setLoading()

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)

        const data = await response.json()
        
        dispatch({
            type: 'GET_USER_REPOS',
            payload: data,
        })
    }

    //<----------Clear Users------->
    const clearUsers = () =>dispatch({
        type: 'CLEAR_USERS'
    })

    //<-------Set loading------->
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{...state,clearUsers,getUser,getUserRepos,dispatch}}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext
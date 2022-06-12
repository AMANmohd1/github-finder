import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {

    const [text,setText] = useState('')

    const {users, searchUsers} = useContext(GithubContext)

    const handleChange = (event) =>{
        setText(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(text === ''){
            alert("Field Cannot Be Empty")
        }else{
            searchUsers(text)
            setText('')
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search User" value={text} onChange={handleChange}/>
                    <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type="submit">Search</button>
                </div>
            </div>
        </form>
        </div>
        {users.length > 0 && (
        <div>
            <button className="btn btn-ghost btn-lg">Clear Form</button>
        </div>
        )}
        
    </div>
  )
}

export default UserSearch
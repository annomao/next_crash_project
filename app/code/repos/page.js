export const metadata = {
    title: 'Repos'
}

//fetch repo data using the fetch api

const fetchRepos = async () =>{
    const res = await fetch('https://api.github.com/users/annomao/repos')
    if (!res.ok){
        throw new Error('failed to fetch data')
    }

    return res.json()
}

const ReposPage =  async () => {
    const repos = await fetchRepos()

  return (
    <div className="repos-container"> 
    <h1>REPOSITORIES LIST</h1>
        <ol className="repo-list">
      {repos.map((repo)=>{

        return <li key={repo.id}>
            <h1>{repo.name}</h1>
            <p>{repo.html_url}</p>
            <p>{repo.description}</p>
        </li>
      })}
      </ol>
    </div>
  )
}

export default ReposPage

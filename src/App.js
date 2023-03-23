import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import EditPost from './EditPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import useAxiosFetch from './hooks/useAxiosFetch'
import { useStoreActions } from 'easy-peasy'

function App() {

  const setPosts = useStoreActions((actions) => actions.setPosts)

  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')

  useEffect(()=>{
      setPosts(data)
  }, [data, setPosts])

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts')
  //       setPosts(response.data)
  //     } catch(err) {
  //       if(err.response){
  //         // Not in the 200 response range
  //         console.log(err.response.data)
  //         console.log(err.response.status)
  //         console.log(err.response.headers)
  //       } else {
  //         console.log(`Error: ${err.message}`)
  //       }

  //     }
  //   }
  //   fetchPosts()
  // }, [])

  return (
    <div className="App">
      <Header title = "React JS Blog"/>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home
            isLoading={isLoading}
            fetchError ={fetchError}
          />}/>
          <Route exact path="/post" element={<NewPost/>}/>
          <Route exact path="/post/:id" element={<PostPage/>}/>
          <Route exact path="/edit/:id" element={<EditPost/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;

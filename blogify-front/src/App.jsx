import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import WriteArticlePage from './pages/WriteArticlePage';
import ArticlePage from './pages/ArticlePage';
import MyPage from './pages/MyPage';
import AllArticlesPage from './pages/AllArticlesPage';
import { CategoryProvider } from './contexts/CategoryContext';
import CategoryPage from './pages/CategoryPage';

function App() {

  return (
    <>
       <ToastContainer theme='dark'/>
       <UserProvider>
        <CategoryProvider>
        <Router>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path='/write' 
              element={<ProtectedRouteGuard> <WriteArticlePage /> </ProtectedRouteGuard>} />
               <Route path='/me' 
              element={<ProtectedRouteGuard> <MyPage /> </ProtectedRouteGuard>} />
              <Route path='/sign-in' element={<LoginPage />} />
              <Route path='/all' element={<AllArticlesPage />} />
              <Route path='/sign-up' element={<SignUpPage />} />
              <Route path='/article/:articleId' element={<ArticlePage />} />
              <Route path='/category/:categoryId' element={<CategoryPage />} />
            </Routes>
          </Router>
          </CategoryProvider>
        </UserProvider>
    </>
    
  )
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}

export default App

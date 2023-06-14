import { Outlet,useParams } from 'react-router-dom';
import { UserList } from '../../Components/UserList';

export const UsersPage = () => {
   const { userId } = useParams()
  return (
      <>
         {!userId ? <UserList /> :<Outlet />}
      </>
  )
}

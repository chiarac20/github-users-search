import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function User () {
    const {userLogin}=useParams();

    return <div>
        <div>
            {userLogin}
        </div>
        <Link to="/">search</Link>
    </div>
}
import {Link} from 'react-router-dom';
import quill from '../../assets/quill.svg';

export default function AuthHeader({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <Link to='/'>
                    <img 
                        alt="blogify-logo"
                        className="h-14 w-14"
                        src={quill} 
                    />
                </Link>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-5 font-normal text-center text-sm text-gray-600 iora">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-beige-600 hover:text-beige-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}
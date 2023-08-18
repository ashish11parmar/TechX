import './CreatePost.css';
import { NavLink } from 'react-router-dom';
import Avatar from '../images/avatar.avif';
import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';

const CreatePost = () => {
    return (
        <>
            <div className='container' style={{ display: "flex", justifyContent: "center" }}>
                <div className='media'>
                    <div className='post'>
                        <img src={Avatar} className='avtar' alt='avatar' />
                        <NavLink className='postbutton'  to='/createpost'>Create a post</NavLink>
                    </div>

                    <div className='media1'>
                        <div className="row text-center">
                            <div className="col">
                                <NavLink className='upload'  to='/createpost'><img src={Icon1} className='icon' alt='logo' />Photo</NavLink>
                            </div>
                            <div className="col">
                                <NavLink className='upload' to='/createpost'><img src={Icon2} className='icon' alt='logo' />Video</NavLink>
                            </div>
                            <div className="col">
                                <NavLink className='upload' to='/createpost'><img src={Icon3} className='icon' alt='logo' />Write article</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost
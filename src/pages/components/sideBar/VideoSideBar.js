import React, { useState } from 'react';
import "./videoSidebar.css";
import { Share, Chat, Favorite, FavoriteBorder } from '@mui/icons-material';

function VideoSidebar({likes, messages, shares}) {

    const [liked, setLiked] = useState(false)

    function handleLike() {
        setLiked(!liked)
    }

    return (
    <div className='videoSidebar'>
        <div 
            className='videoSidebarOptions'
            onClick={handleLike}
        >
            {liked ? <Favorite fontSize='large'/> : <FavoriteBorder fontSize='large'/>}
            <p>{liked ? likes + 1 : likes}</p>
        </div>

        <div className='videoSidebarOptions'>
            <Chat fontSize='large'/>
            <p>{messages}</p>
        </div>

        <div className='videoSidebarOptions'>
            <Share fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
    );
}

export default VideoSidebar;

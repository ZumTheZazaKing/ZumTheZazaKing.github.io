import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Socials = () => {

    const openGithub = () => window.open('https://github.com/ZumTheZazaKing')
    const openTwitter = () => window.open('https://twitter.com/zumthezazaking')
    const openReddit = () => window.open('https://www.reddit.com/user/puroguramaz')
    const openInstagram = () => window.open('https://www.instagram.com/zumthezazaking/')

    return (
        <div className="content">
            <div className="socials container">
                <h1>Socials</h1>
                <div className='inner-container'>
                    <div className='social github' onClick={openGithub}>
                        <GitHubIcon sx={{fontSize:"52px"}}/>
                        Github
                    </div>
                    <div className='social twitter' onClick={openTwitter}>
                        <TwitterIcon sx={{fontSize:"52px"}}/>
                        Twitter
                    </div>
                    <div className='social reddit' onClick={openReddit}>
                        <RedditIcon sx={{fontSize:"52px"}}/>
                        Reddit
                    </div>
                    <div className='social instagram' onClick={openInstagram}>
                        <InstagramIcon sx={{fontSize:"52px"}}/>
                        Instagram
                    </div>
                </div>
                <br/>
            </div>
        </div>
    )
}
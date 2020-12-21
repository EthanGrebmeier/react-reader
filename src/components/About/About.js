import {UilTimes} from '@iconscout/react-unicons'

function About(props){
    let styles = {
        "aboutContainer" : {
            "width" : '100vw',
            "height" : '100vh',
            "display" : 'flex',
            "backgroundColor" : 'rgba(53, 80, 112, .5)',
            "justifyContent" : 'center',
            "alignItems" : 'center',
            "position" : 'fixed'
        },
        "about" : {
            "width" : '320px',
            "height" : '350px',
            "padding": '10px',
            "display" : 'flex',
            "position" : 'relative',
            "flexDirection" : 'column',
            "justifyContent" : 'space-evenly',
            "alignItems" : 'center',
            "backgroundColor": '#E56B6F',
            "border": '2px solid black',
            "borderRadius" : '6px'
        },
        "close" : {
            "position" : 'absolute',
            "top" : '10px',
            "right" : '10px',
            "background" : 'transparent',
            "border" : 'none',
            "cursor" : 'pointer'
        }
    }

    return (
        <div className="about-container" id="about-container" style={styles.aboutContainer} onClick={(event) => props.toggleAbout(event)}>
            <div className="about" style={styles.about}>
                <h2> About </h2>
                <p> The average human reads at a speed of about 200-250 words per minute. </p>
                <p> Reader helps you to increase that rate by enabling you to read without having to move your eyes across a page. </p>
                <p> Simply paste in your desired block of text, select your Words Per Minute with the slider, and click Start to begin! </p>
                <button styles={styles.close} onClick={(event) => props.toggleAbout(event)} style={styles.close} id="about-close-button">
                    <UilTimes color="black" size="30" id="about-close-icon" />
                </button>
            </div>
        </div>

    )
}

export default About
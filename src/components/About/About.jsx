import style from './About.module.css';

export default function About() {
    return (
        <div className={style.about}>
            <h1>Welcome to my react project.</h1>
            <p>How to use this app:</p>
            <p className={style.tutorial}>In the 'Add' search bar at the top right, enter a number between 1 and 826. This will retrieve the character with that ID and display it in the home section from the API. Additionally, there is an 'Add Random' button to add a random character.</p>
            <p className={style.tutorial}>Each card has a "DETAILS" button to display more information about the character and a "DELETE" button to remove the character from the home page.</p>
            <p className={style.tutorial}>This project is currently a work in progress, with many exciting features still in the pipeline. While the current functionality allows users to retrieve characters from the API by entering an ID or adding random characters, there is much more to come. We're actively working on enhancing the user experience, expanding the available features, and fine-tuning various aspects of the application.</p>
        </div>
    )
}
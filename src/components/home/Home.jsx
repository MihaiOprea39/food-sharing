import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import './home.scss';
import video from '../../resources/video/intro.mp4';

function FetchRestaurants() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('restaurants')
            .onSnapshot((snapshot => {
                const availableRestaurants = snapshot.docs.map(doc => doc.data());

                setRestaurants(availableRestaurants)
            }))
    }, []);

    return restaurants;
}

export default function Home() {
    return (
        <main className="home-container">
            <header className="video-wrapper">
                <video className="video-player" autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="video-overlay">
                {/*    <h1>Placeholder name</h1>*/}
                {/*    <a href="screens/home.html" className="discover-button flashy-hover">Descopera</a>*/}
                </div>
            </header>

            <article>
                <section>
                    <h2>Cuvant inainte</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum totam dicta quidem eaque
                        quos
                        neque, dolor numquam itaque placeat! Id quia at officia, accusamus placeat vero sed ea quo
                        voluptates. Earum praesentium saepe maxime, esse veniam aperiam,
                        officiis beatae error voluptatem odit provident optio vel eum nemo, facilis numquam fugit
                        laboriosam. Libero veritatis repellendus quo. Facere perferendis blanditiis, voluptates
                        cupiditate
                        veniam repudiandae cumque sit provident nobis, beatae aut aliquam
                        dolorem qui porro repellendus totam animi delectus laudantium.</p>

                    <br/>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum totam dicta quidem eaque
                        quos neque, dolor numquam itaque placeat! Id quia at officia, accusamus placeat vero sed ea quo
                        voluptates. Earum praesentium saepe maxime, esse veniam aperiam,
                        officiis beatae error voluptatem odit provident optio vel eum nemo, facilis numquam fugit
                        laboriosam. Libero veritatis repellendus quo. Facere perferendis blanditiis, voluptates
                        cupiditate veniam repudiandae cumque sit provident nobis, beatae aut aliquam
                        dolorem qui porro repellendus totam animi delectus laudantium.</p>
                </section>
            </article>
        </main>
    );
}

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Layout from './components/Layout'
import Home from './components/Home'
import Contacts from './components/contacts'
import Post from './components/Post'
import Photos from './components/Photos'

const URER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsPTi7dzo4I5310OjTH1NlIDeV7nP4IHKFg&usqp=CAU"

export default function App() {
  const contacts =  [{
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male",
    photo: URER,
  }, {
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female",
    photo: URER,
  }, {
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666",
    photo: "https://stihi.ru/pics/2017/02/05/6700.jpg",
  }, {
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    photo: URER,
  }, {
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male",
    photo: URER,
  }, {
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male",
    photo: URER,
  }];

      const date = "26 февр.";

  const photos = [
    "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/common/swbf2-section-bg-about-top-celebration-edition-xl.jpg.adapt.320w.jpg",
    "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/star-wars-battlefront-key-art.jpg.adapt.crop191x100.628p.jpg",
    "https://i2.wp.com/itc.ua/wp-content/uploads/2019/08/rise-of-skywalker.jpeg",
    "https://3dnews.ru/assets/external/illustrations/2017/11/27/962092/sw%20battlefront%202%20art.jpg",
    "https://fix-note.ru/wp-content/uploads/2020/08/DEpYy8jSdvD9dkvVDSPNoD-650-80-1.jpg",
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    "https://data4.origin.com/asset/content/dam/originx/web/app/games/star-wars/star-wars-squadrons/features/maverick_pdp_prefeature_mission_en_ww_v1.jpg/864772b4-37cc-4f6d-b3f0-d144e29ea5c5/original.jpg",
  ]

  return (
    <Router>
      <div>
          <Layout>
          <Switch>
            <Route path="/contacts">
              <Contacts contacts={contacts}/>
            </Route>
            <Route path="/posts">
              <Post author = {
                contacts[1]} 
                content = {
                  {
                    message: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
                    image: photos[5],
                  }
                } 
                date = {new Date(2011, 23, 11, 11, 23, 4, 567)}
                />
                <Post author = {
                contacts[2]} 
                content = {
                  {
                    message: "Text TexT Text",
                    image: photos[3],
                  }
                } 
                date = {new Date(2011, 23, 11, 11, 24, 4, 567)}
                />
            </Route>
            <Route path="/photos">
              <Photos photos = {photos}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
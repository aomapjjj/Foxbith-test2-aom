import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import home2 from "../../../public/imgs/home2.png"
export default function App() {
  const images = [
    {
      id: "102",
      author: "Ben Moore",
      width: "100%",
      height: "620px",
      url: "https://unsplash.com/photos/pJILiyPdrXI",
      download_url:
        "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "103",
      author: "Ilham Rahmansyah",
      width: "100%",
      height: "620px",
      url: "https://unsplash.com/photos/DwTZwZYi9Ww",
      download_url: "https://picsum.photos/id/103/2592/1936"
    },
    {
      id: "106",
      author: "Arvee Marie",
      width: "100%",
      height: "620px",
      url: "https://unsplash.com/photos/YnfGtpt2gf4",
      download_url: "https://picsum.photos/id/106/2592/1728"
    },
    {
      id: "107",
      author: "Lukas Schweizer",
      width: "100%",
      height: "620px",
      url: "https://unsplash.com/photos/9VWOr22LhVI",
      download_url: "https://picsum.photos/id/107/5000/3333"
    },
    {
      id: "108",
      author: "Florian Klauer",
      width: "100%",
      height: "620px",
      url: "https://unsplash.com/photos/t1mqA3V3-7g",
      download_url: "https://picsum.photos/id/108/2000/1333"
    },
    {
      id: "109",
      author: "Zwaddi",
      width: "100%",
      height: "620px",
      url: "https://unsplash.com/photos/YvYBOSiBJE8",
      download_url: "https://picsum.photos/id/109/4287/2392"
    }
  ]
  return (
    <div className="App">
      <Carousel
        className="crsl"
        infiniteLoop
        interval={1000}
        showThumbs={false}
      >
        {images.map((image) => (
          <img
            src={image.download_url}
            alt={image.author}
            width={"100%"}
            height={"620px"}
            style={{
              objectFit: "cover"
            }}
          />
        ))}
      </Carousel>
    </div>
  )
}

import { Footer } from "../components/Footer";

const InteriorPage = (props) => {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  )
}

export { InteriorPage }

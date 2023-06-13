import coding from "../../assets/coding.svg"
import AboutSection, {TitleDiv, InfoDiv, Link} from "./Style"


const About = () => {
  return (
    <AboutSection>
        <TitleDiv>
            <img src={coding} alt="about-img" width={"200px"} />
            <h3>Fullstack Web Developer <span>omeryildirim</span></h3>
        </TitleDiv>
        <InfoDiv>
            <h4>Hi there, I'm Omer</h4>
            <p>I am into Javascript, React, Python and Django.</p>
            <p>Feel free to connect on <Link href="https://www.linkedin.com/in/omer-yilldirim/" target="_blank" >Linkedin</Link>.</p>
            <p>Send Email : <Link href="mailto:omeryilldirim@outlook.com" target="_blank">omeryilldirim@outlook.com </Link> </p>
        </InfoDiv>
    </AboutSection>
  )
}

export default About
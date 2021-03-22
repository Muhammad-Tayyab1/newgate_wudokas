import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import Navigation from '../components/navigation';
import ServicesSection from '../sections/servicesSection';
import PeopleSection from '../sections/peopleSection';
import IndustrySection from '../sections/industrySection'
import MapSection from '../sections/mapSection';
import SocialSection from '../sections/socialSection';
import apiClient from "../apiClient"
import MainSlider from "../components/Sliders/mainSlider";
import ServicesMobileSection from "../sections/servicesMobileSection";



class IndexPage extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: {
      services: [],
      people: [],
      industries: [],
      socials: [],
    }
  }

  componentDidMount() {
    apiClient.init().then((collections) => {
      this.setState({
        fetchedData: collections,
        loading: false,
        error: false,
      })
    }).catch((err) => {
      this.setState({
        error: true
      })
    })

  }

  render() {

    const data = this.state.fetchedData;

    console.log(data)

    return (
      <Layout>
        
      {/* <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
      <Navigation modificator="top"/>
      <MainSlider />
      <Navigation/>
      <PeopleSection data={data.people}/>
      <ServicesSection data={data.services}/>
      <ServicesMobileSection data={data.services}/>
      <IndustrySection data={data.industries}/>
      <MapSection/>
      <SocialSection data={data.socials}/>
    </Layout>
    )
  }

}

export default IndexPage

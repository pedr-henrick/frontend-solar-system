import React from "react";

class PlanetCard extends React.Component {
  render() {
    const planetName = this.props.planetName
    const planetImage = this.props.planetImage
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={'Planeta ' + planetName}></img>
      </div>
    )
  }
}

export default PlanetCard
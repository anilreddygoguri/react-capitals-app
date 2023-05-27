import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedCountry: countryAndCapitalsList[0].id,
  }

  onUpdateState = event => {
    this.setState({selectedCountry: event.target.value})
  }

  getCountry = () => {
    const {selectedCountry} = this.state
    const getcountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === selectedCountry,
    )
    return getcountry.country
  }

  render() {
    const country = this.getCountry()
    const {selectedCountry} = this.state
    return (
      <div className="capitals-bg-container">
        <div className="capitals-card">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              name="Capitals"
              id="Capitals"
              value={selectedCountry}
              onChange={this.onUpdateState}
              className="dropdown-container"
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  value={eachCountry.id}
                  className="options"
                  key={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="Capitals" className="description">
              Is capital of which country?
            </label>
            <p className="capitalName-text">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals

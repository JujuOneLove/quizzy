import React from 'react';
import Personne from '../components/Personne';

let idx = 0;
class Personnes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    id: idx++,
                    name: "Jane",
                    surname: "Smith",
                    score: 1250,
                    couleur: "#000000",
                    avatar: 'img/avatar2.png'
                },
                {
                    id: idx++,
                    name: "John",
                    surname: "Dow",
                    score: 1780,
                    couleur: "#EEEEEE",
                    avatar: 'img/avatar1.png'
                },
                {
                    id: idx++,
                    name: "Betty",
                    surname: "O'Brian",
                    score: 2120,
                    couleur: "#CCCCCC",
                    avatar: 'img/avatar3.png'
                },
                {
                    id: idx++,
                    name: "Jane",
                    surname: "Smith",
                    score: 1250,
                    couleur: "#567890",
                    avatar: 'img/avatar4.png'
                },
                {
                    id: idx++,
                    name: "John",
                    surname: "Dow",
                    score: 1780,
                    couleur: "#975432",
                    avatar: 'img/avatar5.png'
                },
                {
                    id: idx++,
                    name: "Betty",
                    surname: "O'Brian",
                    score: 2120,
                    couleur: "#678345",
                    avatar: 'img/avatar6.png'
                }
            ],
            minScoreForDisplay: 0
        };
        this.removePersonne = this.removePersonne.bind(this);
    }

    onChange(event) {
        this.setState({minScoreForDisplay: event.target.value});
    }

    reset() {
        this.setState({minScoreForDisplay: 0});
    }

    removePersonne(id) {
        let removefilter = this.state.persons.filter(personne => personne.id !== id);
        this.setState({persons: removefilter});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 2000);
    }

    tick() {
        if (this.state.persons.length > 0) {
            let newTable = this.state.persons;
            let personneIdAlea = (Math.floor(Math.random() * this.state.persons.length));
            //console.log(personneIdAlea)
            let newScore = (Math.floor(Math.random() * 100) + 10);
            newTable[personneIdAlea].score += newScore;
            //console.log(this.state.persons[personneIdAlea]);
            this.setState({persons: newTable});
        }
    }

    render() {
        //let t = this.state.persons.map(personne => <Personne {...personne}/>);
        let filtreAge = this.state.persons.filter(personne => personne.score > this.state.minScoreForDisplay).map(personne =>
            <Personne {...personne} removePersonne={this.removePersonne}/>);
        return (
            <section>
                <div className="filtre">
                    <span>Filtre score</span>
                    <input type="number" placeholder="Score Min ?" value={this.state.minScoreForDisplay}
                           onChange={this.onChange.bind(this)}/>
                    <button onClick={() => this.reset()}>Reset</button>
                </div>
                <div className="list">
                    {filtreAge}
                </div>
            </section>
        );
    }
}

export default Personnes;

import React, {Component} from 'react';
import facebook from '../assets/svg/social/facebook.svg'
import twitter from '../assets/svg/social/twitter.svg'

export default class Form extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="left"><a href="https://facebook.com"><img src={facebook} alt="Facebook"/></a><a href="https://facebook.com"><img src={twitter} alt="Twitter"/></a></div>
                    <div className="right">© Quizzy  2019 - All rights reserved - Mentions légales  - Plan du site</div>
                </div>
                <div id="inner-wrap">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" width="1440" height="321.75"
                         viewBox="0 0 960 214.5" preserveAspectRatio="xMinYMid meet">
                        <defs>
                            <linearGradient id="a">
                                <stop stopColor="#00A8DE"/>
                                <stop offset="0.2" stopColor="#333391"/>
                                <stop offset="0.4" stopColor="#662483"/>
                                <stop offset="0.6" stopColor="#E91388"/>
                            </linearGradient>
                        </defs>
                        <path fill="url(#a)"
                              d="M2662.6 1S2532 41.2 2435 40.2c-19.6-.2-37.3-1.3-53.5-2.8 0 0-421.3-59.4-541-28.6-119.8 30.6-206.2 75.7-391 73.3-198.8-2-225.3-15-370.2-50-145-35-218 37-373.3 36-19.6 0-37.5-1-53.7-3 0 0-282.7-36-373.4-38C139 26 75 46-1 46v106c17-1.4 20-2.3 37.6-1.2 130.6 8.4 210 56.3 287 62.4 77 6 262-25 329.3-23.6 67 1.4 107 22.6 193 23.4 155 1.5 249-71 380-62.5 130 8.5 209 56.3 287 62.5 77 6 126-18 188-18 61.4 0 247-38 307.4-46 159.3-20 281.2 29 348.4 30 67 2 132.2 6 217.4 7 39.3 0 87-11 87-11V1z"/>
                    </svg>
                </div>
            </footer>
        )
    }
}

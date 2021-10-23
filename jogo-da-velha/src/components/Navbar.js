import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
// atalho -> rce
export default class Navbar extends Component {

    //const M = window.M;
    // atalho -> cdm
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }    

    render() {
        return (
            <div>
                  <nav>
                    <div className="nav-wrapper teal lighten-2">
                    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                        <div className="container">                        
                            <a href="#" className="brand-logo">Jogo da Veia</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Menu</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul id="slide-out" class="sidenav">
                    <li><div class="user-view">
                    <div class="background">
                        <img src="https://via.placeholder.com/1000"/>
                    </div>
                    <a href="#user"><img class="circle" src="./logo192.png"/></a>
                    <a href="#name"><span class="white-text name">John Doe</span></a>
                    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Subheader</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                
            </div>
        )
    }
}

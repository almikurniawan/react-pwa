import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Footer from './component/Footer';
import '../../sass/beranda.scss';

export default class Beranda extends Component {
    constructor(props){
        super(props);
        this.state = {
            keahlian : []
        }
    }

    componentDidMount(){
        const self = this;
        fetch('/api/keahlian').then(function(response){
            return response.json();
        }).then(function(result){
            self.setState({
                keahlian : result
            });
        });
    }

    render() {
        return (
            <div>
                <div className="container-fluid content slider">
                    <div className="row deskripsi">
                        <div className="col-sm-12 col-md-8 col-lg-8 no-padding">
                            <img src='/images/front.jpg' className="img-responsive"/>
                            <div className="caption-header">"Hiduplah seperti bambu, dimanapun tempatnya tetap bisa hidup dan berkembang"</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text">
                            <h2>Profil</h2>   
                            <div className="row">
                                <div className="col-sm-6 col-xs-6 col-md-8 col-lg-8 col-xs-offset-3 col-sm-offset-3 col-md-offset-2">
                                    <img src='/images/almi.jpg' className="img-responsive img-circle"/>
                                </div>
                            </div>
                            <p>
                                Hallo, Namaku <b>Almi Kurniawan</b>. Saya saat ini bekerja di salah satu perusahaan pembuat software di <b>Surabaya</b> sebagai
                                <b> Web Programmer</b>. Saya menyukai IT terutama di bidang programming, selain web saya juga bisa membuat <b>Mobile Apps</b> (mungkin agak lama buatnya, hehehe...).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 keahlian">
                            <h2 className="title" style={{paddingLeft:'15px'}}>Pekerjaan</h2>   
                            <div className="col-xs-12 col-md-6">
                                <a href="http://koni-kotakediri.or.id/" className="thumbnail">
                                  <img src="/images/koni_thumb.jpg" alt="..."/>
                                  <div className="caption">
                                    <center>
                                      <a href="http://koni-kotakediri.or.id/">
                                        Web Site Koni Kota Kediri
                                      </a>
                                    </center>
                                  </div>
                                </a>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <a href="https://www.pkk.kedirikota.go.id/" className="thumbnail">
                                  <img src="/images/pkk-kota-kediri.jpg" alt="..."/>
                                  <div className="caption">
                                    <center>
                                      <a href="https://www.pkk.kedirikota.go.id/">
                                        Web Site PKK Kota Kediri
                                      </a>
                                    </center>
                                  </div>
                                </a>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <a href="Javascript:;" className="thumbnail">
                                  <img src="/images/bot-bri.jpg" alt="..."/>
                                  <div className="caption">
                                    <center>
                                      <Link to='/read/bot-bri'>
                                        BOT Broadcast BRI kanwil nganjuk
                                      </Link>
                                    </center>
                                  </div>
                                </a>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <a href="#" className="thumbnail">
                                  <img src="/images/si-koi.jpg" alt="..."/>
                                  <div className="caption">
                                    <center>
                                      <Link to='/read/si-koi'>
                                        SI Koi
                                      </Link>
                                    </center>
                                  </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h2 className="title">Keahlian</h2>
                            {
                                _.map(this.state.keahlian, function(value, index){
                                    return (
                                        <div>
                                            <h4>{value.tech}</h4>
                                            <div className="progress">
                                              <div className={"progress-bar progress-bar-"+value.color} role="progressbar" aria-valuenow={value.progress} aria-valuemin="0" aria-valuemax="100" style={{width: value.progress+'%'}}>
                                                <span className="sr-only">{value.progress}% Complete (success)</span>
                                              </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
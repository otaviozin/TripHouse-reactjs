import React from "react";

import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

function Home(){
    return(
        <div>
            <Navbar />
            <div className="bg-img bg-blur">
                <section className="container pt-md-5 px-4 px-lg-5" style={{height: 600}}>
                    <div className="row align-items-center justify-content-center text-light text-center h-75">
                        <div className="col-md-12">
                            <h2>Alugue sua casa ou pousada</h2>
                            <p className="fs-5">Temos os melhores locais para te proporcionar a melhor experiência possível</p>
                        </div>
                        <div className="col-md-12">
                            <h2>Conheça nossa plataforma</h2>
                            <a className="btn btn-green mt-3" href="#about">Sobre nós</a>
                        </div>
                    </div>
                </section>
            </div>

            <section id="about" className="bg-coral py-5 shadow">
                <div className="container text-center">
                    <h1>Trip House</h1>  
                    <p className="mx-5 my-3">Somos uma empresa locadora de pousadas e casas para você e sua família viajarem com o maior conhtmlForto possível. Queremos sempre o conhtmlForto de nossos hóspedes, então solicitamos uma revisão no local assim que outra pessoa termina sua temporada, garantindo a sua segurança e evitando dores de cabeça no meio da sua viagem.</p>
                    <p className="mx-5">Para que tenhamos controle das avaliações e dos locais, solicitamos o nome, endereço e CPF da pessoa que irá alugar. Assim evitamos que pessoas não reais façam o uso inapropriado ou avaliem de htmlForma negativa algum imóvel.</p>
                    <a className="btn btn-coral" href="/rent">Veja nossos imóveis</a>
                </div>
            </section>

            <section id="contact" className="container px-3 px-md-5 pt-4 pb-3 pb-md-5">
                <div className="row">
                    <h1 className=" my-4 mb-md-5">Contatos</h1>
                    <div className="col-md-6 mb-5">
                        <div className="card shadow">
                            <div className="card-header">
                                Entre em contato via email
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Preencha os dados abaixo</h5>
                                <p className="card-text">Atenção: não compartilhe seus dados pessoais (RG, CPF) no conteúdo do email. Não solicitamos esse tipo de dado via email ou SMS.</p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="inputName" className="htmlForm-label">Nome</label>
                                        <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail"></input>
                                    </div>
                                    <div className="form-floating my-3">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}}></textarea>
                                        <label htmlFor="floatingTextarea2">Qual é a sua dúvida ou reclamação?</label>
                                    </div>
                                    <button type="submit" className="btn btn-green">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header">
                                Você também pode ligar ou falar via WhatsApp
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Nossos telefones</h5>
                                <p className="card-text my-3 fs-5"><i className="fab fa-whatsapp me-2"></i>+55 11 91234-5678</p>
                                <p className="card-text my-3 fs-5"><i className="fas fa-phone me-2"></i>+55 11 9876-5432</p>
                                <p className="card-text">Esses são os nossos números oficiais. Não entramos em contato de outro número.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
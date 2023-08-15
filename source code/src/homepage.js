import './App.css';

function Homepage(props) {
    return(
        <div>
            <h1>Um pouco sobre mim</h1>
            <article className='midsection'>
                <div className='paragraph'>
                    <p>Olá, eu sou Marliton Gabriel Carvalho Santos, tenho 19 anos e estou fazendo este "Site" para falar sobre minhas habilidades atuais e para que você me conheça um pouco melhor.</p>
                </div>
                <div className='paragraph'>
                    <p>Eu decidi que seria um programador quando tinha 14 anos que foi quando eu obtive meu computador e paixão por tecnologia, porém nunca fiz por onde até este ano quando percebi que não iria ter a capacidade de frequentar uma faculdade de ciências da computação, por isso, decidi estudar sozinho para alcançar meu objetivo, no final de junho de 2023 por recomendação de um amigo programador, eu comecei a estudar com os cursos de Front-End da Meta no <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer">Coursera</a> e hoje dia 11/08/2023, um mês e alguns dias já terminei 4 cursos: dois de HTML e CSS, um de JS e React, os certificados estão disponíveis em meu <a href="https://www.linkedin.com/in/marliton-gabriel-carvalho-santos-421019272/">Linkedin</a>, inclusive este "Site" é um SPA, uma habilidade que adquiri um dias atrás.</p>
                </div>
                <div className="paragraph">
                    <p>Infelizmente, eu não tenho experiência mas aprendo rápido e tive a iniciativa de aprender sozinho, apenas com cursos completamente em inglês, eu acredito que irei aprender relativamente rápido as habilidades que me forem apresentadas e requisitadas.</p>
                </div>
            </article>
        </div>
    )
}

export default Homepage;
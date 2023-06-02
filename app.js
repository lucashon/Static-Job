const summaryBox = document.querySelector('.content1')


window.addEventListener('DOMContentLoaded', () => {
   
    showBoxes()
 
});

function showBoxes(){
    fetch("data.json")
    .then((data) => {
        return data.json()
    })
    .then((item) => {
        let displaySummary = item.map((info)=>{
            let Languages = info.languages.map((language) => {
                return `<button>${language}</button>`
            }).join("")
            return  `
             <section class="content">
             <div class="conteudo-box">
            <div class="perfil">
              <img src=${info.logo} alt="">
            </div>
              <article class="titulos">
                <div class="texto1">
                  <p class="text-verde">${info.company}</p> 
                  ${info.new ? '<div class="new">New!</div>': ''}
                  ${info.featured ? '<p class="Featured">FEATURED</p>': ''}
                   
                  
                </div>
                <div class="texto2">
                  <p>${info.position}</p>
                </div>
                <div class="texto3">
                  <p>  ${info.postedAt} •
                    ${info.contract} •
                    ${info.location}</p>
                </div>
              </article>
    <hr>
            </div>
          </div> <div class="butoes">
        <button class="ajuste">${info.role}</button>
        <button>${info.level}</button>
        
        ${Languages}
    </div>
    </section> `
 
        });
        displaySummary = displaySummary.join("")
        summaryBox.innerHTML = displaySummary
        // console.log(displaySummary);
    
    })
    .catch((error) => console.log('Error: ' +error))
}




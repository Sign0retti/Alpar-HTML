const contentEl = document.querySelector("main#content");
const menuEl = document.querySelector("aside#menu")

const posts = [{
    id: '1',
    title: "ATT Cs2",
    content: `<p>
          O Counter-Strike 2 recebeu uma nova atualização trazendo melhorias no desempenho, correções de bugs e ajustes no balanceamento das armas.
        </p>`
},
{   id: "2",
    title:"Mudanças",
    content:`<li>O mapa Mirage recebeu ajustes gráficos e novas posições estratégicas.</li>
          <li>O rifle M4A4 teve um leve ajuste de recuo para maior equilíbrio competitivo.</li>
          <li>Melhoria na detecção de impacto e otimização dos servidores para diminuir lag.</li>`
},
{   id:"3",
    title:"Top 5 Melhores Times Mundiais",
    content:`<li>FaZe Clan – Dominando os torneios internacionais com um time sólido e experiente.</li>
          <li>G2 Esports – Destaque com jogadas incríveis e uma performance consistente.</li>
          <li>Natus Vincere (NaVi) – Mantendo sua tradição de alto nível no CS competitivo.</li>
          <li>Vitality – O time francês vem surpreendendo com estratégias inovadoras.</li>
          <li>Cloud9 – Uma equipe renovada que promete chegar ao topo.</li>`
}]  

function addPost(post){
    const articleEl = document.createElement("article");
    articleEl.setAttribute("data-post",post.id)
    articleEl.className = "post";
    const headerEl = document.createElement("header");
    headerEl.className = "post-header";
    const titleEl = document.createElement("h2")
    titleEl.innerHTML = post.title;
    headerEl.appendChild(titleEl)
    const postContentEl = document.createElement("section")
    postContentEl.className = "post-content";
    postContentEl.innerHTML = post.content;

    console.log(articleEl.dataset)

    articleEl.appendChild(headerEl);
    articleEl.appendChild(postContentEl);
    contentEl.appendChild(articleEl);
}

// for (let i = 0; i < posts.length; i++){
//     addPost(posts[i]);
// }

posts.forEach(addPost);
menuEl.style.display="flex"
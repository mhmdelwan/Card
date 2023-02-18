
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = "center";

let body = document.body;
body.style.background = '#CB80FF';

function element()
{
    let card = document.createElement('div');
    let title = document.createElement('h1');
    let job = document.createElement('p');
    let details = document.createElement('p');
    let img = document.createElement('img');
    let email = document.createElement('button')
    let github = document.createElement('button')
    let linkedin = document.createElement('button')
    
    

    let head = document.createTextNode('Mohamed Elwan');
    let jobUser = document.createTextNode('Web Developer'); 
    let content = document.createTextNode(`I am a web developer. I love sharing my experience with others, and I also love to learn something new every single day.`)
    let gemail = document.createTextNode(`elwan2771@gmail.com`);
    let link = document.createTextNode(`https://github.com/mhmdelwan`);
    let url = document.createTextNode('https://www.linkedin.com/in.mohamed-elwan-298758253')
    img.src = 'images/mo.jpg';
    img.style.width = '50%';
    img.style.borderRadius = '10px';
    title.style.color = '#fff';
    details.style.color = '#fff';
    email.style.color = '#fff';
    email.style.background = '#8956F1';
    email.style.borderRadius = '10px';
    github.style.color = '#fff';
    github.style.background = '#8956F1';
    github.style.borderRadius = '10px';
    linkedin.style.color = '#fff';
    linkedin.style.background = '#8956F1';
    linkedin.style.borderRadius = '10px';

    card.style.width = '400px';
    card.style.background = '#020102';
    card.style.color = '#CB80FF';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    container.style.marginTop = '70px';
    card.style.borderRadius = '10px';
    container.style.background = '#8956F1'
    container.style.width = '95%';
    container.style.marginLeft = 'auto';
    container.style.marginRight = 'auto';
    container.style.borderRadius = '15px'; 
     

    title.appendChild(head);
    job.appendChild(jobUser);
    details.appendChild(content);
    email.appendChild(gemail);
    github.appendChild(link);
    linkedin.appendChild(url);


    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(job);
    card.appendChild(details);
    card.appendChild(email);
    card.appendChild(github);
    card.appendChild(linkedin);
    container.appendChild(card);
    
}
for(var i = 0; i<1; i++)
{
    element()
}
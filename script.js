// Array

const speakers = [
  {
    img: './images/demo-pic-1.png',
    name: 'Thomas Fox',
    profession: 'CEO at Tech Experts',
    description: 'Tom Fox is president of Technology Experts, southeast Michigan&#39s premier small business computer support company, and a 20 year veteran of the IT services industry.',
  },
  {
    img: './images/demo-pic-2.png',
    name: 'David Lippman',
    profession: 'Nationwide commercial & civil litigation attorney.',
    description: 'Lippman Recupero is a commercial/consumer debt and subrogation collection agency and law firm that provides nationwide collection and litigation services.',
  },
  {
    img: './images/demo-pic-3.png',
    name: 'Hamish Clark',
    profession: 'Founder - Klynk Ventures',
    description: 'An authentic leader and innovative thinker. I enjoy making connections that are relationship first and deliver agile ideas, solutions and products that add true value.',
  },
  {
    img: './images/demo-pic-4.png',
    name: 'Marlon Moodley',
    profession: 'Advisor to Boards | Technology | Strategy',
    description: 'B2HA works mainly on matters at board and executive level for our clients. We are often approached to address governance, strategy and technology.',
  },
  {
    img: './images/demo-pic-5.png',
    name: 'Michal Wronski',
    profession: 'Software engineer, product architect, technology expert',
    description: 'Software development, data analytics, software architecture, scalable computing, software development life cycle',
  },
  {
    img: './images/demo-pic-6.png',
    name: 'Paul Ashley Jensen',
    profession: 'Business Development Coach for Experts',
    description: 'Business Development Experts: delivering Strategies & Services: so that the opportunities you want come looking for you In Person.',
  },
];

const featuredSpeakers = document.getElementById('featured-speakers');

speakers.forEach((speaker) => {
  const speakerContent = `
    <div class="d-flex col-md-6">
        <div class="hover-zoom p-2">
          <img src="${speaker.img}" id="card-pic" alt="conference speaker">
        </div>
        <div class="card-content m-2">
          <h6 class="name">${speaker.name}</h6>
          <small>${speaker.profession}</small>
          <hr>
          <p class="p-0">
            ${speaker.description}
          </p>
    </div>
    `;

  featuredSpeakers.innerHTML += speakerContent;
});
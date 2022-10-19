import React from 'react';

import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => {


  const [status, setStatus] = React.useState("Envoyer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("En cours...");
    const { firstName, lastName, email, phone, formContent } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      formContent: formContent.value,
    };
    let response = await fetch(`${import.meta.env.VITE_APIURL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify(details),
    });
    setStatus("Envoyer");
    let result = await response.json();
    alert(result.status);
  };



  return(
    <div className="app__newsletter" id='contact'>
      <div className="app__newsletter-heading">
        <SubHeading title="évènement" />
        <h1 className="headtext__cormorant">Nous contacter</h1>
        <p className="p__opensans">Besoin d'informations pour organiser vos évènements (mariage, baptême, CE...) ? <br /> On répond à toutes vos questions !</p>
      </div>

      <form className="app__newsletter-input flex__center" onSubmit={handleSubmit}>
        <div className='app__newsletter-input_name'>
          <input required type="text" placeholder="Nom*" name='lastName'/>
          <input required type="text" placeholder="Prénom*" name='firstName'/>
        </div>
        <div className='app__newsletter-input_info'>
          <input required type="email" placeholder="Email*" name='email'/>
          <input type="tel" pattern="[0-9]{10}" placeholder="Téléphone" name='phone'/>
        </div>
        <textarea required placeholder="Votre message*" name='formContent'/>
        <button type="submit" className="custom__button" >{status}</button>
      </form>


    </div>
  )
}

export default Newsletter;
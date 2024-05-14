const Contact = () => {
	return (
		<div className="container mt-5">
		  <h1>Contact</h1>
		  <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
		  
		  <form>
			<div className="mb-3">
			  <label htmlFor="name" className="form-label">Nom</label>
			  <input type="text" className="form-control" id="name" name="name" required />
			</div>
			<div className="mb-3">
			  <label htmlFor="email" className="form-label">Email</label>
			  <input type="email" className="form-control" id="email" name="email" required />
			</div>
			<div className="mb-3">
			  <label htmlFor="message" className="form-label">Message</label>
			  <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
			</div>
			<button type="submit" className="btn btn-primary">Envoyer</button>
		  </form>
		</div>
	  );
	};

export default Contact;